# TASK: Detail pesanan di "Pesanan Saya" + tombol pembayaran

Status: **revisi 2 (panel bank VA + layout 3 kolom) DIBATALKAN -> tombol pembayaran
balik ke 2 opsi: "QRIS & Transfer Bank" (value xenith) + COD. Tanpa panel VA,
tanpa logo bank, tanpa `paymentChoice`. Detail pesanan (bagian A) tetap dipakai.
Belum di-commit, belum push.**

## SUDAH SELESAI + TERVERIFIKASI

| Cek | Hasil |
|---|---|
| `node --check script.js` | lulus |
| `test-render.mjs` (fungsi `renderOrders` di-extract langsung dari file; 4 fixture: order lama / baru lengkap / tanpa cart / `va_sampoerna`) | SEMUA LULUS — aritmetika totalan, escaping XSS, label "QRIS & Transfer Bank", tanpa `undefined`/`NaN` |
| `test-cart-markup.mjs` (2 radio, default checked xenith, label baru, tanpa `data-choice`/panel/logo VA, layout `space-y-2`) | LULUS |
| `test-script-wiring.mjs` (`normalSubtotal` masuk 2 snapshot, tanpa jejak `paymentChoice`/`PAYMENT_CHOICE_LABELS`/`syncVaActive`, branch xenith/cod utuh) | LULUS |
| `test-inline-scripts.mjs` (parse semua `<script>` inline 3 halaman) | LULUS |
| `npm run build` (vite) | sukses |
| Regresi `localhost:3000` (revisi 2) | 4 halaman = 200; 5 SVG placeholder = 200 `image/svg+xml`; `xenith-status` = 400; `xenith-create`/`rates`/`notify` GET = 405 |

Bug yang ketemu & sudah diperbaiki: `const normalSubtotal` sempat masuk ke
`updateGrandTotal()` (indentasi `totalQty` identik -> edit kena yang salah) ->
`xenithOrder` bakal `ReferenceError` pas checkout. Sudah dipindah ke fungsi
checkout (`script.js:1757`); baris `const totalQty` di `updateGrandTotal`
dikembalikan persis seperti HEAD.

Tes di `C:\Users\Refri\AppData\Local\Temp\opencode\` sudah disesuaikan dengan
state 2 tombol (ekspektasi VA/`paymentChoice` dibuang).

## BELUM DIKERJAKAN

### 1. Commit & push (belum ada sama sekali)
- Perubahan frontend (`cart.html`, `script.js`, `pesanan-saya.html`, `thank-you.html`)
  + 5 SVG placeholder + `.gitignore` (`dist/`) + `task.md` + `.opencode/plans/*` belum di-commit.
- Dari sesi migrasi Cloudflare->Vercel juga masih menggantung: `.gitignore`, `package.json`,
  `package-lock.json` modified. `vercel.json` + `api/*.js` sudah ke-commit di `25b22c8`.
- Putuskan: sekali commit atau campur (frontend vs tooling). Target branch `test`, jangan `master`.

### 2. Logo bank
`img/bank/danamon.svg`, `maybank.svg`, `sampoerna.svg`, `cimb.svg`, `permata.svg`
(5 placeholder) sekarang **tidak dipakai di cart** (panel VA dibuang), tapi file-nya
masih dipakai halaman lain? Tidak — cek dulu sebelum hapus. `qris.svg`, `bca.svg`,
`bsi.svg`, `jago.svg`, `n/bri/mandiri.svg` dipakai footer/index/shop/dll.

### 3. Tes manual di browser (belum ada headless browser)
Belum diverifikasi secara visual/interaktif:
- Cart: 2 tombol "QRIS & Transfer Bank" (default checked) + COD; klik COD ->
  ring pindah, total naik 4% (`codFee`), klik xenith -> `codFee` hilang.
- Checkout xenith -> `/api/xenith-create` dipanggil sekali, redirect ke link payment.
- Checkout COD -> `codFee` 4% tetap.
- `localStorage hq_orders` berisi `paymentMethod: 'xenith'` + cart lengkap + `normalSubtotal`
  (tanpa field `paymentChoice`).
- `pesanan-saya.html`: order baru -> gambar + catatan + totalan + label "QRIS & Transfer Bank";
  order lama (tanpa field baru) -> tanpa error console.
- `thank-you.html`: label pembayaran "QRIS & Transfer Bank".
- Badge `PAID` tetap sinkron (bukti filter `paymentMethod === 'xenith'` utuh).

### 4. Sequential order ID `HQ-YYMMDD001` (contoh `HQ-261008001`) - PUTUSAN BELUM DIAMBIL
Pernah diajukan, question tool di-dismiss. Riset sudah jalan, intinya:
- ID dibikin **server-side** `api/xenith-create.js:42` (`'HQ-' + Date.now()`); path manual
  order di `script.js` bikin ID **client-side** -> dua sumber, harus diseragamkan.
- Regex `/^HQ-\d{10,}$/` di `api/xenith-status.js:18` dan `pesanan-saya.html` -> format baru
  cuma 9 digit, wajib dilonggarkan dulu.
- `pesanan-saya.html` filter `paymentMethod === 'xenith'` -> order manual tak masuk riwayat.
- `apps-script/xenith-orders.gs:53` pakai `LockService` global untuk semua action ->
  perlu pengecekan apakah cukup buat nomor urut per hari.
- Butuh: angka urut reset harian + antisipasi race saat 2 orang checkout bareng.

### 5. Task track-order (stepper produksi) - SUDAH DIBATALKAN, tapi datanya belum pernah ada
Pernah diriset lalu dibatalkan user. Kalau mau dilanjut butuh:
- **Spreadsheet ID + nama tab** dari user (sampai sekarang belum pernah dikasih).
- Join key `order_id (HQ-xxx)`, stepper 4 langkah + terminal "Order Dibatalkan",
  tampil untuk PAID + order manual, 5 nilai standar, default langkah 1 kalau tak ada
  di sheet, manual di sheet.

### 6. Hal kecil yang belum diputuskan
- Tes di `C:\Users\Refri\AppData\Local\Temp\opencode\` (`test-render.mjs`,
  `test-cart-markup.mjs`, `test-script-wiring.mjs`, `test-inline-scripts.mjs`)
  belum masuk repo -> mau dipindah ke `tests/` atau dibiarkan di temp?
- `new/` (copy Cloudflare Pages) tidak ikut perubahan ini -> sinkron atau buang?
- Pernah ada pertanyaan soal format ID urut yang belum dijawab (butir 4).


## A. Status lebih detail di `pesanan-saya.html` (SUDAH DIPAKAI)

> Catatan: nomor baris di bagian A/B di bawah adalah state **sebelum** revisi, sekarang
> sudah bergeser. Yang penting idenya, bukan angkanya.

### Masalah inti
Order snapshot di `hq_orders` cuma simpan `{name, qty, price, quranType}`
(`script.js:1822-1827` xenith, `script.js:1895-1900` manual). Gambar, nama cover,
ucapan, font, harga katalog semuanya hilang. Data aslinya ada di item keranjang
(`script.js:1053-1068`: `img, coverImg, customName, coverName, coverCategory,
customNote, customFont, priceCrt`) dan sudah ikut terkirim ke sheet lewat kolom
`produk` (`script.js:1780-1786`), tapi tidak disimpan ke localStorage.

-> Perlu ubah kedua builder snapshot. Nol perubahan API.

### 1. `script.js` - 2 tempat (baris 1822-1827 & 1895-1900), mapping identik
```js
cart: cart.map(item => ({
    name: item.name, qty: item.qty,
    price: parsePrice(item.priceWa || item.priceCrt),
    priceCrt: parsePrice(item.priceCrt || item.priceWa),
    img: item.img || '',
    coverImg: item.coverImg || '',
    quranType: item.quranType || '',
    customName: item.customName || '',
    coverName: item.coverName || '',
    coverCategory: item.coverCategory || '',
    customNote: item.customNote || '',
    customFont: item.customFont || ''
}))
```
Tambah `normalSubtotal` di level order.

### 2. `pesanan-saya.html` - render item (baris 455-464)
- Thumbnail 64x64 rounded: `item.img`, fallback `item.coverImg`. `onerror` ->
  sembunyikan, teks tetap ada.
- Nama produk + tag varian (`Latin` / `Tanpa Latin`).
- Blok catatan kecil, cuma tampil kalau isinya non-kosong:
  `Nama di cover`, `Ucapan`, `Font`, `Cover: {coverName} ({coverCategory})`.

### 3. `pesanan-saya.html` - totalan (ganti blok 488-507)

| Baris | Sumber | Syarat tampil |
|---|---|---|
| Harga Normal | `normalSubtotal` | field ada |
| Diskon Barang | `normalSubtotal - subtotal` | field ada |
| Subtotal Barang | `subtotal` | selalu |
| Diskon Ongkir | `subsidy` | `> 0` |
| Ongkos Kirim | `ongkir` | selalu (`0` -> `Gratis 🎉`) |
| Voucher XTRA | `voucher` + `voucherLabel` | `> 0` |
| Biaya Admin COD 4% | `codFee` | `> 0` |
| **Grand Total** | `grandTotal` | selalu |

### Kompatibilitas mundur (WAJIB)
Order lama di localStorage tidak punya field baru. Semua akses pakai guard
(`item.img ? ... : ''`, sembunyikan baris Harga Normal kalau `normalSubtotal`
undefined). Tidak boleh ada error console.

---

## B. Tombol pembayaran: 2 opsi (REVISI 2 DIBATALKAN)

### Struktur sekarang (`cart.html`, `#payment-options`)
```
Metode Pembayaran                          space-y-2 (list vertikal)
[●] QRIS & Transfer Bank                   radio value="xenith"  <- default checked
[○] COD (Bayar di Rumah)                   radio value="cod"
```
- Layout `grid xl:grid-cols-3`, `#va-row`, `#va-bank-panel`, `#btn-va-toggle`,
  `data-choice`, dan 8 kotak logo bank **sudah dihapus semua**.
- Tidak ada logo/`img/bank/*` di blok pembayaran cart.
- `paymentLabels` (`script.js`) dan map label di `pesanan-saya.html`/`thank-you.html`:
  `xenith` -> **"QRIS & Transfer Bank"**, `cod` -> "COD" / "Bayar di Rumah".

### Kenapa `value` tetap `xenith` (nol risiko rusak)
- `script.js` `if (paymentMethodValue === 'xenith')` -> `/api/xenith-create`
  tidak berubah, link payment sama persis.
- `pesanan-saya.html` filter `paymentMethod === 'xenith'` -> badge sinkron tetap jalan.
- `=== 'cod'` dan `codFee` 4% tidak berubah.

### Yang dibuang dari revisi 2
- `PAYMENT_CHOICE_LABELS`, pembacaan `dataset.choice`, field `paymentChoice` di
  `xenithOrder`/`orderData`, listener `#btn-va-toggle`, `setVaOpen()`, `syncVaActive()`.
- **Dipertahankan**: map `paymentChoiceLabels` di `pesanan-saya.html` & `thank-you.html`
  -> hanya untuk menampilkan label order lama yang sudah tersimpan di `localStorage`
  dengan `paymentChoice` (guard `order.paymentChoice && ...`, jadi order baru aman).

---

## File yang disentuh (frontend semua)

| File | Perubahan |
|---|---|
| `cart.html` | Blok metode pembayaran: 2 tombol "QRIS & Transfer Bank" + COD (panel/logo VA dibuang) |
| `script.js` | 2x mapping cart snapshot + `normalSubtotal`; label Telegram `xenith` -> "QRIS & Transfer Bank"; kode VA/`paymentChoice` dibuang |
| `pesanan-saya.html` | `esc`/`rp`, render item (gambar/catatan/varian), totalan, label `xenith` baru |
| `thank-you.html` | Label `xenith` baru + `paymentLabel` (fallback `paymentChoice` untuk order lama) |
| `img/bank/*.svg` | 5 placeholder (danamon, maybank, sampoerna, cimb, permata) — tidak dipakai cart, bisa dihapus kalau yakin |
| `.gitignore` | + `dist/` |

Tidak disentuh: `api/*`, `lib/*`, `apps-script/*`, `vercel.json`, `.env`, `scripts/`, `new/`

## Testing
Yang **sudah otomatis** (4 file tes di `C:\Users\Refri\AppData\Local\Temp\opencode\`
sudah diupdate ke ekspektasi 2 tombol; + `node --check` + `npm run build`): lihat tabel
"SUDAH SELESAI" di atas.

Yang **masih manual** -> daftar lengkap di "BELUM DIKERJAKAN" butir 3.

## Risiko
- Order lama di localStorage tanpa field baru -> guard wajib di semua akses (sudah dibuktikan fixture order lama).
- 5 file placeholder `img/bank/` tidak dipakai cart lagi -> putuskan hapus atau bukan.
- `new/` (copy Cloudflare) tidak ikut -> sengaja, di luar scope deploy.

## Batasan
- Jangan commit `.env` atau mencetak nilai env/secret.
- Jangan deploy atau push ke `master`. Commit ke branch `test` saja, lalu laporkan.
- Jangan tambah dependensi.
