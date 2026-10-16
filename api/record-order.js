import { sheets } from '../lib/orders.js';
import { generateOrderId } from '../lib/order-id.js';

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' }
});

const toInt = v => Math.round(Number(v)) || 0;

const env = process.env;

// Rekam order NON-Xenith (mis. COD) ke Google Sheets supaya punya baris
// untuk pengisian nomor resi manual oleh admin.
// Order Xenith TIDAK lewat sini (sudah direkam oleh xenith-create).
async function handler(request) {
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

    let b;
    try { b = await request.json(); } catch (e) { return json({ error: 'Body tidak valid' }, 400); }

    const name = String(b.name || '').trim();
    const phoneRaw = String(b.phone || '').replace(/[^\d+]/g, '');
    const address = String(b.address || '').trim();
    const region = String(b.region || '').trim();
    const courier = String(b.courier || '').trim();
    const items = Array.isArray(b.items) ? b.items : [];
    if (!name || !phoneRaw || !address || !items.length) {
        return json({ error: 'Data order belum lengkap' }, 400);
    }

    const orderId = /^HQ-(\d{8}[A-Z0-9]{6}|\d{10,})$/.test(String(b.orderId || ''))
        ? String(b.orderId)
        : generateOrderId();

    // Sanity check angka (harga masih dari browser; ini pagar dasar saja).
    const subtotal = toInt(b.subtotal);
    const ongkir = toInt(b.ongkir);
    const voucher = toInt(b.voucher);
    const codFee = toInt(b.codFee);
    const total = toInt(b.grandTotal);
    const itemsSum = items.reduce((s, i) => s + toInt(i.price) * toInt(i.qty), 0);
    const MAX = Number(env.XENITH_MAX_AMOUNT) || 20000000;
    if (total <= 0 || total > MAX || itemsSum !== subtotal || subtotal + ongkir + codFee - voucher !== total) {
        return json({ error: 'Data order tidak valid' }, 400);
    }

    const phone = phoneRaw.replace(/^\+?62/, '0');
    const totalQty = items.reduce((s, i) => s + toInt(i.qty), 0);
    const produk = items.map(i =>
        `${i.name}${i.variant ? ` (${i.variant})` : ''}${i.note ? ` [${i.note}]` : ''} x${toInt(i.qty)}`
    ).join('; ');

    const noteObj = { created_at: new Date().toISOString(), type: 'cod' };
    if (courier) noteObj.courier = courier;

    try {
        await sheets(env, 'create', {
            orderId, name, phone,
            address: region ? `${address}, ${region}` : address,
            produk, qty: totalQty, total,
            note: JSON.stringify(noteObj)
        });
    } catch (e) {
        console.error('record-order sheets error:', e.message);
        return json({ error: 'Gagal menyimpan order' }, 502);
    }

    return json({ success: true, orderId });
}

export { handler as POST };
