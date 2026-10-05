/**
 * Apps Script untuk order Xenith (Hamzah Quran).
 *
 * SETUP:
 * 1. Buka Google Sheet -> Extensions -> Apps Script, tempel kode ini.
 * 2. Project Settings -> Script properties -> tambah:  TOKEN = (string acak panjang)
 *    Token yang sama dipasang di Cloudflare sebagai XENITH_SHEETS_TOKEN.
 * 3. Jalankan fungsi setup() sekali (buat sheet "Orders" + header kalau belum ada).
 * 4. Deploy -> New deployment -> Web app
 *      Execute as: Me | Who has access: Anyone
 *    Salin URL /exec -> Cloudflare env XENITH_SHEETS_URL.
 * 5. Tiap ubah kode: Deploy -> Manage deployments -> Edit -> New version.
 *
 * Kolom (A-N):
 * order_id | tanggal | nama | wa | alamat | produk | qty | total | status |
 * xenith_ref | paid_at | payment_url | paid_amount | note
 *
 * Status: PENDING, PAID, EXPIRED, CREATE_FAILED, AMOUNT_MISMATCH
 */

const SHEET_NAME = 'Orders';
const HEADERS = ['order_id', 'tanggal', 'nama', 'wa', 'alamat', 'produk', 'qty', 'total',
  'status', 'xenith_ref', 'paid_at', 'payment_url', 'paid_amount', 'note'];
const COL = {}; HEADERS.forEach(function (h, i) { COL[h] = i + 1; });

function setup() { getSheet_(); }

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function findRow_(sh, orderId) {
  if (sh.getLastRow() < 2) return 0;
  var cell = sh.getRange(2, 1, sh.getLastRow() - 1, 1)
    .createTextFinder(String(orderId)).matchEntireCell(true).findNext();
  return cell ? cell.getRow() : 0;
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet() { return out_({ ok: true, service: 'xenith-orders' }); }

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    var b = JSON.parse(e.postData.contents);
    var token = PropertiesService.getScriptProperties().getProperty('TOKEN');
    if (!token || b.token !== token) return out_({ ok: false, error: 'unauthorized' });

    var sh = getSheet_();
    var row;

    switch (b.action) {
      case 'create':
        if (findRow_(sh, b.orderId)) return out_({ ok: false, error: 'duplicate order_id' });
        row = sh.getLastRow() + 1;
        sh.getRange(row, COL.wa).setNumberFormat('@'); // jaga angka 0 di depan nomor WA
        sh.getRange(row, 1, 1, HEADERS.length).setValues([[
          b.orderId, new Date(), b.name, b.phone, b.address, b.produk, b.qty, b.total,
          'PENDING', '', '', '', '', b.note || ''
        ]]);
        return out_({ ok: true });

      case 'setRef':
        row = findRow_(sh, b.orderId);
        if (!row) return out_({ ok: false, error: 'order not found' });
        sh.getRange(row, COL.xenith_ref).setValue(b.xenithRef || '');
        sh.getRange(row, COL.payment_url).setValue(b.paymentUrl || '');
        return out_({ ok: true });

      case 'markPaid':
        row = findRow_(sh, b.orderId);
        if (!row) return out_({ ok: false, error: 'order not found' });
        var cur = sh.getRange(row, 1, 1, HEADERS.length).getValues()[0];
        var status = cur[COL.status - 1];
        var total = Number(cur[COL.total - 1]);
        var name = cur[COL.nama - 1];
        if (status === 'PAID') return out_({ ok: true, newlyPaid: false, name: name, total: total });
        var paid = Number(b.paymentAmount) || 0;
        if (paid < total) {
          sh.getRange(row, COL.status).setValue('AMOUNT_MISMATCH');
          sh.getRange(row, COL.paid_amount).setValue(paid);
          return out_({ ok: true, newlyPaid: false, mismatch: true, name: name, total: total });
        }
        sh.getRange(row, COL.status).setValue('PAID');
        sh.getRange(row, COL.paid_at).setValue(new Date());
        sh.getRange(row, COL.paid_amount).setValue(paid);
        if (b.xenithRef && !cur[COL.xenith_ref - 1]) sh.getRange(row, COL.xenith_ref).setValue(b.xenithRef);
        return out_({ ok: true, newlyPaid: true, name: name, total: total });

      case 'markExpired':
        row = findRow_(sh, b.orderId);
        if (!row) return out_({ ok: false, error: 'order not found' });
        if (sh.getRange(row, COL.status).getValue() === 'PENDING') {
          sh.getRange(row, COL.status).setValue('EXPIRED');
        }
        return out_({ ok: true });

      case 'markFailed':
        row = findRow_(sh, b.orderId);
        if (!row) return out_({ ok: false, error: 'order not found' });
        sh.getRange(row, COL.status).setValue('CREATE_FAILED');
        if (b.note) sh.getRange(row, COL.note).setValue(b.note);
        return out_({ ok: true });

      case 'get':
        row = findRow_(sh, b.orderId);
        if (!row) return out_({ ok: false, error: 'order not found' });
        var r = sh.getRange(row, 1, 1, HEADERS.length).getValues()[0];
        return out_({
          ok: true,
          order: {
            status: r[COL.status - 1],
            total: Number(r[COL.total - 1]),
            xenithRef: r[COL.xenith_ref - 1],
            paymentUrl: r[COL.payment_url - 1]
          }
        });

      default:
        return out_({ ok: false, error: 'unknown action' });
    }
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}
