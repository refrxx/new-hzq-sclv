# Integrasi Xenith (Payment Link) - hamzahquran.com

## Alur
Checkout (pilih "Bayar Online") -> `/api/xenith-create` -> order PENDING masuk Sheets
-> customer diarahkan ke halaman bayar Xenith -> bayar -> Xenith kirim webhook ke
`/api/xenith-webhook` -> order jadi PAID + Telegram "PEMBAYARAN DITERIMA"
-> customer balik ke `thank-you.html?order=HQ-...` (polling `/api/xenith-status`).

## File
Baru:
- `functions/_lib/xenith.js`      signing request + verifikasi webhook
- `functions/_lib/orders.js`      Sheets + Telegram helper
- `functions/api/xenith-create.js`, `xenith-webhook.js`, `xenith-status.js`
- `apps-script/xenith-orders.gs`  backend Google Sheets

Diubah: `cart.html` (opsi bayar), `script.js` (cabang checkout xenith),
`thank-you.html` (halaman status), `pesanan-saya.html` (label + tombol bayar).

## Setup (urut)
1. **Sheets + Apps Script:** ikuti komentar di atas file `xenith-orders.gs`.
   Ambil URL `/exec` dan TOKEN.
2. **Dashboard Xenith (sandbox dulu):**
   - API Keys: ambil Access Key + Secret Key.
   - Webhook: ambil **Webhook Signature Secret** (BEDA dari Secret Key).
   - Developer Settings -> IP Whitelist: kosongkan/nonaktifkan. Cloudflare tidak punya IP
     keluar tetap, jadi kalau whitelist aktif, request API akan ditolak.
3. **Cloudflare Pages -> Settings -> Environment variables** (Secret):

| Nama | Isi |
|---|---|
| `XENITH_BASE_URL` | sandbox: `https://openapi.sandbox.xenithpay.com`, production: `https://openapi.xenithpay.com` |
| `XENITH_API_KEY` | Access Key |
| `XENITH_SECRET_KEY` | Secret Key |
| `XENITH_WEBHOOK_SECRET` | Webhook Signature Secret |
| `XENITH_SHEETS_URL` | URL `/exec` Apps Script |
| `XENITH_SHEETS_TOKEN` | sama dengan TOKEN di Script properties |
| `SITE_URL` | `https://hamzahquran.com` (tanpa slash akhir) |
| `XENITH_MAX_AMOUNT` | opsional, batas atas total order (default 20000000) |

   `TELEGRAM_BOT_TOKEN` dan `TELEGRAM_CHAT_ID` sudah ada.
   Untuk lokal, tambah variabel yang sama di `.env` (jalan dengan `npm run dev`).
4. **Tes sandbox:** checkout -> pilih Bayar Online -> di halaman Xenith pilih channel
   + "Continue to Payment" (ini membentuk Pay In). Lalu simulasikan pembayaran:
   `XENITH_API_KEY=... XENITH_SECRET_KEY=... node scripts/xenith-simulate.mjs <plr-id> SUCCESS`
   (`plr-id` ada di kolom xenith_ref sheet; bisa juga FAILED / EXPIRED).
   Cek: baris Sheets jadi PAID, Telegram masuk, thank-you berubah hijau.
   Catatan: demo.xenithpay.com (Payment Page Simulation) hanya demo tampilan, TIDAK
   terhubung ke akun sandbox lo dan tidak mengirim webhook.
5. **Production:** ganti `XENITH_BASE_URL`, API key, dan webhook secret ke production,
   redeploy, tes satu order kecil.

## Hal yang perlu diperhatikan
- **Harga masih dihitung di browser** (seperti alur lama). Server cuma cek konsistensi
  angka, bukan harga asli produk. Orang yang paham bisa mengubah total di request.
  Fase berikutnya: pindahkan daftar harga + aturan voucher/ongkir ke server.
- Webhook Xenith berhenti retry begitu server merespon. Kalau proses gagal, ada alert
  Telegram, dan `/api/xenith-status` ikut rekonsiliasi ke Xenith saat customer buka thank-you.
  Order yang customer-nya tidak balik ke situs bisa dicek di dashboard Xenith.
- Fee Xenith tidak ditambahkan ke customer (total = total order biasa). Cek tarif di dashboard.
- Ubah Pembayaran di `pesanan-saya.html` belum menangani order Xenith.
- Facebook Pixel `Purchase` tetap ditembak saat order dibuat (sama seperti alur lama),
  bukan saat lunas.
