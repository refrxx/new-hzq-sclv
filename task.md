# TASK: Integrasi Scalev API ke hamzahquran.my.id (Existing HTML)

## Overview
Website hamzahquran.my.id sudah jalan dengan data produk hardcode di `GLOBAL_PRODUCTS` di `script.js`. Tujuan task ini adalah **mengganti data hardcode dengan data dari Scalev API**, dan **mengganti checkout WA dengan Scalev checkout**, tanpa mengubah tampilan/UI yang sudah ada.

## Scalev Config
```js
const SCALEV_STORE_ID = 'store_mgoatjgiK4vAGNHw92jWTPhr';
const SCALEV_API_KEY  = 'sfpk_Mysr94zLAbMkQmERxXKUPVPyxcuYLGUxVlZHBXUUEs7ldStOFMsxcqRZaYlTvdvh';
const SCALEV_API_BASE = 'https://api.scalev.com';
```

Tambahkan `https://hamzahquran.my.id` ke Scalev Allowed Browser Origins jika belum ada.

---

## File yang perlu dibuat

### scalev.js (file baru)
Buat file `scalev.js` yang berisi semua fungsi Scalev API. Load SEBELUM `script.js` di semua halaman HTML.

```js
const SCALEV_STORE_ID = 'store_mgoatjgiK4vAGNHw92jWTPhr';
const SCALEV_API_KEY  = 'sfpk_Mysr94zLAbMkQmERxXKUPVPyxcuYLGUxVlZHBXUUEs7ldStOFMsxcqRZaYlTvdvh';
const SCALEV_API_BASE = 'https://api.scalev.com';

async function scalevFetch(path, init = {}) {
    const headers = new Headers(init.headers || {});
    headers.set('Accept', 'application/json');
    headers.set('X-Scalev-Storefront-Api-Key', SCALEV_API_KEY);

    const guestToken = localStorage.getItem('scalev_guest_token');
    if (guestToken) headers.set('X-Scalev-Guest-Token', guestToken);

    const res = await fetch(`${SCALEV_API_BASE}/v3/stores/${SCALEV_STORE_ID}${path}`, {
        ...init,
        credentials: 'omit',
        headers,
    });

    const newToken = res.headers.get('x-scalev-guest-token');
    if (newToken) localStorage.setItem('scalev_guest_token', newToken);

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error('Scalev error:', JSON.stringify(err));
        throw new Error(err.message || JSON.stringify(err));
    }

    return res.json();
}

// Catalog
window.scalevGetProducts = (params = {}) => {
    const q = new URLSearchParams({ per_page: params.per_page || 20, page: params.page || 1, ...(params.search ? { search: params.search } : {}) });
    return scalevFetch(`/public/items?${q}`);
};

window.scalevGetProduct = (slug) => scalevFetch(`/public/products/${slug}`);
window.scalevGetBundle = (slug) => scalevFetch(`/public/bundle-price-options/${slug}`);

// Cart
window.scalevGetCart = () => scalevFetch('/public/cart');
window.scalevAddToCart = (type, id, qty = 1) => {
    const body = type === 'variant'
        ? { type: 'variant', variant_id: id, quantity: qty }
        : { type: 'bundle_price_option', bundle_price_option_id: id, quantity: qty };
    return scalevFetch('/public/cart/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
};
window.scalevUpdateCart = (itemId, qty) => scalevFetch(`/public/cart/items/${itemId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity: qty }),
});
window.scalevRemoveCart = (itemId) => scalevFetch(`/public/cart/items/${itemId}`, { method: 'DELETE' });

// Locations
window.scalevGetProvinces = () => scalevFetch('/public/locations/provinces');
window.scalevGetCities = (provinceId) => scalevFetch(`/public/locations/cities?province_id=${provinceId}`);
window.scalevGetSubdistricts = (cityId) => scalevFetch(`/public/locations/subdistricts?city_id=${cityId}`);

// Shipping
window.scalevGetShipping = (payload) => scalevFetch('/public/checkout/shipping-options', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
});

// Checkout
window.scalevCheckout = (payload) => scalevFetch('/public/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
});

// Order
window.scalevGetOrder = (secretSlug) => scalevFetch(`/public/orders/${secretSlug}`);

// Helpers
window.scalevFormatRupiah = (amount) => new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0
}).format(amount);

window.scalevRefreshCartBadge = async () => {
    try {
        const cart = await scalevGetCart();
        const total = (cart.items || []).reduce((sum, item) => sum + item.quantity, 0);
        document.querySelectorAll('#nav-cart-badge').forEach(el => {
            el.textContent = total;
            el.classList.toggle('hidden', total === 0);
        });
        localStorage.setItem('scalev_cart_count', String(total));
        return total;
    } catch { return 0; }
};
```

---

## File yang dimodifikasi

### 1. produk.html

**Tambahkan script sebelum `</body>`:**
```html
<script src="scalev.js"></script>
<script src="script.js"></script>
```
(hapus yang lama, ganti dengan urutan ini)

**Tambahkan `id="product-list"` ke container grid produk yang sudah ada.**

Cari div yang berisi produk cards (biasanya `id="katalog-grid"` atau yang setara), pastikan ada id yang bisa ditarget.

---

### 2. script.js — fungsi initKatalog()

Ganti `initKatalog()` agar fetch dari Scalev, bukan dari `GLOBAL_PRODUCTS`.

**Field mapping dari Scalev `/public/items` response:**
```js
// item.entity_type === 'product' → produk biasa
// item.entity_type === 'bundle_price_option' → bundle

const name = item.name;
const slug = item.slug;
const price = parseFloat(item.price_range?.min || '0');

// Gambar: bundle punya item.images[0] (string URL)
// Product: item.images bisa array of objects atau kosong
const img = Array.isArray(item.images) && item.images.length > 0
    ? (typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url)
    : 'img/placeholder.jpg';
```

**Contoh implementasi initKatalog() baru:**
```js
async function initKatalog() {
    const grid = document.getElementById('katalog-grid'); // sesuaikan id
    if (!grid) return;

    // Tampilkan skeleton
    grid.innerHTML = Array(8).fill(`
        <div class="animate-pulse bg-slate-100 dark:bg-slate-800 rounded-32 aspect-square"></div>
    `).join('');

    try {
        const data = await scalevGetProducts({ per_page: 20 });
        const items = data.data || [];

        if (!items.length) {
            grid.innerHTML = '<p class="col-span-full text-center text-slate-400">Produk tidak ditemukan.</p>';
            return;
        }

        grid.innerHTML = items.map(item => {
            const price = parseFloat(item.price_range?.min || '0');
            const img = Array.isArray(item.images) && item.images.length > 0
                ? (typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url)
                : 'img/placeholder.jpg';

            // Gunakan template card yang sudah ada di HTML
            // Cukup inject ke innerHTML dengan class yang sama
            return `
                <a href="product-detail.html?slug=${item.slug}" class="group block">
                    <div class="relative overflow-hidden rounded-32 bg-slate-50 dark:bg-slate-900 aspect-square mb-4 media-card">
                        <img src="${img}" alt="${item.name}" loading="lazy"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onerror="this.src='img/placeholder.jpg'" />
                    </div>
                    <div class="px-1">
                        <h3 class="font-display font-bold text-slate-900 dark:text-white text-base mb-1 group-hover:text-brand-blue transition-colors leading-snug line-clamp-2">${item.name}</h3>
                        <div class="wa-price-badge inline-flex">
                            <span class="material-symbols-outlined" style="font-size:15px;color:#166534">sell</span>
                            <span class="price-val">${scalevFormatRupiah(price)}</span>
                        </div>
                    </div>
                </a>
            `;
        }).join('');

    } catch (err) {
        grid.innerHTML = `<div class="col-span-full text-center py-20">
            <p class="text-slate-400 mb-4">Gagal memuat produk</p>
            <button onclick="initKatalog()" class="px-6 py-2 bg-brand-blue text-white rounded-full font-bold text-sm">Coba Lagi</button>
        </div>`;
    }

    scalevRefreshCartBadge();
}
```

---

### 3. product-detail.html

**Tambahkan script sebelum `</body>`:**
```html
<script src="scalev.js"></script>
<script src="script.js"></script>
```

---

### 4. script.js — fungsi initProductDetail()

Ganti `initProductDetail()` agar:
1. Baca `?slug=` dari URL
2. Fetch dari Scalev berdasarkan `entity_type` (product vs bundle)
3. Populate elemen HTML yang sudah ada

```js
async function initProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    if (!slug) return;

    try {
        // Coba fetch sebagai product dulu, fallback ke bundle
        let product;
        try {
            product = await scalevGetProduct(slug);
        } catch {
            product = await scalevGetBundle(slug);
        }

        // Update title
        document.title = `${product.name} - Hamzah Quran`;

        // Nama produk — cari elemen h1 atau yang menampilkan nama
        const nameEl = document.getElementById('product-name');
        if (nameEl) nameEl.textContent = product.name;

        // Harga — populate wa-price-badge yang sudah ada
        const price = product.variants?.[0]?.price
            || parseFloat(product.price_range?.min || product.price || '0');
        const priceEl = document.querySelector('.price-val');
        if (priceEl) priceEl.textContent = scalevFormatRupiah(price);

        // Gambar — populate gallery yang sudah ada
        const images = (product.images || []).map(img =>
            typeof img === 'string' ? img : img.url
        ).filter(Boolean);

        // Update main image dan thumbnails menggunakan fungsi yang sudah ada
        if (images.length > 0 && typeof updateGallery === 'function') {
            updateGallery(images);
        }

        // Deskripsi
        const descEl = document.getElementById('product-description');
        if (descEl && product.description) descEl.innerHTML = product.description;

        // Variants
        const variants = product.variants || [];
        let selectedVariantId = variants[0]?.id || null;
        let selectedBundleId = product.bundle_price_option_id || null;
        let itemType = product.entity_type === 'bundle_price_option' ? 'bundle_price_option' : 'variant';

        // Render variant selector jika ada
        if (variants.length > 1) {
            const variantContainer = document.getElementById('variant-selector');
            if (variantContainer) {
                variantContainer.innerHTML = variants.map((v, i) => `
                    <button class="variant-btn px-4 py-2 rounded-full border-2 font-semibold text-sm transition-all
                        ${i === 0 ? 'border-brand-blue text-brand-blue' : 'border-slate-200 text-slate-500'}"
                        data-id="${v.id}" data-price="${v.price}">
                        ${v.name}
                    </button>
                `).join('');

                variantContainer.querySelectorAll('.variant-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        selectedVariantId = parseInt(btn.dataset.id);
                        const vPrice = parseFloat(btn.dataset.price);
                        if (priceEl && vPrice) priceEl.textContent = scalevFormatRupiah(vPrice);
                        variantContainer.querySelectorAll('.variant-btn').forEach(b => {
                            b.className = b.className.replace('border-brand-blue text-brand-blue', 'border-slate-200 text-slate-500');
                        });
                        btn.className = btn.className.replace('border-slate-200 text-slate-500', 'border-brand-blue text-brand-blue');
                    });
                });
            }
        }

        // Add to cart buttons (desktop + mobile yang sudah ada)
        let qty = 1;
        document.querySelectorAll('[id^="add-to-cart-btn"]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = itemType === 'variant' ? selectedVariantId : selectedBundleId;
                if (!id) { alert('Pilih varian dulu'); return; }

                btn.disabled = true;
                const orig = btn.innerHTML;
                btn.innerHTML = '<span class="material-symbols-outlined animate-spin">progress_activity</span>';

                try {
                    await scalevAddToCart(itemType, id, qty);
                    await scalevRefreshCartBadge();
                    showToast('Berhasil ditambahkan ke keranjang!');
                } catch (e) {
                    showToast('Gagal menambahkan ke keranjang', true);
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = orig;
                }
            });
        });

        // Sembunyikan tombol WA dan Shopee lama (opsional)
        // document.getElementById('wa-link-mobile')?.classList.add('hidden');
        // document.getElementById('shopee-link-mobile')?.classList.add('hidden');

    } catch (err) {
        console.error('Product detail error:', err);
    }

    scalevRefreshCartBadge();
}

function showToast(msg, isError = false) {
    const t = document.createElement('div');
    t.className = `fixed bottom-24 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-xl whitespace-nowrap toast-in`;
    t.style.background = isError ? '#ef4444' : '#16a34a';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.classList.replace('toast-in', 'toast-out'); setTimeout(() => t.remove(), 400); }, 2500);
}
```

---

### 5. cart.html

**Tambahkan script sebelum `</body>`:**
```html
<script src="scalev.js"></script>
<script src="script.js"></script>
```

Buat halaman `checkout.html` baru (lihat bawah) dan arahkan tombol "Proses Checkout" ke sana.

---

### 6. script.js — fungsi initCart()

Ganti `initCart()` agar fetch dari Scalev guest cart, bukan dari `localStorage`.

```js
async function initCart() {
    const cartContainer = document.getElementById('cart-items-container'); // sesuaikan id
    if (!cartContainer) return;

    try {
        const cart = await scalevGetCart();
        const items = cart.items || [];

        if (!items.length) {
            document.getElementById('empty-cart')?.classList.remove('hidden');
            cartContainer.closest('.cart-section')?.classList.add('hidden');
            return;
        }

        cartContainer.innerHTML = items.map(item => {
            // Field mapping dari Scalev cart response
            let name, img;
            if (item.type === 'bundle_price_option') {
                name = item.bundle_name || item.bundle_price_option_name || 'Produk';
                img = item.image || 'img/placeholder.jpg';
            } else {
                name = item.product_name || item.variant_name || 'Produk';
                img = item.image || 'img/placeholder.jpg';
            }
            const price = parseFloat(item.price || '0');

            // Gunakan template cart item yang sudah ada di HTML
            return `
                <div class="cart-item flex items-start gap-4 py-6 border-b border-slate-100 dark:border-slate-800" data-item-id="${item.id}">
                    <img src="${img}" alt="${name}" class="w-20 h-20 object-cover rounded-2xl bg-slate-100 flex-shrink-0" onerror="this.src='img/placeholder.jpg'" />
                    <div class="flex-1 min-w-0">
                        <h3 class="font-bold text-slate-900 dark:text-white text-sm leading-snug line-clamp-2 mb-1">${name}</h3>
                        <div class="wa-price-badge inline-flex mb-3">
                            <span class="price-val">${scalevFormatRupiah(price)}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <button class="qty-minus w-8 h-8 rounded-full border border-brand-blue text-brand-blue font-bold flex items-center justify-center" data-id="${item.id}" data-qty="${item.quantity}">−</button>
                            <span class="qty-val font-bold text-slate-900 dark:text-white w-6 text-center">${item.quantity}</span>
                            <button class="qty-plus w-8 h-8 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center" data-id="${item.id}" data-qty="${item.quantity}">+</button>
                            <button class="remove-item ml-auto text-slate-400 hover:text-red-500 transition-colors" data-id="${item.id}">
                                <span class="material-symbols-outlined text-xl">delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Bind events
        cartContainer.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = parseInt(btn.dataset.id);
                const qty = parseInt(btn.dataset.qty);
                if (qty <= 1) return;
                await scalevUpdateCart(id, qty - 1);
                initCart();
            });
        });
        cartContainer.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = parseInt(btn.dataset.id);
                const qty = parseInt(btn.dataset.qty);
                await scalevUpdateCart(id, qty + 1);
                initCart();
            });
        });
        cartContainer.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = parseInt(btn.dataset.id);
                await scalevRemoveCart(id);
                initCart();
            });
        });

        // Update total UI (gunakan fungsi yang sudah ada)
        const total = items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
        document.querySelectorAll('.cart-total').forEach(el => el.textContent = scalevFormatRupiah(total));
        document.querySelectorAll('.cart-count-summary').forEach(el => {
            el.textContent = items.reduce((sum, item) => sum + item.quantity, 0);
        });

        // Arahkan tombol checkout ke checkout.html
        document.querySelectorAll('.btn-checkout-wa').forEach(btn => {
            btn.textContent = 'Proses Checkout';
            btn.addEventListener('click', () => window.location.href = 'checkout.html');
        });

    } catch (err) {
        console.error('Cart error:', err);
    }
}
```

---

### 7. Buat checkout.html (baru)

Buat file baru `checkout.html` dengan struktur yang sama (header, footer, style) seperti file HTML lainnya.

Konten form checkout:

**Section 1 — Data Penerima:**
- Nama lengkap (`id="customer-name"`)
- Nomor HP (`id="customer-phone"`) — auto-format ke 62xxx
- Email (`id="customer-email"`)

**Section 2 — Alamat:**
- Alamat lengkap (`id="shipping-address"`)
- Dropdown Provinsi → Kota → Kecamatan dari Scalev locations API
- Simpan `data-id` pada setiap option kecamatan untuk `shipping_location_id`
- Kode pos (`id="postal-code"`) — auto-fill dari response subdistrict

**Section 3 — Opsi Pengiriman:**
- Tombol "Cek Ongkir" — fetch `/public/checkout/shipping-options`
- List kurir dari response `data` array

**Field mapping kurir dari Scalev:**
```js
// courier_names mapping
const courierNames = { jnt: 'J&T', jne: 'JNE', anteraja: 'AnterAja', sicepat: 'SiCepat', self_courier: 'Kurir Toko' };

options.map(opt => ({
    displayName: `${courierNames[opt.courier_code] || opt.courier_code.toUpperCase()} ${opt.name}`,
    etd: opt.etd,
    price: opt.cost,
    courier_service_id: opt.courier_service_id,
    warehouse_unique_id: opt.warehouse_unique_id,
}));
```

**Section 4 — Payment:** Transfer Bank (default)

**Section 5 — Summary:** subtotal + ongkir + total

**Submit checkout payload yang BENAR:**
```js
// Format phone
let phone = document.getElementById('customer-phone').value.replace(/\D/g, '');
if (phone.startsWith('0')) phone = '62' + phone.slice(1);

const payload = {
    items: cartItems, // dari scalevGetCart() → map ke {type, variant_id/bundle_price_option_id, quantity}
    customer_name: document.getElementById('customer-name').value.trim(),
    customer_email: document.getElementById('customer-email').value.trim(),
    customer_phone: phone,
    shipping_address: document.getElementById('shipping-address').value.trim(),
    shipping_province: selectedProvinceName,
    shipping_city: selectedCityName,
    shipping_subdistrict: selectedSubdistrictName,
    shipping_postal_code: document.getElementById('postal-code').value.trim(),
    shipping_location_id: selectedLocationId, // dari data-id option kecamatan
    payment_method: 'bank_transfer',
};

// Setelah checkout sukses:
const result = await scalevCheckout(payload);
// Simpan ke localStorage untuk halaman pesanan
const orders = JSON.parse(localStorage.getItem('scalev_orders') || '[]');
orders.unshift({ secret_slug: result.secret_slug, order_id: result.order_id, created_at: new Date().toISOString(), total: result.gross_revenue });
localStorage.setItem('scalev_orders', JSON.stringify(orders));
// Clear guest token
localStorage.removeItem('scalev_guest_token');
// Redirect
window.location.href = `order.html?slug=${result.secret_slug}`;
```

---

### 8. Buat order.html (baru)

Halaman konfirmasi order. Baca `?slug=` dari URL, fetch `scalevGetOrder(slug)`.

**Field mapping dari order response:**
```js
const order = await scalevGetOrder(slug);

// Produk
order.orderlines[0].product_name

// Total bayar
order.gross_revenue → parseFloat → formatRupiah

// Rekening tujuan
order.store.payment_accounts → filter method === 'bank_transfer'
  → account.financial_entity.name (nama bank)
  → account.account_number (nomor rekening)
  → account.account_holder (atas nama)

// Tanggal order
new Date(order.draft_time).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric', timeZone:'Asia/Jakarta' })

// Link WA CS
`https://wa.me/${order.handler_phone}?text=${order.chat_message}`
```

---

## Catatan Penting

1. **Jangan ubah** struktur HTML yang sudah ada — hanya tambah/ganti JS logic
2. **Scalev items** bisa `product` atau `bundle_price_option` — handle keduanya
3. **Guest token** otomatis tersimpan di localStorage via `scalevFetch`
4. **Urutan load script:** `scalev.js` HARUS sebelum `script.js`
5. **Dropdown lokasi** di cart.html yang sudah ada (emsifa API) bisa diganti dengan Scalev locations API, atau tetap pakai yang lama — pilih yang lebih mudah
6. **`GLOBAL_PRODUCTS`** tidak perlu dihapus dulu — bisa dibiarkan, yang diganti hanya fungsi yang memakainya

## Urutan Pengerjaan

1. Buat `scalev.js`
2. Tambahkan `<script src="scalev.js"></script>` ke semua HTML
3. Ganti `initKatalog()` di `script.js`
4. Ganti `initProductDetail()` di `script.js`
5. Ganti `initCart()` di `script.js`
6. Buat `checkout.html`
7. Buat `order.html`
8. Test end-to-end: katalog → detail → cart → checkout → order confirmation