// Helper order: Google Sheets (via Apps Script) + notifikasi Telegram.

export async function sheets(env, action, data = {}) {
    if (!env.XENITH_SHEETS_URL) throw new Error('XENITH_SHEETS_URL belum diset');
    const res = await fetch(env.XENITH_SHEETS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: env.XENITH_SHEETS_TOKEN, action, ...data }),
        redirect: 'follow'
    });
    const text = await res.text();
    let json;
    try { json = JSON.parse(text); } catch (e) {
        throw new Error('Respon Sheets bukan JSON: ' + text.slice(0, 120));
    }
    if (!json.ok) throw new Error(json.error || 'Sheets error');
    return json;
}

export async function notifyTelegram(env, text) {
    const token = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return;
    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }) // plain text, aman dari karakter Markdown
        });
    } catch (e) {
        console.error('Telegram error:', e.message);
    }
}

const rp = n => 'Rp' + Number(n).toLocaleString('id-ID');

// Tandai order lunas. Idempotent: Telegram cuma dikirim sekali (newlyPaid).
export async function applyPaid(env, { orderId, paymentAmount, xenithId }) {
    const r = await sheets(env, 'markPaid', { orderId, paymentAmount, xenithRef: xenithId });
    if (r.newlyPaid) {
        await notifyTelegram(env,
            `✅ PEMBAYARAN DITERIMA\nOrder: ${orderId}\nNama: ${r.name || '-'}\nTotal: ${rp(r.total)}\nDibayar: ${rp(paymentAmount)}\nVia: Xenith`);
    } else if (r.mismatch) {
        await notifyTelegram(env,
            `⚠️ NOMINAL TIDAK SESUAI\nOrder: ${orderId}\nTotal order: ${rp(r.total)}\nDibayar: ${rp(paymentAmount)}\nCek manual di dashboard Xenith.`);
    }
    return r;
}
