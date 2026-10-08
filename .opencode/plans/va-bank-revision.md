# Plan: revisi daftar bank VA + layout payment channel

Scope: `cart.html`, `script.js`, `pesanan-saya.html`, `thank-you.html`, 5 file SVG baru.
Tidak disentuh: `api/*`, `apps-script/*`, `vercel.json`, `new/`, `.env`.

Keputusan user: (1) radio baris VA = **lingkaran palsu/kosmetik** (tetap `<button>`,
tanpa ubah grup radio), (2) placeholder SVG **cuma 5 yang belum ada**.

---

## 1. Daftar bank baru (urut persis seperti user)

| # | `data-choice` | Label (`PAYMENT_CHOICE_LABELS`) | File logo |
|---|---|---|---|
| 1 | `va_danamon` | Virtual Account Danamon | `img/bank/danamon.svg` **(baru)** |
| 2 | `va_maybank` | Virtual Account Maybank | `img/bank/maybank.svg` **(baru)** |
| 3 | `va_bni` | Virtual Account BNI | `img/bank/bni.svg` (ada) |
| 4 | `va_bri` | Virtual Account BRI | `img/bank/bri.svg` (ada) |
| 5 | `va_sampoerna` | Virtual Account Sahabat Sampoerna | `img/bank/sampoerna.svg` **(baru)** |
| 6 | `va_cimb` | Virtual Account CIMB Niaga | `img/bank/cimb.svg` **(baru)** |
| 7 | `va_mandiri` | Virtual Account Mandiri | `img/bank/mandiri.svg` (ada) |
| 8 | `va_permata` | Virtual Account Permata | `img/bank/permata.svg` **(baru)** |

Dibuang: `va_bca`, `va_bsi`, `va_jago`. File `bca.svg`/`bsi.svg`/`jago.svg` dibiarkan di folder.
`qris.svg` tetap dipakai baris QRIS. Order lama di localStorage yang `paymentChoice`
`va_bca`/`va_bsi`/`va_jago` tetap punya label -> 3 key legacy **dipertahankan di map label saja**.

## 2. Placeholder SVG (5 file)

Isi netral abu-abu, viewBox `0 0 120 40`, kotak putus-putus + teks "LOGO", supaya user
tinggal timpa. Contoh:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
  <rect x="1" y="1" width="118" height="38" rx="8" fill="none" stroke="#cbd5e1"
        stroke-width="2" stroke-dasharray="6 4"/>
  <text x="60" y="25" text-anchor="middle" font-family="system-ui,sans-serif"
        font-size="13" font-weight="600" fill="#94a3b8">LOGO</text>
</svg>
```

## 3. `cart.html`

### 3a. Layout responsive (`cart.html:303`)
`#payment-options`: `class="space-y-2"` -> `class="grid grid-cols-1 gap-2 xl:grid-cols-3"`.
- `<1280px` (mobile + tablet): tetap list vertikal (user eksplisit minta tab vertikal).
- `>=1280px`: QRIS | Virtual Account | COD berderet 3 kolom.

### 3b. Keluarkan `#va-bank-panel` dari wrapper VA (`cart.html:318-361`)
Wrapper VA (`cart.html:311`) jadi kotak tombol doang, panel pindah jadi **sibling
`#payment-options`** (di dalam `<div>` yang sama, `cart.html:300`):

```html
<div id="payment-options" class="grid grid-cols-1 gap-2 xl:grid-cols-3">
  QRIS label | #va-row (button) | COD label
</div>
<div id="va-bank-panel" class="hidden mt-2 rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-4">
  <div class="grid grid-cols-4 sm:grid-cols-8 gap-2"> ...8 kotak bank... </div>
</div>
```

Kenapa: kalau panel tetap di dalam kolom VA, kolom QRIS/COD ikut melar saat panel
terbuka. `setVaOpen()` pakai `getElementById` -> pindah DOM aman, tanpa ubah JS.

### 3c. Radio palsu di baris VA (`cart.html:312-317`)
Tambah lingkaran radio di paling kiri, sebelum icon:

```html
<span class="va-radio w-4 h-4 flex-shrink-0 rounded-full border-2 border-slate-300
             dark:border-slate-600 flex items-center justify-center">
  <span class="va-radio-dot w-2 h-2 rounded-full bg-brand-blue opacity-0 transition-opacity"></span>
</span>
```
Icon `account_balance`, teks "Virtual Account", chevron tetap. Tambah `id="va-row"` di wrapper.

### 3d. State "tercentang" baris VA
`has-[:checked]` wrapper VA **tidak bisa dipakai lagi** (radio sudah keluar dari wrapper).
Ganti dengan class yang di-toggle JS (lihat 4b):
- idle: `border-2 border-slate-300 dark:border-slate-600 border-slate-50 dark:border-slate-800`
- aktif: `ring-2 ring-brand-blue bg-brand-blue/5` + `.va-radio-dot` `opacity-0 -> opacity-1`

Tailwind di sini = **Play CDN** (`cdn.tailwindcss.com`, `cart.html:11`) yang observe DOM
-> class baru yang ditambah JS tetap ke-generate. `brand.blue = #1A5FB4`.

### 3e. Kotak bank: logo saja (`cart.html:320-359`)
Tiap kotak jadi:
```html
<label class="va-bank-option flex items-center justify-center bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-700 rounded-xl px-2 py-3 cursor-pointer
              has-[:checked]:ring-2 has-[:checked]:ring-brand-blue has-[:checked]:border-brand-blue transition-all">
  <input type="radio" name="payment-method" value="xenith" data-choice="va_danamon" class="sr-only">
  <img src="img/bank/danamon.svg" alt="Bank Danamon" class="h-6 w-auto max-w-[72px] object-contain" onerror="this.remove()">
  <span class="sr-only">Bank Danamon</span>
</label>
```
- `<span>` nama bank (11px) **dihapus**, diganti `sr-only` biar aksesibilitas tetap.
- Urutan 8 kotak ikut tabel di bagian 1, urutan lama (BCA/BSI/Jago) hilang.
- `has-[:checked]:ring-2` tetap -> pilihan bank tetap kelihatan walau tanpa teks.

## 4. `script.js`

### 4a. `PAYMENT_CHOICE_LABELS` (`script.js:~1034`)
8 key baru sesuai tabel + `qris` + 3 legacy (`va_bca`, `va_bsi`, `va_jago`).

### 4b. Sinkron state baris VA (`script.js:1999-2029`)
Satukan jadi satu handler di listener `input[name="payment-method"]` change:

```js
const vaRow = document.getElementById('va-row');
const syncVaActive = () => {
    const choice = document.querySelector('input[name="payment-method"]:checked')?.dataset.choice || '';
    const active = choice.startsWith('va_');
    if (vaRow) {
        vaRow.classList.toggle('ring-2', active);
        vaRow.classList.toggle('ring-brand-blue', active);
        vaRow.classList.toggle('bg-brand-blue/5', active);
        vaRow.querySelector('.va-radio')?.classList.toggle('border-brand-blue', active);
        vaRow.querySelector('.va-radio-dot')?.classList.toggle('opacity-100', active);
        vaRow.querySelector('.va-radio-dot')?.classList.toggle('opacity-0', !active);
    }
    if (!active) setVaOpen(false);   // QRIS / COD -> tutup panel
};
```
- Listener `data-choice="qris"` (`script.js:2027-2029`) **dihapus**, digantikan cabang
  `if (!active) setVaOpen(false)` (QRIS **dan** COD ikut nutup panel).
- `setVaOpen` (`script.js:2011-2023`) tetap; auto-check bank pertama tetap.
- `paymentChoice` tetap dibaca dari `dataset.choice` radio yang ke-check -> tidak berubah,
  link payment `/api/xenith-create` tetap sama persis.

### 4c. Tidak berubah
`paymentMethodValue === 'xenith'`, `=== 'cod'`, `codFee` 4%, filter
`paymentMethod === 'xenith'` di `pesanan-saya.html`, builder snapshot order.

## 5. `pesanan-saya.html:452` + `thank-you.html:216`
Map `paymentChoiceLabels`: tambah 5 key baru, pertahankan 3 legacy.

## 6. Verifikasi
1. Update ekspektasi 3 tes: `test-cart-markup.mjs` (data-choice baru, 10 radio, 9 img,
   `grid-cols-1 xl:grid-cols-3`, tidak ada teks nama bank di kotak),
   `test-script-wiring.mjs` (label map), `test-render.mjs` (label map).
2. `node --check script.js`.
3. `npm run build`.
4. Regresi `localhost:3000`: 4 halaman 200, `xenith-status` 400, `xenith-create`/`rates`/`notify` GET 405.
5. Tes manual tercatat (tanpa headless browser): klik VA -> panel + radio baris VA
   tercentang + BCA-none (bank pertama = Danamon) ke-check; klik QRIS/COD -> panel tutup,
   radio VA kosong; `git diff` di 4 file saja.

## Risiko
- 5 logo placeholder -> kotak tampil "LOGO" sampai user ganti (bukan broken image).
- Breakpoint `xl` (1280px): semua tablet (portrait/landscape) tetap list vertikal, desktop >=1280px baru horizontal. Sesuai pilihan user.
- Class yang ditambah JS baru ke-generate saat runtime (Play CDN) -> bisa ada flicker
  1 frame di state awal; state awal = QRIS (idle) jadi tidak terlihat.
