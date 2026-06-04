# Task: Ongkir Flat Rate per Zona

## Konteks
Website: `hamzahquran.my.id`
Stack: Pure HTML + Vanilla JS + Tailwind CSS CDN
File yang dimodifikasi: `cart.html`, `script.js`

## Penting: UNDO Task Ongkir Biteship
Sebelum mengerjakan task ini, **revert semua perubahan dari task ongkir Biteship** jika sudah diimplementasikan:
- Kembalikan dropdown wilayah cascade 4 level (Provinsi → Kota → Kecamatan → Kelurahan) yang pakai `api-regional-indonesia.vercel.app`
- Hapus `initAreaSearch()`, `fetchOngkir()`, `updateGrandTotal()` jika sudah ditambahkan
- Hapus `WORKER_URL` dan `ORIGIN_AREA_ID` dari `script.js`
- Hapus autocomplete area search dari `cart.html`
- Kembalikan `initWilayahDropdowns()` seperti semula
- Hapus route `/search-area` dan `/rates` dari `worker.js` (route `/notify` untuk Telegram tetap dipertahankan)

---

## Zona & Tarif Ongkir

```js
const ONGKIR_ZONA = {
    'Jawa': 0,
    'Bali, NTB & NTT': 10000,
    'Sumatera': 25000,
    'Kalimantan': 25000,
    'Sulawesi Selatan': 25000,
    'Sulawesi Lainnya': 40000,
    'Maluku': 50000,
    'Papua': 100000,
};
```

---

## TASK 1 — Update `cart.html`

### Perubahan A: Tambah dropdown zona ongkir

Tambahkan dropdown zona ongkir **setelah** dropdown wilayah (Provinsi/Kota/Kecamatan/Kelurahan) dan **sebelum** dropdown Metode Pembayaran:

```html
<!-- Zona Ongkir -->
<div>
    <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
        Zona Pengiriman <span class="text-red-500">*</span>
    </label>
    <select id="shipping-zone"
        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition appearance-none">
        <option value="" disabled selected>Pilih Zona Pengiriman</option>
        <option value="Jawa" data-price="0">Jawa (Free Ongkir) 🎉</option>
        <option value="Bali, NTB & NTT" data-price="10000">Bali, NTB & NTT — Rp10.000</option>
        <option value="Sumatera" data-price="25000">Sumatera — Rp25.000</option>
        <option value="Kalimantan" data-price="25000">Kalimantan — Rp25.000</option>
        <option value="Sulawesi Selatan" data-price="25000">Sulawesi Selatan — Rp25.000</option>
        <option value="Sulawesi Lainnya" data-price="40000">Sulawesi Lainnya — Rp40.000</option>
        <option value="Maluku" data-price="50000">Maluku — Rp50.000</option>
        <option value="Papua" data-price="100000">Papua — Rp100.000</option>
    </select>
</div>
```

### Perubahan B: Tambah baris ongkir di ringkasan belanja sidebar

Di dalam card "Ringkasan Belanja", tambahkan baris ongkir di antara baris diskon dan total belanja:

```html
<!-- Tambahkan setelah baris diskon, sebelum total -->
<div id="ongkir-summary-row" class="hidden flex items-center justify-between text-sm py-1">
    <span class="text-slate-500 dark:text-slate-400" id="ongkir-summary-label">Ongkos Kirim</span>
    <span class="font-semibold text-slate-800 dark:text-slate-100" id="ongkir-summary-price">Rp0</span>
</div>
```

Tambahkan juga `id="grand-total"` ke elemen yang menampilkan total akhir (yang sekarang menampilkan subtotal), agar bisa diupdate oleh JS.

---

## TASK 2 — Update `script.js`

### Bagian A: Tambah konstanta zona ongkir

Tambahkan di bagian atas `script.js`, setelah `GLOBAL_PRODUCTS`:

```js
const ONGKIR_ZONA = {
    'Jawa': 0,
    'Bali, NTB & NTT': 10000,
    'Sumatera': 25000,
    'Kalimantan': 25000,
    'Sulawesi Selatan': 25000,
    'Sulawesi Lainnya': 40000,
    'Maluku': 50000,
    'Papua': 100000,
};
```

---

### Bagian B: Tambah fungsi `initShippingZone`

Tambahkan fungsi baru ini di `script.js`:

```js
function initShippingZone() {
    const zoneSelect = document.getElementById('shipping-zone');
    if (!zoneSelect) return;

    zoneSelect.addEventListener('change', () => {
        updateGrandTotal();
    });
}

function updateGrandTotal() {
    const parsePrice = (p) => parseFloat(String(p).replace(/[^0-9]/g, ''));
    const formatPrice = (n) => `Rp${n.toLocaleString('id-ID')}`;

    const subtotal = cart.reduce((sum, item) => sum + (parsePrice(item.priceWa || item.priceCrt) * item.qty), 0);

    const zoneSelect = document.getElementById('shipping-zone');
    const zoneName = zoneSelect?.value || '';
    const ongkirPrice = ONGKIR_ZONA[zoneName] ?? 0;
    const grandTotal = subtotal + ongkirPrice;

    // Update baris ongkir di sidebar
    const ongkirRow = document.getElementById('ongkir-summary-row');
    const ongkirLabel = document.getElementById('ongkir-summary-label');
    const ongkirSummaryPrice = document.getElementById('ongkir-summary-price');
    const grandTotalEl = document.getElementById('grand-total');

    if (zoneName && ongkirRow) {
        ongkirRow.classList.remove('hidden');
        if (ongkirLabel) ongkirLabel.textContent = `Ongkir (${zoneName})`;
        if (ongkirSummaryPrice) {
            ongkirSummaryPrice.textContent = ongkirPrice === 0 ? 'Gratis 🎉' : formatPrice(ongkirPrice);
        }
    } else if (ongkirRow) {
        ongkirRow.classList.add('hidden');
    }

    if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotal);
}
```

---

### Bagian C: Panggil `initShippingZone` di init cart

Cari bagian di `initCart()` atau DOMContentLoaded yang memanggil fungsi-fungsi init. Tambahkan:

```js
initShippingZone();
```

Tambahkan juga pemanggilan `updateGrandTotal()` di akhir fungsi `renderCart()` atau `updateCartTotalUI()` — agar total ikut terupdate saat item cart berubah.

---

### Bagian D: Update validasi checkout

Cari blok validasi di checkout handler:

```js
if (!name) return showFieldError('cust-name');
if (!phone) return showFieldError('cust-phone');
if (!address) return showFieldError('cust-address');
if (!document.getElementById('payment-method').value) return showFieldError('payment-method');
```

Tambahkan validasi zona sebelum payment method:

```js
if (!name) return showFieldError('cust-name');
if (!phone) return showFieldError('cust-phone');
if (!address) return showFieldError('cust-address');
if (!document.getElementById('shipping-zone').value) return showFieldError('shipping-zone', 'Pilih zona pengiriman');
if (!document.getElementById('payment-method').value) return showFieldError('payment-method');
```

---

### Bagian E: Tambah info ongkir ke pesan Telegram & orderData

Cari bagian pembentukan `message` di checkout handler. Tambahkan info zona dan ongkir setelah baris metode pembayaran:

```js
const zoneName = document.getElementById('shipping-zone')?.value || '';
const ongkirPrice = ONGKIR_ZONA[zoneName] ?? 0;
const grandTotal = subtotal + ongkirPrice;

message += `*Zona Pengiriman:* ${zoneName}\n`;
message += `*Ongkos Kirim:* ${ongkirPrice === 0 ? 'Gratis' : `Rp${ongkirPrice.toLocaleString('id-ID')}`}\n`;
message += `*Total + Ongkir:* Rp${grandTotal.toLocaleString('id-ID')}\n\n`;
```

Update `orderData` yang disimpan ke sessionStorage & localStorage — tambahkan field ongkir:

```js
const orderData = {
    name,
    phone,
    address,
    paymentMethod: paymentMethodValue,
    subtotal,
    ongkir: ongkirPrice,
    zona: zoneName,
    grandTotal,
    cart: cart.map(item => ({
        name: item.name,
        qty: item.qty,
        price: parsePrice(item.priceWa || item.priceCrt)
    }))
};
```

---

## TASK 3 — Update `thank-you.html` & `pesanan-saya.html`

Kedua halaman membaca `orderData` dari sessionStorage/localStorage. Tambahkan tampilan info ongkir di ringkasan order:

- **Zona Pengiriman:** `orderData.zona`
- **Ongkos Kirim:** `orderData.ongkir === 0 ? 'Gratis 🎉' : formatPrice(orderData.ongkir)`
- **Total + Ongkir:** `formatPrice(orderData.grandTotal)`

Ganti tampilan "Total Belanja" dengan "Total + Ongkir" menggunakan `orderData.grandTotal`.

---

## Catatan untuk Agent

- Dropdown wilayah cascade 4 level tetap dipertahankan — jangan diubah
- `updateGrandTotal()` harus dipanggil setiap kali cart berubah (add/remove item)
- Zona "Jawa" menampilkan "Gratis 🎉" bukan "Rp0" di semua tampilan
- Jangan hapus route `/notify` di `worker.js`
- Jangan ubah logika Telegram fetch yang sudah dipindah ke Worker