import { xenithRequest } from '../lib/xenith.js';
import { sheets, applyPaid } from '../lib/orders.js';

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
});

// Dipakai thank-you.html untuk polling status.
// Kalau masih PENDING, tanya langsung ke Xenith (rekonsiliasi), jadi tetap
// benar walau webhook telat atau gagal.
const env = process.env;

export default async function handler(request) {
    if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);

    const orderId = new URL(request.url).searchParams.get('orderId');
    if (!orderId || !/^HQ-\d{10,}$/.test(orderId)) return json({ error: 'orderId tidak valid' }, 400);

    let order;
    try {
        order = (await sheets(env, 'get', { orderId })).order;
    } catch (e) {
        return json({ error: 'Order tidak ditemukan' }, 404);
    }

    let status = order.status;
    // Handle 24h abandonment for PENDING orders (auto-mark)
    const ABANDONED_HOURS = 24;
    if (status === 'PENDING') {
        let createdAt = null;
        try {
            if (order.note) {
                const n = JSON.parse(order.note);
                if (n && n.created_at) createdAt = n.created_at;
            }
        } catch (e) {}
        if (!createdAt && order.tanggal) {
            // tanggal could be ISO or date string; try parse
            try { createdAt = new Date(order.tanggal).toISOString(); } catch (e) {}
        }
        if (createdAt) {
            const ageH = (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60);
            if (ageH > ABANDONED_HOURS) {
                try {
                    await sheets(env, 'markAbandoned', { orderId });
                    status = 'Abandoned';
                } catch (e) { console.error('markAbandoned error:', e.message); }
            }
        }
    }
    if (status === 'PENDING' && order.xenithRef) {
        try {
            const r = await xenithRequest(env, 'GET', `/v1/payment-links/${order.xenithRef}`);
            if (r.ok && r.data) {
                if (r.data.status === 'COMPLETED') {
                    await applyPaid(env, {
                        orderId,
                        paymentAmount: Number(r.data.paymentAmount) || 0,
                        xenithId: order.xenithRef
                    });
                    status = (await sheets(env, 'get', { orderId })).order.status;
                } else if (r.data.status === 'EXPIRED' || r.data.status === 'INACTIVE') {
                    try { await sheets(env, 'markExpired', { orderId }); } catch (e) {}
                    status = 'Abandoned';
                }
            }
        } catch (e) {
            console.error('Reconcile error:', e.message);
        }
    }
    // normalize Abandoned casing if any
    if (status === 'abandoned') status = 'Abandoned';

    // Jangan bocorkan data pelanggan, cuma yang perlu untuk UI.
    let paymentUrlOut = '';
    if (status === 'PENDING') paymentUrlOut = order.paymentUrl;
    else if (status === 'Abandoned' || status === 'EXPIRED') paymentUrlOut = '';
    return json({
        orderId,
        status,
        total: order.total,
        paymentUrl: paymentUrlOut
    });
}
