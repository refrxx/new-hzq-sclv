# TASK: Preview share produk otomatis (kartu gambar per produk) di hamzahquran.com (branch verceltest)

## Tujuan
Link produk yang dishare ke WhatsApp/Facebook/Threads menampilkan kartu gambar per produk (foto produk, harga, diskon, rating, judul, logo).
Desain target: `docs/share-card-contoh-14.jpg` dan `docs/share-card-contoh-8.jpg`. Referensi implementasi yang SUDAH jalan di lokal:
`scripts/share-card-prototype.mjs` (satori + resvg + sharp, 1080x1350, output JPEG ~150-170 KB). Ikuti tata letaknya persis. Jangan ubah desain tanpa izin gue.

## Mengapa perlu halaman khusus
WhatsApp/Facebook/Threads membaca HTML mentah tanpa menjalankan JavaScript. `product-detail.html?id=N` isi head-nya sama untuk semua produk
(data diisi `script.js` di browser). Solusi: URL share `/p/<id>` yang mengembalikan HTML kecil dengan tag Open Graph khusus produk.

## Aturan kerja
- Branch baru `share-card` dari `verceltest`. Satu commit per langkah. Jangan push ke `master`/`verceltest`.
- Baca kode dulu (grep), jangan menebak. Tanya gue untuk keputusan desain yang tidak tertulis.
- Jangan commit secret/.env. Jangan ubah alur checkout, Xenith, Biteship.
- Dependensi baru hanya: `satori`, `@resvg/resvg-js`, `sharp` (di `dependencies`, bukan dev). Font lewat `@fontsource/plus-jakarta-sans` hanya untuk disalin sekali.

## Langkah 1: satu sumber data produk (`catalog.js`)
Data produk sekarang hidup di `script.js` (file browser), tidak bisa dibaca fungsi server. Buat `catalog.js` di root yang bisa dimuat DUA tempat tanpa build:
- Browser: `<script src="catalog.js"></script>` (script klasik) SEBELUM `script.js` di semua halaman yang memuat `script.js`.
- Server (ESM): `import '../catalog.js'` lalu baca `globalThis.HQ_CATALOG`.
Isi: `GLOBAL_PRODUCTS`, `PRODUCT_SOCIAL_PROOF`, helper harga yang murni (tanpa DOM): `bindingPriceNum`, `productXtraVoucher`, dan SATU fungsi baru
`computeDetailPricing(product, quranType?)` yang mengembalikan `{ low, high, isRange, crt, pct, save, voucher }`. Aturan hitung = yang dipakai `renderDetailPricing` di `script.js`:
harga Web (atau tiap binding) dikurangi voucher XTRA per produk; `crt` = `priceCrt`; `pct = round((crt-low)/crt*100)` hanya jika `crt > low`; `isRange` kalau `low !== high`.
- `script.js` memakai fungsi itu (jangan duplikasi). Perilaku halaman detail HARUS identik: bandingkan sebelum/sesudah untuk produk id 1, 4, 8, 14
  (mis. id 1 = Rp129.000 dan Diskon 19%; id 8 = rentang Rp49.000 - Rp59.000, "Diskon hingga 38%").
- Jangan mengubah isi data produk. Pastikan tidak ada halaman yang memuat `script.js` tanpa `catalog.js`.

## Langkah 2: `/api/og.js` (gambar kartu)
- Gaya handler: Web Request, named export `GET` (sama dengan file `api/*.js` lain, lihat commit migrasi Vercel).
- `GET /api/og?id=14` -> `image/jpeg`, 1080x1350, target < 250 KB (WhatsApp kadang menolak gambar terlalu besar; verifikasi dan laporkan ukuran nyata).
- `id` WAJIB integer dan ada di katalog. Jangan pernah membaca path file dari query. Tidak ketemu -> 404 JSON, input aneh -> 400.
- Data: `catalog.js` + `computeDetailPricing`. Foto: `images[0]` (fallback `img`). Rating/terjual dari `PRODUCT_SOCIAL_PROOF`; baris rating disembunyikan kalau tidak ada.
  Produk rentang harga: "mulai Rp" + pill "hingga -X%" dan TANPA harga coret (sudah diputuskan, lihat prototipe).
- Font: salin woff Plus Jakarta Sans 400/500/600/800 dari `@fontsource/plus-jakarta-sans/files/*-latin-*-normal.woff` ke `assets/fonts/` (jangan unduh saat runtime). Logo: `img/logo-hamzah-color.png`.
- Foto produk JPG/PNG saja (satori tidak mendukung WebP). Kalau ada foto WebP, laporkan dan jangan diam-diam gagal.
- Bundling Vercel: fungsi harus membawa font, logo, dan gambar produk. Gunakan `functions["api/og.js"].includeFiles` di `vercel.json` dengan glob SEMPIT (hanya font, logo, dan folder gambar produk, bukan seluruh `img/` yang berisi video).
  Cek ukuran bundle di bawah batas Vercel dan laporkan angkanya. `sharp` dan `@resvg/resvg-js` adalah modul native: pastikan jalan di runtime Vercel (Node 20+). Cek dokumentasi Vercel terbaru, jangan menebak.
- Header: `Cache-Control: public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800`. Respons error: cache singkat saja.

## Langkah 3: `/p/<id>` (halaman share)
- Rewrite di `vercel.json`: `/p/:id` -> `/api/p?id=:id`. Fungsi `api/p.js` mengembalikan HTML (`text/html`) dengan:
  - `<title>` = nama produk + " - Hamzah Quran"; `meta description` pendek dan faktual (harga setelah voucher, "Bisa COD", "Garansi ganti baru"; hanya klaim yang sudah ada di situs).
  - Open Graph + Twitter: `og:type=website`, `og:site_name`, `og:title`, `og:description`, `og:url` = `https://<host>/p/<id>` (HARUS URL halaman ini sendiri, bukan product-detail),
    `og:image` = URL absolut `/api/og?id=<id>&v=<hash>`, `og:image:width=1080`, `og:image:height=1350`, `og:image:type=image/jpeg`, `twitter:card=summary_large_image`.
    `v` = hash pendek dari (nama + harga akhir + rating + terjual) supaya cache preview ikut berganti saat data berubah.
  - Host: `process.env.SITE_URL` kalau ada, kalau tidak origin dari request.
  - Pengalihan manusia: `location.replace('/product-detail.html?id=<id>')` lewat JavaScript, plus link `<a>` dan `<noscript>`. JANGAN pakai redirect HTTP 301/302 atau meta refresh:
    crawler akan mengikutinya dan mengambil halaman detail yang tag-nya generik.
  - Semua teks yang masuk HTML di-escape. `id` tidak valid -> redirect ke `/shop.html` (halaman HTML, status 302 boleh di kasus ini).
  - `<meta name="robots" content="noindex">` supaya halaman share tidak bersaing dengan halaman produk di Google.

## Langkah 4: tombol share
Gue sedang membuat fitur share di `product-detail.html`. Cek dulu apakah sudah ada (grep `share`, `wa.me`, `facebook.com/sharer`, `threads`).
- Kalau sudah ada: cukup ubah URL yang dishare jadi `https://<host>/p/<id>`.
- Kalau belum: tambah tombol Bagikan minimal: WhatsApp (`https://wa.me/?text=`), Facebook (`https://www.facebook.com/sharer/sharer.php?u=`), Threads (cek URL intent terbaru di dokumentasi Threads, jangan menebak domain `threads.net` vs `threads.com`),
  Salin Link, dan `navigator.share` di perangkat yang mendukung. Gaya mengikuti desain halaman (dark mode, mobile 360px). Teks share pendek: nama produk + harga + link.

## Tes (wajib lulus)
- `computeDetailPricing`: id 1 -> low 129000, pct 19; id 8 -> low 49000, high 59000, isRange, pct 38; id 14 -> low 81000, pct 19. Halaman detail menampilkan angka yang sama dengan sebelum refactor.
- `/api/og`: id valid -> 200 `image/jpeg` 1080x1350 (cek dengan `sharp(...).metadata()`), ukuran < 250 KB; id tidak ada -> 404; `id=abc` dan `id=../x` -> 400; tidak ada pembacaan path dari input.
- `/p/<id>`: HTML berisi `og:title`, `og:image` absolut, `og:url` = `/p/<id>`, dan tag lain; nama produk dengan karakter `<>&"` ter-escape; JavaScript mengalihkan ke detail produk; tidak ada redirect HTTP.
- `vercel dev` smoke test, lalu deploy preview. Karena preview Vercel dilindungi login secara default, cek bahwa crawler bisa mengambil `/p/<id>` dan `/api/og` (matikan Deployment Protection untuk tes atau laporkan ke gue).
- Laporkan hasil di Facebook Sharing Debugger bila bisa; kalau tidak bisa, tulis langkah tes manual untuk gue (WhatsApp, Facebook, Threads).

## Hal yang HARUS dilaporkan, jangan ditebak
1. Ukuran bundle fungsi og dan apakah `sharp`/`resvg` jalan di Vercel.
2. Bagaimana kartu 4:5 terpotong di preview WhatsApp (rasio portrait bisa dipotong). Jangan ubah desain; laporkan dan beri opsi.
3. `PRODUCT_SOCIAL_PROOF` berisi angka placeholder. Kartu ini dishare ke publik: tandai di laporan bahwa angka harus data asli sebelum rilis.
4. Foto produk non JPG/PNG yang ditemukan.

## Output
1. Daftar commit dan file. 2. Hasil tes per item. 3. Poin yang dilaporkan di atas. 4. Aksi manual untuk gue (mis. isi `SITE_URL` di Vercel, matikan Deployment Protection saat tes).