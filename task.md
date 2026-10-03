# TASK: Redesign card produk di produk.html (ikuti screenshot terlampir)

## Scope
- Ubah HANYA template card di `renderProducts()` dalam `initKatalog()` (script.js, sekitar baris 429-450) + CSS pendukung kalau perlu.
- Sebelum edit, grep apakah template/class card ini dipakai di file lain (index.html, dll). Kalau ya, kasih tau gue dulu, jangan ubah diam-diam.
- Jangan sentuh filter, sort, grid `#product-list`, atau fungsi lain.
- Tailwind utility di template; CSS custom di blok baru bawah style.css (`/* ===== Product Card ===== */`) hanya kalau Tailwind ga cukup. Wajib support dark mode (`.dark`).

## Struktur card (atas → bawah)
1. **Wrapper**: seluruh card jadi satu `<a href="product-detail.html?id=${p.id}">`, `rounded-2xl`, `overflow-hidden`, border tipis (`border-slate-200 dark:border-slate-800`), bg putih (dark: `bg-slate-900`), **tanpa padding luar** (gambar full-bleed). Hover: shadow naik halus + gambar `scale-105` pelan (gambar tetap ter-clip).
2. **Gambar**: `aspect-square`, `object-cover`, edge-to-edge tanpa radius sendiri (ikut radius card).
3. **Body** (`p-4`):
   - **Badge row**: pill kecil `rounded-full`, text 11px bold, uppercase.
     - `COD`: gradient brand-blue → ungu, teks putih.
     - Badge kedua: label kategori (`p.category`), warna gold lembut (`bg-brand-gold/20 text-amber-700`, dark: `text-brand-gold`).
   - **Judul**: `font-display font-bold text-sm`, `line-clamp-2` (2 baris, ellipsis), `min-h` 2 baris supaya tinggi card sejajar.
   - **Meta row (OPSIONAL)**: icon `star` filled kuning + `p.rating` | `Terjual ${p.sold}`. Render HANYA kalau `p.rating` / `p.sold` ada di data, jangan hardcode/karang angka. Kalau dua-duanya ga ada, row ini ga dirender.
   - **Divider** tipis `border-t`.
   - **Label** kecil "Harga Spesial" (text-xs, slate-500).
   - **Harga utama**: `p.priceWa`, `text-xl font-black`, warna brand-blue (dark: brand-gold). Pertahankan class `price-val`.
   - **Baris bawah harga**: `p.priceCrt` coret (`line-through`, slate-400, text-xs) + pill merah `-XX%` (`bg-red-500 text-white text-[11px] font-bold rounded-full px-2 py-0.5`).
4. Hapus tombol "Lihat Detail" (card sudah full clickable). Tambah `aria-label` di link.

## Logika diskon
- Helper kecil: `const toNum = s => parseInt(String(s).replace(/[^\d]/g,''),10) || 0;`
- `discount = Math.round((toNum(p.priceCrt) - toNum(p.priceWa)) / toNum(p.priceCrt) * 100)`.
- Pill diskon dan harga coret hanya dirender kalau `discount > 0`.

## Yang TIDAK dibuat (ga ada di data/fitur kita)
- Tombol bookmark, badge "C+", dan badge "NON-COD".

## Acceptance
- [ ] Card persis mirip layout screenshot (gambar full-bleed, badge, judul 2 baris, blok harga) dengan warna brand Hamzah.
- [ ] Tinggi semua card sejajar di grid walau judul pendek/panjang.
- [ ] Light/dark rapi; cek di 375px, 768px, 1280px.
- [ ] Filter kategori + sort tetap jalan, tidak ada console error.
- [ ] Output: ringkasan file/baris yang diubah.