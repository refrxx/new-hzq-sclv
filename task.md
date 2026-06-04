# Task: Integrasi Ongkir Biteship via Cloudflare Workers

## Konteks
Website: `hamzahquran.my.id` (pure HTML + Vanilla JS + Tailwind CSS CDN)
Deployed di: Cloudflare Pages
File yang dimodifikasi: `script.js`, `cart.html`
File baru: Cloudflare Worker (project terpisah)

---

## Overview Arsitektur

```
Frontend (cart.html)
    ↓ fetch
Cloudflare Worker (proxy aman)
    ↓ fetch + Authorization header
Biteship API (api.biteship.com)
```

API key Biteship HANYA ada di Cloudflare Worker — tidak pernah expose ke frontend.

---

## TASK 1 — Buat Cloudflare Worker

### Setup
Buat Cloudflare Worker baru via Cloudflare Dashboard atau Wrangler CLI.
Nama worker: `hamzahquran-shipping`
Domain worker akan jadi: `https://hamzahquran-shipping.<subdomain>.workers.dev`

### Environment Variable
Tambahkan environment variable di Worker settings:
- Key: `BITESHIP_API_KEY`
- Value: (diisi manual oleh owner — jangan hardcode di kode)

### Kode Worker (`worker.js`)

```javascript
export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': 'https://hamzahquran.my.id',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    const headers = {
      'Authorization': `Biteship ${env.BITESHIP_API_KEY}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://hamzahquran.my.id',
    };

    // Route 1: Search area (GET /search-area?input=xxx)
    if (path === '/search-area' && request.method === 'GET') {
      const input = url.searchParams.get('input') || '';
      const biteshipUrl = `https://api.biteship.com/v1/maps/areas?countries=ID&input=${encodeURIComponent(input)}&type=single`;

      const res = await fetch(biteshipUrl, {
        method: 'GET',
        headers: { 'Authorization': `Biteship ${env.BITESHIP_API_KEY}` }
      });

      const data = await res.json();
      return new Response(JSON.stringify(data), { headers });
    }

    // Route 2: Get rates (POST /rates)
    if (path === '/rates' && request.method === 'POST') {
      const body = await request.json();

      const res = await fetch('https://api.biteship.com/v1/rates/couriers', {
        method: 'POST',
        headers: {
          'Authorization': `Biteship ${env.BITESHIP_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      return new Response(JSON.stringify(data), { headers });
    }

    return new Response('Not Found', { status: 404, headers });
  }
};
```

### Catatan Worker
- Ganti `'https://hamzahquran.my.id'` di CORS header dengan domain asli yang dipakai
- Setelah deploy, catat URL worker-nya (contoh: `https://hamzahquran-shipping.xxx.workers.dev`)
- URL worker ini yang akan dipakai di `script.js`

---

## TASK 2 — Update `GLOBAL_PRODUCTS` di `script.js`

Tambahkan field `weight` (dalam gram) ke setiap produk di array `GLOBAL_PRODUCTS`.

Aturan berat berdasarkan category:
- `"Al Quran Sedang"` → `weight: 850`
- `"Al Quran Besar"` → `weight: 1600`
- `"IQRO"` → `weight: 350`
- `"Juz Amma"` → `weight: 350`

Contoh setelah ditambahkan:
```js
{
    id: 1,
    name: "Hafazan 8 Blok QPP A5",
    category: "Al Quran Sedang",
    weight: 850,  // tambahkan ini
    priceCrt: "Rp159.000",
    ...
}
```

Lakukan untuk semua 10 produk di `GLOBAL_PRODUCTS`.

---

## TASK 3 — Update `cart.html`

### Perubahan A: Ganti dropdown wilayah dengan input autocomplete

Hapus seluruh blok 4 dropdown wilayah ini:
```html
<select id="cust-province">...</select>
<select id="cust-city">...</select>
<select id="cust-district">...</select>
<select id="cust-subdistrict">...</select>
```

Ganti dengan satu input autocomplete + hidden field + dropdown hasil:

```html
<!-- Area Search -->
<div class="relative" id="area-search-wrapper">
    <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
        Kecamatan / Kelurahan <span class="text-red-500">*</span>
    </label>
    <input
        type="text"
        id="area-search-input"
        placeholder="Ketik nama kecamatan atau kota..."
        autocomplete="off"
        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue transition"
    />
    <!-- Dropdown hasil search -->
    <div id="area-search-results"
        class="hidden absolute z-50 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl mt-1 max-h-60 overflow-y-auto">
    </div>
    <!-- Hidden field untuk simpan area_id yang dipilih -->
    <input type="hidden" id="cust-area-id" />
    <input type="hidden" id="cust-area-name" />
</div>

<!-- Ongkir section — muncul setelah area dipilih -->
<div id="ongkir-section" class="hidden mt-4">
    <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
        Pilih Layanan Pengiriman <span class="text-red-500">*</span>
    </label>
    <div id="ongkir-loading" class="hidden text-sm text-slate-500 dark:text-slate-400 py-2">
        Menghitung ongkir...
    </div>
    <div id="ongkir-list" class="flex flex-col gap-2">
        <!-- Diisi oleh JS -->
    </div>
    <input type="hidden" id="selected-courier-name" />
    <input type="hidden" id="selected-courier-price" />
    <input type="hidden" id="selected-courier-service" />
</div>
```

### Perubahan B: Update ringkasan belanja di sidebar

Di dalam card "Ringkasan Belanja", tambahkan baris ongkir di antara diskon dan total:

```html
<!-- Tambahkan setelah baris diskon, sebelum total -->
<div id="ongkir-summary-row" class="hidden flex items-center justify-between text-sm">
    <span class="text-slate-500 dark:text-slate-400" id="ongkir-summary-label">Ongkos Kirim</span>
    <span class="font-semibold text-slate-800 dark:text-slate-100" id="ongkir-summary-price">-</span>
</div>
```

Dan update element total belanja agar bisa menampilkan subtotal + ongkir. Tambahkan id `grand-total` ke elemen yang menampilkan total akhir.

---

## TASK 4 — Update `script.js`

### Bagian A: Konstanta Worker URL

Tambahkan di bagian paling atas `script.js` (setelah `GLOBAL_PRODUCTS`):

```js
const WORKER_URL = 'https://hamzahquran-shipping.xxx.workers.dev'; // ganti dengan URL worker asli
const ORIGIN_AREA_ID = 'IDNP3IDNC33IDND1234IDZ15223'; // area ID Jurangmangu Barat, Pondok Aren — dapatkan dari test API Maps Biteship dengan input "Jurangmangu Barat Pondok Aren"
```

**Catatan penting:** `ORIGIN_AREA_ID` harus dicari dulu via API sebelum hardcode. Jalankan request ini sekali untuk dapat nilainya:
```
GET https://hamzahquran-shipping.xxx.workers.dev/search-area?input=Jurangmangu+Barat+Pondok+Aren
```
Ambil field `id` dari result pertama yang paling relevan, lalu hardcode nilainya sebagai `ORIGIN_AREA_ID`.

---

### Bagian B: Hapus fungsi `initWilayahDropdowns`

Cari dan hapus seluruh fungsi `initWilayahDropdowns` (sekitar line 1483–1545) karena dropdown wilayah sudah diganti dengan autocomplete Biteship.

---

### Bagian C: Tambah fungsi baru `initAreaSearch`

Tambahkan fungsi ini sebagai pengganti `initWilayahDropdowns`:

```js
async function initAreaSearch() {
    const input = document.getElementById('area-search-input');
    const resultsBox = document.getElementById('area-search-results');
    const areaIdField = document.getElementById('cust-area-id');
    const areaNameField = document.getElementById('cust-area-name');
    const ongkirSection = document.getElementById('ongkir-section');

    if (!input) return;

    let debounceTimer;

    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        const query = input.value.trim();

        if (query.length < 3) {
            resultsBox.classList.add('hidden');
            resultsBox.innerHTML = '';
            return;
        }

        debounceTimer = setTimeout(async () => {
            try {
                const res = await fetch(`${WORKER_URL}/search-area?input=${encodeURIComponent(query)}`);
                const data = await res.json();

                resultsBox.innerHTML = '';

                if (!data.areas || data.areas.length === 0) {
                    resultsBox.innerHTML = '<div class="px-4 py-3 text-sm text-slate-400">Area tidak ditemukan</div>';
                    resultsBox.classList.remove('hidden');
                    return;
                }

                data.areas.slice(0, 8).forEach(area => {
                    const item = document.createElement('div');
                    item.className = 'px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0';
                    item.textContent = area.name;
                    item.addEventListener('click', () => {
                        input.value = area.name;
                        areaIdField.value = area.id;
                        areaNameField.value = area.name;
                        resultsBox.classList.add('hidden');
                        fetchOngkir(area.id);
                    });
                    resultsBox.appendChild(item);
                });

                resultsBox.classList.remove('hidden');
            } catch (err) {
                console.error('Area search error:', err);
            }
        }, 500); // debounce 500ms
    });

    // Tutup dropdown kalau klik di luar
    document.addEventListener('click', (e) => {
        if (!document.getElementById('area-search-wrapper')?.contains(e.target)) {
            resultsBox.classList.add('hidden');
        }
    });
}
```

---

### Bagian D: Tambah fungsi `fetchOngkir`

```js
async function fetchOngkir(destinationAreaId) {
    const ongkirSection = document.getElementById('ongkir-section');
    const ongkirLoading = document.getElementById('ongkir-loading');
    const ongkirList = document.getElementById('ongkir-list');

    ongkirSection.classList.remove('hidden');
    ongkirLoading.classList.remove('hidden');
    ongkirList.innerHTML = '';

    // Reset pilihan kurir
    document.getElementById('selected-courier-name').value = '';
    document.getElementById('selected-courier-price').value = '';
    document.getElementById('selected-courier-service').value = '';
    updateGrandTotal();

    // Hitung total berat dari cart
    const totalWeight = cart.reduce((sum, item) => {
        const product = GLOBAL_PRODUCTS.find(p => p.id === item.id);
        return sum + ((product?.weight || 500) * item.qty);
    }, 0);

    // Hitung total nilai produk untuk item value
    const parsePrice = (p) => parseFloat(p.replace(/[^0-9]/g, ''));
    const totalValue = cart.reduce((sum, item) => {
        return sum + (parsePrice(item.priceWa || item.priceCrt) * item.qty);
    }, 0);

    // Build items array untuk Biteship
    const items = cart.map(item => {
        const product = GLOBAL_PRODUCTS.find(p => p.id === item.id);
        return {
            name: item.name,
            value: parsePrice(item.priceWa || item.priceCrt),
            weight: product?.weight || 500,
            quantity: item.qty
        };
    });

    try {
        const res = await fetch(`${WORKER_URL}/rates`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                origin_area_id: ORIGIN_AREA_ID,
                destination_area_id: destinationAreaId,
                couriers: 'jne,lion_parcel',
                items
            })
        });

        const data = await res.json();
        ongkirLoading.classList.add('hidden');

        if (!data.pricing || data.pricing.length === 0) {
            ongkirList.innerHTML = '<div class="text-sm text-red-500">Ongkir tidak tersedia untuk area ini.</div>';
            return;
        }

        // Render pilihan kurir
        data.pricing.forEach((option, index) => {
            const formatPrice = (n) => `Rp${n.toLocaleString('id-ID')}`;
            const card = document.createElement('label');
            card.className = 'flex items-center justify-between border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 cursor-pointer hover:border-brand-blue dark:hover:border-brand-blue transition has-[:checked]:border-brand-blue has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-950';
            card.innerHTML = `
                <div class="flex items-center gap-3">
                    <input type="radio" name="courier-option" value="${option.price}" 
                        data-name="${option.courier_name}" 
                        data-service="${option.courier_service_name}"
                        class="accent-brand-blue" />
                    <div>
                        <div class="font-semibold text-sm text-slate-800 dark:text-slate-100">
                            ${option.courier_name} - ${option.courier_service_name}
                        </div>
                        <div class="text-xs text-slate-400">${option.duration}</div>
                    </div>
                </div>
                <div class="font-bold text-brand-blue">${formatPrice(option.price)}</div>
            `;
            ongkirList.appendChild(card);
        });

        // Handle pilih kurir
        ongkirList.querySelectorAll('input[name="courier-option"]').forEach(radio => {
            radio.addEventListener('change', () => {
                document.getElementById('selected-courier-price').value = radio.value;
                document.getElementById('selected-courier-name').value = radio.dataset.name;
                document.getElementById('selected-courier-service').value = radio.dataset.service;
                updateGrandTotal();
            });
        });

    } catch (err) {
        ongkirLoading.classList.add('hidden');
        ongkirList.innerHTML = '<div class="text-sm text-red-500">Gagal mengambil data ongkir. Coba lagi.</div>';
        console.error('Ongkir error:', err);
    }
}
```

---

### Bagian E: Tambah fungsi `updateGrandTotal`

```js
function updateGrandTotal() {
    const parsePrice = (p) => parseFloat(p.replace(/[^0-9]/g, ''));
    const formatPrice = (n) => `Rp${n.toLocaleString('id-ID')}`;

    const subtotal = cart.reduce((sum, item) => sum + (parsePrice(item.priceWa || item.priceCrt) * item.qty), 0);
    const ongkirPrice = parseInt(document.getElementById('selected-courier-price')?.value || '0');
    const grandTotal = subtotal + ongkirPrice;

    // Update ongkir summary di sidebar
    const ongkirRow = document.getElementById('ongkir-summary-row');
    const ongkirLabel = document.getElementById('ongkir-summary-label');
    const ongkirSummaryPrice = document.getElementById('ongkir-summary-price');
    const grandTotalEl = document.getElementById('grand-total');

    if (ongkirPrice > 0 && ongkirRow) {
        const courierName = document.getElementById('selected-courier-name')?.value || 'Ongkos Kirim';
        ongkirRow.classList.remove('hidden');
        if (ongkirLabel) ongkirLabel.textContent = courierName;
        if (ongkirSummaryPrice) ongkirSummaryPrice.textContent = formatPrice(ongkirPrice);
    } else if (ongkirRow) {
        ongkirRow.classList.add('hidden');
    }

    if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotal);
}
```

---

### Bagian F: Update checkout handler — tambah validasi ongkir & info kurir ke Telegram

Cari blok validasi di dalam checkout handler (sekitar line 1350–1353):

```js
if (!name) return showFieldError('cust-name');
if (!phone) return showFieldError('cust-phone');
if (!address) return showFieldError('cust-address');
if (!document.getElementById('payment-method').value) return showFieldError('payment-method');
```

Tambahkan validasi area dan kurir setelah baris terakhir:

```js
if (!name) return showFieldError('cust-name');
if (!phone) return showFieldError('cust-phone');
if (!address) return showFieldError('cust-address');
if (!document.getElementById('cust-area-id').value) return showFieldError('area-search-input', 'Pilih area tujuan pengiriman');
if (!document.getElementById('selected-courier-price').value) return showAlert('Pilih Kurir', 'Silakan pilih layanan pengiriman terlebih dahulu.', 'info');
if (!document.getElementById('payment-method').value) return showFieldError('payment-method');
```

Lalu update variabel `address` dan `message` di checkout handler untuk menyertakan info wilayah dan kurir. Cari baris:

```js
const address = document.getElementById('cust-address').value.trim();
```

Tambahkan setelahnya:

```js
const areaName = document.getElementById('cust-area-name').value;
const courierName = document.getElementById('selected-courier-name').value;
const courierService = document.getElementById('selected-courier-service').value;
const courierPrice = parseInt(document.getElementById('selected-courier-price').value || '0');
```

Lalu cari bagian pembentukan `message` wilayah:

```js
const regionParts = [subdistrict, district, city, province].filter(p => p !== '');
if (regionParts.length > 0) {
    message += `- Wilayah: ${regionParts.join(', ')}\n`;
}
```

Ganti dengan:

```js
if (areaName) {
    message += `- Wilayah: ${areaName}\n`;
}
```

Lalu cari baris:

```js
message += `*Metode Pembayaran:* ${paymentMethodText}\n\n`;
```

Tambahkan setelahnya:

```js
message += `*Kurir:* ${courierName} - ${courierService}\n`;
message += `*Ongkos Kirim:* Rp${courierPrice.toLocaleString('id-ID')}\n`;
message += `*Total + Ongkir:* Rp${(subtotal + courierPrice).toLocaleString('id-ID')}\n\n`;
```

Juga update `orderData` yang disimpan ke localStorage/sessionStorage — tambahkan field kurir:

```js
const orderData = {
    name,
    phone,
    address,
    areaName,
    paymentMethod: paymentMethodValue,
    subtotal,
    ongkir: courierPrice,
    grandTotal: subtotal + courierPrice,
    courier: `${courierName} - ${courierService}`,
    cart: cart.map(item => ({
        name: item.name,
        qty: item.qty,
        price: parsePrice(item.priceWa || item.priceCrt)
    }))
};
```

---

### Bagian G: Update pemanggilan fungsi init di cart

Cari bagian di `script.js` yang memanggil `initWilayahDropdowns()` (kemungkinan di dalam `initCart()` atau DOMContentLoaded). Ganti dengan:

```js
initAreaSearch();
```

---

## TASK 5 — Update `thank-you.html` & `pesanan-saya.html`

Kedua halaman perlu menampilkan info tambahan dari `orderData`:

Di bagian ringkasan order, tambahkan baris:
- **Kurir:** `orderData.courier`
- **Ongkos Kirim:** `Rp[orderData.ongkir]`
- **Total + Ongkir:** `Rp[orderData.grandTotal]`

Ganti tampilan "Total Belanja" dengan "Total + Ongkir" (`orderData.grandTotal`) jika `orderData.ongkir > 0`.

---

## TASK 6 — Pindahkan Telegram Notification ke Cloudflare Worker

### Tujuan
Token Telegram tidak boleh ada di frontend (script.js). Pindahkan fetch Telegram ke Worker yang sama dengan Biteship.

### Bagian A: Tambah Environment Variable di Worker

Tambahkan environment variable baru di Cloudflare Worker settings:
- Key: `TELEGRAM_BOT_TOKEN`
- Value: (token baru hasil revoke dari BotFather — diisi manual oleh owner)
- Key: `TELEGRAM_CHAT_ID`  
- Value: `572757424`

### Bagian B: Tambah Route Telegram di `worker.js`

Tambahkan route baru di dalam Worker, setelah route `/rates`:

```javascript
// Route 3: Telegram notification (POST /notify)
if (path === '/notify' && request.method === 'POST') {
  const body = await request.json();

  const res = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: body.message,
      parse_mode: 'Markdown'
    })
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { headers });
}
```

### Bagian C: Update `script.js` — ganti fetch Telegram

Cari blok Telegram di checkout handler:

```js
const TELEGRAM_BOT_TOKEN = '...';
const TELEGRAM_CHAT_ID = '572757424';

const telegramMessage = message;

await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
    })
}).catch(err => console.error('Telegram error:', err));
```

Ganti seluruh blok di atas dengan:

```js
try {
    await fetch(`${WORKER_URL}/notify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    });
} catch (err) {
    console.error('Telegram error:', err);
}
```

### Catatan
- `WORKER_URL` sudah didefinisikan di Task 4 Bagian A — tidak perlu deklarasi ulang
- Hapus variabel `TELEGRAM_BOT_TOKEN` dan `TELEGRAM_CHAT_ID` dari `script.js` setelah dipindah
- Pastikan token lama sudah di-revoke via BotFather sebelum deploy

---

## Catatan untuk Agent

- Courier code Biteship: `jne` untuk JNE, `lion_parcel` untuk Lion Parcel
- `ORIGIN_AREA_ID` harus dicari dulu via Worker setelah deploy — jangan pakai nilai placeholder
- Debounce input autocomplete 500ms — jangan trigger setiap keystroke
- Jangan hapus atau ubah logika Telegram, sessionStorage, dan localStorage yang sudah ada — hanya extend `orderData`-nya
- `updateGrandTotal()` harus dipanggil juga setiap kali cart berubah (item ditambah/dikurang) — cari fungsi `renderCart` atau `updateCartTotalUI` dan tambahkan pemanggilan `updateGrandTotal()` di akhirnya
- Pastikan `initAreaSearch()` hanya jalan di halaman `cart.html` — cek keberadaan `#area-search-input` sebelum inisialisasi