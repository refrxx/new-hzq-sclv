import { verifyWebhook } from '../lib/xenith.js';
import { sheets, applyPaid, notifyTelegram } from '../lib/orders.js';

const ok = () => new Response('ok', { status: 200 });

const env = process.env;

async function handler(request) {
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    // Body HARUS dibaca raw (jangan request.json()) supaya signature cocok.
    const raw = await request.text();

    // Retry Xenith bisa sampai ~17 jam, jadi toleransi timestamp dibuat longgar.
    // Aman karena handler ini idempotent dan nominal dicek lagi di Sheets.
    const tolerance = Number(env.XENITH_WEBHOOK_TOLERANCE_SEC) || 90000;
    const valid = await verifyWebhook(request, raw, env.XENITH_WEBHOOK_SECRET, tolerance);
    if (!valid) return new Response('invalid signature', { status: 401 });

    let evt;
    try { evt = JSON.parse(raw); } catch (e) { return ok(); }
    const d = evt && evt.data;
    if (!d || !d.referenceCode) return ok(); // event lain (mis. maintenance), abaikan

    try {
        if (d.status === 'COMPLETED') {
            await applyPaid(env, {
                orderId: d.referenceCode,
                paymentAmount: Number(d.paymentAmount) || 0,
                xenithId: d.id
            });
        } else if (d.status === 'EXPIRED' || d.status === 'INACTIVE') {
            await sheets(env, 'markExpired', { orderId: d.referenceCode });
        }
    } catch (e) {
        // Xenith berhenti retry begitu kita merespon, jadi jangan diam-diam gagal:
        // kabari Telegram supaya dicek manual. xenith-status juga bisa rekonsiliasi.
        console.error('Webhook handling error:', e.message);
        await notifyTelegram(env,
            `⚠️ WEBHOOK XENITH GAGAL DIPROSES\nOrder: ${d.referenceCode}\nStatus: ${d.status}\nError: ${e.message}`);
    }
    return ok();
}

export { handler as POST };
