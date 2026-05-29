const SCALEV_STORE_ID = 'store_mgoatjgiK4vAGNHw92jWTPhr';
const SCALEV_API_KEY = 'sfpk_Mysr94zLAbMkQmERxXKUPVPyxcuYLGUxVlZHBXUUEs7ldStOFMsxcqRZaYlTvdvh';
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

window.scalevGetProducts = (params = {}) => {
  const q = new URLSearchParams({
    per_page: params.per_page || 20,
    page: params.page || 1,
    ...(params.search ? { search: params.search } : {}),
  });
  return scalevFetch(`/public/items?${q}`);
};

window.scalevGetProduct = (slug) => scalevFetch(`/public/products/${slug}`);
window.scalevGetBundle = (slug) => scalevFetch(`/public/bundle-price-options/${slug}`);

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

window.scalevGetProvinces = () => scalevFetch('/public/locations/provinces');
window.scalevGetCities = (provinceId) => scalevFetch(`/public/locations/cities?province_id=${provinceId}`);
window.scalevGetSubdistricts = (cityId) => scalevFetch(`/public/locations/subdistricts?city_id=${cityId}`);
window.scalevGetPostalCodes = (locationId) => scalevFetch(`/public/locations/${locationId}/postal-codes`);

window.scalevGetShipping = (payload) => scalevFetch('/public/checkout/shipping-options', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

window.scalevCheckout = (payload) => scalevFetch('/public/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload),
});

window.scalevGetOrder = (secretSlug) => scalevFetch(`/public/orders/${secretSlug}`);

window.scalevFormatRupiah = (amount) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
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
