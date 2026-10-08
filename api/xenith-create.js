import { xenithRequest } from '../lib/xenith.js';
import { sheets } from '../lib/orders.js';

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' }
});

const toInt = v => Math.round(Number(v)) || 0;

const env = process.env;

async function handler(request) {
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

    let b;
    try { b = await request.json(); } catch (e) { return json({ error: 'Body tidak valid' }, 400); }

    const name = String(b.name || '').trim();
    const phoneRaw = String(b.phone || '').replace(/[^\d+]/g, '');
    const address = String(b.address || '').trim();
    const region = String(b.region || '').trim();
    const items = Array.isArray(b.items) ? b.items : [];
    if (!name || !phoneRaw || !address || !items.length) {
        return json({ error: 'Data order belum lengkap' }, 400);
    }

    // Sanity check angka. CATATAN: harga masih dikirim dari browser,
    // ini cuma pagar dasar, bukan pengganti harga server-side.
    const subtotal = toInt(b.subtotal);
    const ongkir = toInt(b.ongkir);
    const voucher = toInt(b.voucher);
    const total = toInt(b.grandTotal);
    const itemsSum = items.reduce((s, i) => s + toInt(i.price) * toInt(i.qty), 0);
    const MAX = Number(env.XENITH_MAX_AMOUNT) || 20000000;
    if (total <= 0 || total > MAX || itemsSum !== subtotal || subtotal + ongkir - voucher !== total) {
        return json({ error: 'Data order tidak valid' }, 400);
    }

    // Normalisasi nomor: +62/62 -> 0
    const phone = phoneRaw.replace(/^\+?62/, '0');
    const orderId = 'HQ-' + Date.now();
    const origin = (env.SITE_URL || new URL(request.url).origin).replace(/\/$/, '');
    const totalQty = items.reduce((s, i) => s + toInt(i.qty), 0);
    const produk = items.map(i =>
        `${i.name}${i.variant ? ` (${i.variant})` : ''}${i.note ? ` [${i.note}]` : ''} x${toInt(i.qty)}`
    ).join('; ');

    // 1) Catat order PENDING dulu, supaya webhook selalu ketemu barisnya.
    try {
        const createdAt = new Date().toISOString();
        const noteObj = { created_at: createdAt };
        if (b.courier) noteObj.courier = String(b.courier);
        await sheets(env, 'create', {
            orderId, name, phone,
            address: region ? `${address}, ${region}` : address,
            produk, qty: totalQty, total,
            note: JSON.stringify(noteObj)
        });
    } catch (e) {
        console.error('Sheets create error:', e.message);
        return json({ error: 'Gagal menyimpan order' }, 502);
    }

    // 2) Bikin Payment Link di Xenith.
    let xr;
    try {
        xr = await xenithRequest(env, 'POST', '/v1/payment-links', {
            amount: total,
            currency: 'IDR',
            redirectUrl: `${origin}/thank-you.html?order=${orderId}`,
            paymentLinkCallbackUrl: `${origin}/api/xenith-webhook`,
            customerReference: phone,
            customerName: name.length < 5 ? `${name} (HQ)` : name, // IDR: min 5 karakter
            customerPhoneNumber: phone,
            referenceCode: orderId
        });
        // try to set expiry explicitly if supported? xenith docs mention max 24h
        // can't guarantee, but we track 24h on our side; ignore unknown fields safely
    } catch (e) {
        console.error('Xenith create exception:', e.message);
        await sheets(env, 'markFailed', { orderId, note: e.message }).catch(() => {});
        return json({ error: 'Gagal membuat pembayaran' }, 502);
    }

    if (!xr.ok || !xr.data || !xr.data.paymentLinkUrl) {
        console.error('Xenith create error:', xr.status, JSON.stringify(xr.data));
        await sheets(env, 'markFailed', {
            orderId, note: `Xenith ${xr.status} ${xr.data && xr.data.code || ''}`
        }).catch(() => {});
        return json({ error: 'Gagal membuat pembayaran', code: xr.data && xr.data.code }, 502);
    }

    // 3) Simpan referensi Xenith (best effort; webhook cocok lewat referenceCode = orderId).
    await sheets(env, 'setRef', {
        orderId, xenithRef: xr.data.id, paymentUrl: xr.data.paymentLinkUrl
    }).catch(e => console.error('Sheets setRef error:', e.message));

    return json({
        success: true,
        orderId,
        paymentLinkUrl: xr.data.paymentLinkUrl,
        expiredTime: xr.data.expiredTime || null
    });
}

export { handler as POST };
