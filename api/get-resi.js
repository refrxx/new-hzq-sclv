import { sheets } from '../lib/orders.js';

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
});

const env = process.env;

// Dipakai pesanan-saya.html untuk mengambil nomor resi milik sebuah order.
// Resi diisi manual oleh admin di kolom "resi" pada Google Sheet.
// Endpoint terpisah dari xenith-status supaya tidak kena efek samping
// auto-Abandoned (yang tidak cocok untuk order COD).
async function handler(request) {
    if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);

    const orderId = new URL(request.url).searchParams.get('orderId');
    if (!orderId || !/^HQ-(\d{8}[A-Z0-9]{6}|\d{10,})$/.test(orderId)) {
        return json({ error: 'orderId tidak valid' }, 400);
    }

    let order;
    try {
        order = (await sheets(env, 'get', { orderId })).order;
    } catch (e) {
        return json({ error: 'Order tidak ditemukan' }, 404);
    }

    let courier = '';
    try {
        if (order.note) courier = JSON.parse(order.note).courier || '';
    } catch (e) {}

    return json({
        orderId,
        resi: order.resi || '',
        courier,
        status: order.status || ''
    });
}

export { handler as GET };
