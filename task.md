# TASK: Fix Dropdown Provinsi Tidak Muncul di Checkout

## Root Cause
API `/public/locations/provinces` sudah return data dengan benar (Status 200). Masalah ada di cara render dropdown — field name yang dipakai salah.

## Field name yang benar dari Scalev

```json
{
  "data": [
    { "ro_province_id": 1, "province_id": 1, "province_name": "Bali" },
    { "ro_province_id": 3, "province_id": 3, "province_name": "Banten" }
  ]
}
```

## Fix render dropdown provinsi

```js
async function loadProvinces() {
    const select = document.getElementById('province-select'); // sesuaikan id
    if (!select) return;

    select.innerHTML = '<option value="">Memuat...</option>';

    try {
        const data = await scalevGetProvinces();
        const provinces = data.data || []; // ← pakai data.data, bukan data langsung

        select.innerHTML = '<option value="">Pilih Provinsi</option>';
        provinces.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.province_id;        // ← province_id bukan id
            opt.textContent = p.province_name; // ← province_name bukan name
            select.appendChild(opt);
        });
    } catch (err) {
        select.innerHTML = '<option value="">Gagal memuat provinsi</option>';
        console.error('Provinces error:', err);
    }
}
```

## Fix render dropdown kota

Response dari `/public/locations/cities?province_id=...`:
```json
{
  "data": [
    { "city_id": 457, "city_name": "Kota Tangerang Selatan", "province_id": 3 }
  ]
}
```

```js
async function loadCities(provinceId) {
    const select = document.getElementById('city-select');
    select.innerHTML = '<option value="">Memuat...</option>';

    const data = await scalevGetCities(provinceId);
    const cities = data.data || [];

    select.innerHTML = '<option value="">Pilih Kota/Kabupaten</option>';
    cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.city_id;        // ← city_id
        opt.textContent = c.city_name; // ← city_name
        select.appendChild(opt);
    });
}
```

## Fix render dropdown kecamatan

Response dari `/public/locations/subdistricts?city_id=...`:
```json
{
  "data": [
    { "subdistrict_id": 9089, "subdistrict_name": "Pondok Aren", "postal_code": "15223" }
  ]
}
```

```js
async function loadSubdistricts(cityId) {
    const select = document.getElementById('subdistrict-select');
    select.innerHTML = '<option value="">Memuat...</option>';

    const data = await scalevGetSubdistricts(cityId);
    const subs = data.data || [];

    select.innerHTML = '<option value="">Pilih Kecamatan</option>';
    subs.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.subdistrict_id;        // ← subdistrict_id
        opt.textContent = s.subdistrict_name; // ← subdistrict_name
        opt.dataset.postalCode = s.postal_code || '';
        select.appendChild(opt);
    });
}
```

## Simpan data untuk checkout payload

```js
let selectedProvinceName = '';
let selectedCityName = '';
let selectedSubdistrictName = '';
let selectedLocationId = null;

provinceSelect.addEventListener('change', () => {
    selectedProvinceName = provinceSelect.options[provinceSelect.selectedIndex].textContent;
    loadCities(provinceSelect.value);
});

citySelect.addEventListener('change', () => {
    selectedCityName = citySelect.options[citySelect.selectedIndex].textContent;
    loadSubdistricts(citySelect.value);
});

subdistrictSelect.addEventListener('change', () => {
    const opt = subdistrictSelect.options[subdistrictSelect.selectedIndex];
    selectedSubdistrictName = opt.textContent;
    selectedLocationId = parseInt(subdistrictSelect.value); // ← subdistrict_id
    // Auto-fill kode pos
    const postalInput = document.getElementById('postal-code');
    if (postalInput && opt.dataset.postalCode) {
        postalInput.value = opt.dataset.postalCode;
    }
});
```

## Summary field untuk checkout payload

```js
{
    shipping_province: selectedProvinceName,    // "Banten"
    shipping_city: selectedCityName,            // "Kota Tangerang Selatan"
    shipping_subdistrict: selectedSubdistrictName, // "Pondok Aren"
    shipping_location_id: selectedLocationId,   // 9089 (subdistrict_id)
}
```