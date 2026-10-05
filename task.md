# TASK: Lanjutkan integrasi pembayaran Xenith (Payment Link) di hamzahquran.com

## Konteks
Repo: static HTML + Tailwind di Cloudflare Pages, backend pakai Pages Functions di `/functions`.
Integrasi "Bayar Online" via Xenith SUDAH dibuat tapi BELUM pernah diuji ke sandbox Xenith
(cuma dites pakai mock). Baca dulu sebelum edit apa pun:
- `XENITH-SETUP.md` (alur, env var, setup)
- `functions/_lib/xenith.js`, `functions/_lib/orders.js`
- `functions/api/xenith-create.js`, `xenith-webhook.js`, `xenith-status.js`
- `apps-script/xenith-orders.gs` (backend Google Sheets, sheet tab `Orders`, 14 kolom)
- `scripts/xenith-simulate.mjs` (simulasi bayar di sandbox)
- Cabang `xenith` di handler checkout `script.js` (cari `paymentMethodValue === 'xenith'`),
  `cart.html` (radio payment), `thank-you.html` (blok script polling `?order=`),
  `pesanan-saya.html` (`renderPaymentInfo`, `paymentMethodLabels`).

## Alur yang sudah ada
Checkout "Bayar Online" -> `POST /api/xenith-create` -> catat order PENDING di Sheets ->
buat Payment Link di Xenith -> redirect customer ke `paymentLinkUrl` -> bayar ->
Xenith kirim webhook ke `/api/xenith-webhook` -> order PAID + Telegram ->
customer balik ke `thank-you.html?order=HQ-...` (polling `/api/xenith-status`,
yang juga rekonsiliasi ke Xenith kalau webhook telat).

## Fakta Xenith yang WAJIB dipatuhi (dari docs, jangan diubah tanpa verifikasi ke docs)
- Docs index: https://docs.xenithpay.com/llms.txt (tambah `.md` di akhir URL halaman untuk versi markdown).
- Request signature: HMAC-SHA256(secretKey, `METHOD\nURI\nTIMESTAMP\nBODY`) di-base64.
  Di sini `\n` = newline ASLI. Header: `Xenith-Api-Key`, `Xenith-Request-Signature`,
  `Xenith-Request-Timestamp` (ISO UTC). POST wajib `X-Idempotency-Key` unik.
- Webhook signature: HMAC-SHA256(webhookSecret, `POST\nPATH\nRAW_BODY\nTIMESTAMP`) di-base64.
  Di sini `\n` = 2 karakter LITERAL (backslash + n), BUKAN newline. Header: `X-Xenith-Signature`,
  `X-Xenith-Timestamp`. Body harus RAW persis seperti diterima (jangan parse lalu stringify ulang).
- Webhook Signature Secret BEDA dari Secret Key.
- Xenith berhenti retry begitu server merespons; retry sampai 11x selama ~17 jam kalau tidak ada respons.
- Payment Link status: ACTIVE, COMPLETED, EXPIRED. Maks umur link 24 jam. IDR: nominal bilangan bulat,
  `customerName` min 5 karakter.
- Sandbox: `https://openapi.sandbox.xenithpay.com`. Simulasi bayar lewat `POST /v1/simulator/transaction`
  (`transactionId` = Pay In ID, `transactionCategory: "payins"`, status SUCCESS/FAILED/EXPIRED).
- IP Whitelist di dashboard Xenith harus kosong (Cloudflare tidak punya IP keluar tetap).
- demo.xenithpay.com TIDAK terhubung ke akun sandbox. Jangan dipakai untuk tes webhook.

## Yang harus dikerjakan (urut prioritas)

### 1. Validasi harga di server (PRIORITAS TERTINGGI)
Sekarang `xenith-create.js` cuma cek konsistensi angka kiriman browser, jadi total bisa dimanipulasi.
- Pindahkan katalog harga (array produk di `script.js`, field `priceWa`) ke satu sumber yang bisa
  dibaca server, mis. `functions/_lib/catalog.js`. Hindari duplikasi: kalau memungkinkan, `script.js`
  tetap dipakai untuk UI, tapi server punya salinan yang jadi sumber kebenaran.
  Tanya gue dulu kalau perlu mengubah struktur data produk.
- Server hitung ulang: subtotal dari harga katalog, voucher (`getVoucherDiscount`),
  subsidi/gratis ongkir (`getShippingDiscount`, `getAutoGratisOngkir`) mengikuti logika yang sama
  dengan `script.js`. Baca fungsi-fungsi itu dulu, jangan menebak aturannya.
- Ongkir: server panggil ulang Biteship (pola di `functions/api/rates.js`) berdasarkan kurir + service
  yang dipilih, jangan percaya angka dari browser.
- Tolak order kalau total hasil hitung server != `grandTotal` dari browser (toleransi 0).
- Tambah test unit untuk perhitungan ini.

### 2. Uji ke sandbox Xenith beneran
Gue (user) yang pegang key sandbox. Jangan minta atau menyimpan secret di repo.
- Buat panduan uji yang bisa gue jalankan + checklist hasil yang diharapkan.
- Kalau ada ketidakcocokan dengan docs (field, header, format signature, bentuk payload webhook),
  perbaiki di `_lib/xenith.js` / function terkait dan jelaskan perbedaannya.
- Pastikan skenario ini jalan: SUCCESS, FAILED, EXPIRED, webhook dikirim 2x (idempotent),
  nominal kurang (AMOUNT_MISMATCH), webhook dengan signature salah (401).

### 3. Rapikan sisi customer
- `pesanan-saya.html`: tombol "Ubah Pembayaran" belum paham order `xenith`. Sembunyikan untuk order
  Xenith yang belum lunas atau tangani dengan benar. Status order Xenith sebaiknya sinkron dengan
  `/api/xenith-status` (bukan cuma localStorage).
- Facebook Pixel `Purchase` saat ini ditembak waktu order dibuat. Untuk jalur Xenith pindahkan ke
  momen status PAID di `thank-you.html` (tanpa dobel tembak kalau halaman direfresh).

### 4. Hardening ringan
- Rate limit / proteksi spam sederhana di `xenith-create` (mis. batasi per IP lewat header
  `CF-Connecting-IP`, atau honeypot field). Jangan bikin dependensi baru kalau tidak perlu.
- Validasi input lebih ketat (panjang nama/alamat, format nomor WA Indonesia).
- Tambah `Cache-Control: no-store` dan CORS yang sesuai kalau dibutuhkan.

## Batasan
- Jangan ubah alur metode lama (BCA, BSI, QRIS, COD) dan jangan ubah `notify.js`, `rates.js`,
  `track-order.js`, `wilayah.js`, `search-area.js`, kecuali perubahan minimal yang dibutuhkan tugas ini
  (dan kasih tahu gue kalau menyentuhnya).
- Jangan tambah framework/bundler. Tetap vanilla JS + Pages Functions (Web Crypto, tanpa library HMAC).
- Jangan commit secret atau isi `.env`. Env var baru harus didaftarkan di `XENITH-SETUP.md`.
- Pertahankan dark mode (`.dark`) dan style Tailwind yang dipakai di halaman.
- Setiap perubahan di Apps Script harus kompatibel dengan sheet yang sudah dibuat
  (tab `Orders`, kolom A-N: order_id, tanggal, nama, wa, alamat, produk, qty, total, status,
  xenith_ref, paid_at, payment_url, paid_amount, note). Kalau mengubah struktur kolom, kasih tahu gue
  karena sheet-nya harus gue ubah manual.

## Acceptance
- [ ] Total order dihitung ulang di server; request dengan total/harga/ongkir dimanipulasi ditolak (ada test).
- [ ] Alur sandbox end-to-end terbukti jalan (create -> bayar -> webhook -> PAID -> Telegram -> thank-you hijau).
- [ ] Webhook idempotent (Telegram tidak dobel), signature salah/timestamp basi ditolak.
- [ ] Order Xenith tampil benar di `pesanan-saya.html`, tanpa opsi yang rusak.
- [ ] Pixel Purchase untuk Xenith hanya sekali dan pada saat lunas.
- [ ] Tidak ada console error; metode bayar lama tetap jalan.
- [ ] Output: ringkasan file/baris yang diubah, keputusan yang diambil, dan hal yang butuh aksi manual dari gue.

### 0. Hapus metode bayar lama: sisakan HANYA "Bayar Online" (Xenith) dan COD

Keputusan: transfer manual BCA, BSI, dan QRIS statis dihapus dari checkout.

**cart.html**
- Hapus radio `bca`, `bsi`, `qris`. Sisakan `xenith` dan `cod`.
- Default terpilih = `xenith` (sekarang radio `bca` yang `checked`). Pastikan tepat satu radio yang `checked`.
- Urutan tampil: Bayar Online dulu, lalu COD.

**script.js** (handler checkout + helper)
- Ganti fallback `paymentRadio?.value || 'bca'` jadi `'xenith'`.
- `paymentLabels` cukup `{ xenith: 'Bayar Online (Xenith)', cod: 'COD' }` untuk order baru.
- Cek semua tempat lain yang menyebut `bca|bsi|qris` (grep) dan bersihkan yang berkaitan dengan
  checkout baru. Biaya admin COD 4% tetap berlaku untuk `cod`, jangan diubah.

**thank-you.html**
- Hapus cabang UI rekening BCA/BSI dan QRIS statis (nomor rekening, `img/qris.jpg`, tombol salin).
- Sisakan: cabang COD (alur lama via `sessionStorage hq_order`) dan blok Xenith (`?order=`).
- Kalau `paymentMethod` tidak dikenal (data lama), tampilkan fallback netral, jangan error.

**pesanan-saya.html**
- Order LAMA di localStorage pengunjung bisa masih bermetode `bca/bsi/qris`. Tetap tampilkan labelnya
  (pertahankan `paymentMethodLabels` untuk 3 metode lama + info rekening/QRIS di `renderPaymentInfo`),
  supaya riwayat lama tidak rusak. Jangan hapus bagian ini.
- Hapus tombol "Ubah Pembayaran" dan modal `showPaymentModal` / `PAYMENT_OPTIONS` sepenuhnya.
  Alasan: pindah ke Xenith untuk order yang sudah ada butuh pembuatan Payment Link baru, dan pindah dari
  Xenith ke COD berisiko dobel bayar. Customer yang mau ganti metode diarahkan ke tombol "Hubungi Admin WA".
- Order lama `bca/bsi/qris` yang belum dibayar tetap boleh punya tombol WA admin.

**Aset**
- Jangan hapus `img/bank/*` dan `img/qris.jpg` dulu (masih dipakai tampilan order lama).
  Daftarkan di ringkasan sebagai kandidat hapus nanti.

**Yang TIDAK boleh disentuh**
- Landing page lain (`lp-*.html`, `muslim-kids-lpwa.html`, `bulk-order.html`, `reseller.html`) punya
  alur WA sendiri. Cek dengan grep apakah ada yang memakai radio `payment-method` atau info rekening;
  kalau ada, laporkan ke gue dulu, jangan diubah diam-diam.
- Alur COD (biaya 4%, notifikasi Telegram, redirect ke thank-you) harus berperilaku sama seperti sekarang.

**Acceptance #0**
- [ ] Checkout hanya menampilkan 2 opsi; default Bayar Online; kedua jalur bisa dipakai sampai selesai.
- [ ] Order COD end-to-end masih sama persis (Telegram, thank-you, riwayat).
- [ ] Riwayat order lama (bca/bsi/qris) di `pesanan-saya.html` tetap tampil tanpa error.
- [ ] `grep -rn "'bca'\|'bsi'\|'qris'"` hanya tersisa di kode yang memang untuk menampilkan order lama.