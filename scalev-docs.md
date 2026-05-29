# Scalev Storefront API v3 — Complete Reference for Agent

Source: https://docs.scalev.com/en/storefront-api/build-a-browser-only-storefront

---

## Architecture

- Static frontend (Cloudflare Pages, Vercel, Netlify, CDN)
- Browser calls `https://api.scalev.com` directly — NO backend proxy
- All paths relative to: `https://api.scalev.com/v3/stores/{store_id}`

### Headers
- Public routes: `X-Scalev-Storefront-Api-Key: sfpk_xxx`
- Customer routes: `Authorization: Bearer <access_token>`
- Guest cart: `X-Scalev-Guest-Token: <token>` (save from response header, resend on every cart/checkout call)

---

## Fetch Helper (TypeScript)

```ts
const API_BASE = "https://api.scalev.com";
const STORE_ID = import.meta.env.PUBLIC_SCALEV_STORE_ID;
const STOREFRONT_KEY = import.meta.env.PUBLIC_SCALEV_API_KEY;

async function storefrontFetch(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  headers.set("X-Scalev-Storefront-Api-Key", STOREFRONT_KEY);

  const guestToken = localStorage.getItem("scalev_guest_token");
  if (guestToken) headers.set("X-Scalev-Guest-Token", guestToken);

  const res = await fetch(`${API_BASE}/v3/stores/${STORE_ID}${path}`, {
    ...init,
    credentials: "omit",
    headers,
  });

  const newToken = res.headers.get("x-scalev-guest-token");
  if (newToken) localStorage.setItem("scalev_guest_token", newToken);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("Scalev error:", JSON.stringify(err, null, 2));
    throw new Error(JSON.stringify(err));
  }

  return res.json();
}
```

---

## Catalog Flow

```
GET /public/items                          → list items (product + bundle_price_option)
GET /public/items/count                    → total count
GET /public/products/{slug}               → product detail
GET /public/bundle-price-options/{slug}   → bundle detail
GET /public/variants/pricing?ids=...      → variant pricing
GET /public/variants/{variant_id}/availability → availability
```

### Item types in /public/items response:
- `entity_type: "product"` → use `GET /public/products/{slug}`
- `entity_type: "bundle_price_option"` → use `GET /public/bundle-price-options/{slug}`

### Pagination: cursor-based
```
GET /public/items?per_page=20&cursor=xxx
```
Response: `{ data: [...], has_next: true, next_cursor: "xxx" }`

---

## Guest Cart Flow

```
GET    /public/cart                        → get/init cart (save x-scalev-guest-token)
POST   /public/cart/items                  → add item
PATCH  /public/cart/items/{item_id}        → update quantity
DELETE /public/cart/items/{item_id}        → remove item
```

### Add to cart payload:
```json
// Product variant:
{ "type": "variant", "variant_id": 494535, "quantity": 1 }

// Bundle:
{ "type": "bundle_price_option", "bundle_price_option_id": 31925, "quantity": 1 }
```

---

## Location Flow

### Pattern A (dropdown cascade):
```
GET /public/locations/provinces
GET /public/locations/cities?province_id=...
GET /public/locations/subdistricts?city_id=...
GET /public/locations/{location_id}/postal-codes
```

### Pattern B (search):
```
GET /public/locations?search=...
```

---

## Checkout Flow (Guest)

```
POST /public/checkout/shipping-options     → get shipping options
POST /public/checkout/summary              → get order summary
POST /public/checkout                      → create order → returns secret_slug
GET  /public/orders/{secret_slug}          → get order detail
POST /public/orders/{secret_slug}/transfer-proof-upload → upload bukti bayar
PATCH /public/orders/{secret_slug}         → update transferproof_url
POST /public/orders/{secret_slug}/payment  → confirm payment
```

---

## ✅ CORRECT Checkout Payload (WAJIB IKUTI INI)

### Variant product:
```json
{
  "items": [
    {
      "type": "variant",
      "variant_id": 494535,
      "quantity": 1
    }
  ],
  "customer_name": "Demo Customer",
  "customer_email": "demo.customer@example.com",
  "customer_phone": "6281234567890",
  "shipping_address": "Jl. Demo No. 3",
  "shipping_province": "DKI Jakarta",
  "shipping_city": "Kota Jakarta Pusat",
  "shipping_subdistrict": "Cempaka Putih",
  "shipping_postal_code": "10510",
  "shipping_location_id": 9089,
  "payment_method": "bank_transfer"
}
```

### Bundle price option:
```json
{
  "items": [
    {
      "type": "bundle_price_option",
      "bundle_price_option_id": 31925,
      "quantity": 1
    }
  ],
  "customer_name": "Demo Customer",
  "customer_email": "demo.customer@example.com",
  "payment_method": "bank_transfer"
}
```

## ❌ Field yang TIDAK ADA di checkout payload (hapus dari code):
- `location_id` → field yang benar adalah `shipping_location_id`
- `courier_service_id` → tidak dibutuhkan
- `warehouse_unique_id` → tidak dibutuhkan
- `shipping_cost` → tidak dibutuhkan

---

## Shipping Options Payload

```json
{
  "items": [
    { "type": "variant", "variant_id": 494535, "quantity": 1 }
  ],
  "shipping_province": "DKI Jakarta",
  "shipping_city": "Kota Jakarta Pusat",
  "shipping_subdistrict": "Cempaka Putih",
  "shipping_postal_code": "10510",
  "shipping_location_id": 9089
}
```

---

## Order Detail Fields (untuk halaman konfirmasi)

Gunakan field berikut dari `GET /public/orders/{secret_slug}`:

```
product_price           → subtotal produk
product_discount        → diskon produk
shipping_cost           → ongkos kirim
shipping_discount       → diskon ongkir
gross_revenue           → TOTAL yang harus dibayar customer
payment_method          → metode pembayaran
payment_account_holder  → nama pemilik rekening
payment_account_number  → nomor rekening
transferproof_url       → URL bukti transfer (jika sudah upload)
transfer_time           → waktu transfer
store.payment_accounts  → rekening toko (fallback jika tidak ada order-level account)
handler_phone           → nomor WA CS
```

---

## Customer Phone Format

Harus format internasional tanpa `+`:
- ✅ `6281234567890`
- ❌ `081234567890`
- ❌ `+6281234567890`

Konversi:
```js
let phone = input.replace(/\D/g, '');
if (phone.startsWith('0')) phone = '62' + phone.slice(1);
```

---

## Checkout Source Behavior

- Jika `items` disupply → order dari `items` langsung
- Jika `items` tidak ada → order dari guest cart (`X-Scalev-Guest-Token`)
- Jika keduanya ada → `items` yang dipakai, guest cart di-clear setelah sukses

---

## After Successful Checkout

1. Response mengandung `secret_slug`
2. Redirect ke `/order?slug={secret_slug}`
3. Clear guest token dari localStorage: `localStorage.removeItem('scalev_guest_token')`
4. Fetch `GET /public/orders/{secret_slug}` untuk tampilkan detail order dan instruksi bayar