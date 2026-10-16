// Bikin TEST ORDER di sandbox Biteship (butuh untuk formulir aktivasi API: 1 order Delivered, 1 order Cancelled).
//
// Pakai (Node 20.6+), dari folder project:
//   node --env-file=.env scripts/biteship-test-order.mjs [jne|lion] [jumlah]
// Contoh:
//   node --env-file=.env scripts/biteship-test-order.mjs jne 2     -> 2 test order JNE
//   node --env-file=.env scripts/biteship-test-order.mjs lion      -> 1 test order Lion
//
// Env yang dibaca:
//   BITESHIP_TEST_KEY      API key sandbox (awalan "biteship_test."). WAJIB.
//   ORIGIN_POSTAL_CODE     kode pos asal (default 15223)
// Script ini MENOLAK key yang bukan sandbox, supaya tidak membuat order sungguhan.

const KEY = process.env.BITESHIP_TEST_KEY;
const COMPANY = (process.argv[2] || 'jne').toLowerCase();
const COUNT = Math.min(Math.max(parseInt(process.argv[3] || '1', 10) || 1, 1), 5);
const ORIGIN_POSTAL = parseInt(process.env.ORIGIN_POSTAL_CODE || '15223', 10);
const DEST_POSTAL = parseInt(process.env.TEST_DEST_POSTAL_CODE || '12950', 10); // Jakarta Selatan (contoh dari docs Biteship)
const API = 'https://api.biteship.com';

if (!KEY || !KEY.startsWith('biteship_test.')) {
    console.error('BITESHIP_TEST_KEY belum diisi, atau bukan key sandbox (harus diawali "biteship_test.").');
    console.error('Ambil di Dashboard Biteship > Pengaturan > API (label Development). Jangan pakai key production.');
    process.exit(1);
}

async function call(method, path, body) {
    const res = await fetch(API + path, {
        method,
        headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined
    });
    let data = null; try { data = await res.json(); } catch (e) {}
    return { status: res.status, data };
}

const items = [{ name: 'Al Quran Tes', description: 'Test order aktivasi API', category: 'others', value: 100000, quantity: 1, weight: 500, height: 5, length: 20, width: 15 }];

// 1) Cari jenis layanan (courier_type) yang valid untuk kurir ini lewat Rates API
const rates = await call('POST', '/v1/rates/couriers', {
    origin_postal_code: ORIGIN_POSTAL, destination_postal_code: DEST_POSTAL,
    couriers: COMPANY, items: items.map(i => ({ name: i.name, value: i.value, weight: i.weight, quantity: i.quantity }))
});
const pricing = (rates.data && rates.data.pricing) || [];
if (rates.status !== 200 || !pricing.length) {
    console.error(`Rates untuk "${COMPANY}" gagal atau kosong (HTTP ${rates.status}):`, JSON.stringify(rates.data).slice(0, 300));
    process.exit(1);
}
const picked = pricing[0];
const type = picked.courier_service_code || picked.type;
console.log(`Kurir: ${COMPANY} | layanan dipakai: ${type} (${picked.courier_service_name || '-'}) | tersedia: ${pricing.map(p => p.courier_service_code).join(', ')}\n`);

// 2) Buat test order
const stamp = Date.now();
for (let n = 1; n <= COUNT; n++) {
    const order = {
        shipper_contact_name: 'Hamzah Quran', shipper_contact_phone: '085155060816', shipper_organization: 'Hamzah Quran',
        origin_contact_name: 'Hamzah Quran', origin_contact_phone: '085155060816',
        origin_address: 'Jl. Murjaya Rt 04/05, Jurangmangu Barat, Pondok Aren, Tangerang Selatan',
        origin_postal_code: ORIGIN_POSTAL,
        destination_contact_name: 'Penerima Tes', destination_contact_phone: '081234567890',
        destination_address: 'Jl. RA Kartini, Lebak Bulus, Jakarta Selatan (data tes)',
        destination_postal_code: DEST_POSTAL,
        courier_company: COMPANY, courier_type: type,
        delivery_type: 'now',
        order_note: 'TEST ORDER aktivasi API',
        reference_id: `TEST-${stamp}-${n}`,
        items
    };
    const r = await call('POST', '/v1/orders', order);
    if (r.status >= 200 && r.status < 300 && r.data && r.data.success) {
        console.log(`OK    test order ${n}/${COUNT}: id=${r.data.id} | status=${r.data.status} | resi=${r.data.courier && r.data.courier.waybill_id} | harga=${r.data.price}`);
    } else {
        console.log(`GAGAL test order ${n}/${COUNT} (HTTP ${r.status}):`, JSON.stringify(r.data).slice(0, 400));
    }
}
console.log('\nLangkah berikut: Dashboard Biteship > Pengiriman > cari order bertanda WEBHOOK > Update Status.');
console.log('Order #1: lanjutkan sampai SELESAI (Delivered). Order #2: pilih CANCEL. Salin kedua ID ke formulir aktivasi.');
