import { xenithRequest } from '../_lib/xenith.js';
import { sheets, applyPaid } from '../_lib/orders.js';

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
});

// Dipakai thank-you.html untuk polling status.
// Kalau masih PENDING, tanya langsung ke Xenith (rekonsiliasi), jadi tetap
// benar walau webhook telat atau gagal.
export async function onRequestGet({ request, env }) {
    const orderId = new URL(request.url).searchParams.get('orderId');
    if (!orderId || !/^HQ-\d{10,}$/.test(orderId)) return json({ error: 'orderId tidak valid' }, 400);

    let order;
    try {
        order = (await sheets(env, 'get', { orderId })).order;
    } catch (e) {
        return json({ error: 'Order tidak ditemukan' }, 404);
    }

    let status = order.status;
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
                } else if (r.data.status === 'EXPIRED') {
                    await sheets(env, 'markExpired', { orderId });
                    status = 'EXPIRED';
                }
            }
        } catch (e) {
            console.error('Reconcile error:', e.message);
        }
    }

    // Jangan bocorkan data pelanggan, cuma yang perlu untuk UI.
    return json({
        orderId,
        status,
        total: order.total,
        paymentUrl: status === 'PENDING' ? order.paymentUrl : ''
    });
}
