// Simulasi pembayaran di SANDBOX Xenith (tanpa bayar beneran).
//
// Pakai (Node 18+):
//   XENITH_API_KEY=... XENITH_SECRET_KEY=... node scripts/xenith-simulate.mjs <plr-id> [SUCCESS|FAILED|EXPIRED]
//
// <plr-id> ada di kolom xenith_ref (sheet) untuk order yang dibuat lewat checkout.
// SYARAT: di halaman bayar Xenith (paymentLinkUrl), pilih channel + "Continue to Payment"
// dulu supaya terbentuk Pay In. Baru jalankan script ini.

const BASE = process.env.XENITH_BASE_URL || 'https://openapi.sandbox.xenithpay.com';
const API_KEY = process.env.XENITH_API_KEY;
const SECRET = process.env.XENITH_SECRET_KEY;
const [linkId, outcome = 'SUCCESS'] = process.argv.slice(2);

if (!API_KEY || !SECRET || !linkId) {
    console.error('Usage: XENITH_API_KEY=.. XENITH_SECRET_KEY=.. node scripts/xenith-simulate.mjs <plr-id> [SUCCESS|FAILED|EXPIRED]');
    process.exit(1);
}
if (BASE.includes('openapi.xenithpay.com')) {
    console.error('Ditolak: script ini hanya untuk sandbox.');
    process.exit(1);
}

async function call(method, path, body) {
    const ts = new Date().toISOString();
    const bodyStr = body ? JSON.stringify(body) : '';
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sig = Buffer.from(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${method}\n${path}\n${ts}\n${bodyStr}`))).toString('base64');
    const res = await fetch(BASE + path, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Xenith-Api-Key': API_KEY,
            'Xenith-Request-Signature': sig,
            'Xenith-Request-Timestamp': ts
        },
        body: bodyStr || undefined
    });
    let data = null; try { data = await res.json(); } catch (e) {}
    return { status: res.status, data };
}

const detail = await call('GET', `/v1/payment-links/${linkId}`);
console.log('Payment link:', detail.status, JSON.stringify(detail.data));
if (detail.status !== 200) process.exit(1);

const payins = (detail.data.payinIds || []).filter(p => p && p.id);
if (!payins.length) {
    console.error('\nBelum ada Pay In. Buka paymentLinkUrl, pilih channel, klik Continue to Payment, lalu ulangi.');
    process.exit(1);
}
const target = payins[payins.length - 1]; // pay in terbaru
console.log(`\nSimulasi ${outcome} untuk ${target.id} (channel ${target.paymentChannel || '-'})`);
const sim = await call('POST', '/v1/simulator/transaction', {
    transactionId: target.id,
    transactionCategory: 'payins',
    transactionStatus: outcome
});
console.log('Hasil:', sim.status, JSON.stringify(sim.data));
console.log('\nWebhook seharusnya masuk beberapa detik lagi. Cek sheet + Telegram.');
