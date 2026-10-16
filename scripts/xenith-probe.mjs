// Cari penyebab SERVER_ERROR (500) saat bikin Payment Link di SANDBOX.
// Menembak Xenith langsung dengan beberapa variasi payload dan mencetak hasilnya.
//
// Pakai (Node 20.6+), dari folder project:
//   node --env-file=.env scripts/xenith-probe.mjs https://test.newhamzah.pages.dev
//
// Argumen 1 = alamat situs yang pasti hidup (dipakai untuk redirect/callback).
// Butuh di .env: XENITH_API_KEY, XENITH_SECRET_KEY, XENITH_BASE_URL (sandbox).
// Setiap variasi membuat 1 payment link tes di sandbox (aman, tidak ada uang).

const BASE = (process.env.XENITH_BASE_URL || 'https://openapi.sandbox.xenithpay.com').replace(/\/$/, '');
const API_KEY = process.env.XENITH_API_KEY;
const SECRET = process.env.XENITH_SECRET_KEY;
const SITE = (process.argv[2] || 'https://test.newhamzah.pages.dev').replace(/\/$/, '');

if (!API_KEY || !SECRET) { console.error('XENITH_API_KEY / XENITH_SECRET_KEY belum ada di environment.'); process.exit(1); }
if (BASE.includes('openapi.xenithpay.com')) { console.error('Ditolak: script ini hanya untuk sandbox.'); process.exit(1); }

async function post(path, body) {
    const ts = new Date().toISOString();
    const bodyStr = JSON.stringify(body);
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sig = Buffer.from(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`POST\n${path}\n${ts}\n${bodyStr}`))).toString('base64');
    const res = await fetch(BASE + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Xenith-Api-Key': API_KEY,
            'Xenith-Request-Signature': sig,
            'Xenith-Request-Timestamp': ts,
            'X-Idempotency-Key': crypto.randomUUID()
        },
        body: bodyStr
    });
    let data = null; try { data = await res.json(); } catch (e) {}
    return { status: res.status, data };
}

const stamp = Date.now();
const wib = new Date(stamp + 7 * 3600 * 1000);
const sampleOrderId = `HQ-${wib.getUTCFullYear()}${String(wib.getUTCMonth() + 1).padStart(2, '0')}${String(wib.getUTCDate()).padStart(2, '0')}${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
const ref = n => `PROBE-${stamp}-${n}`;
const base = n => ({
    amount: 10000, currency: 'IDR',
    redirectUrl: 'https://example.com/',
    customerReference: 'probe-customer', customerName: 'Tes Probe',
    referenceCode: ref(n)
});

const variants = [
    ['A. Minimal (cuma field wajib)', base('A')],
    ['B. A + paymentLinkCallbackUrl', { ...base('B'), paymentLinkCallbackUrl: `${SITE}/api/xenith-webhook` }],
    ['C. A + redirectUrl ke thank-you (pakai query ?order=)', { ...base('C'), redirectUrl: `${SITE}/thank-you.html?order=${sampleOrderId}` }],
    ['D. A + customerPhoneNumber', { ...base('D'), customerPhoneNumber: '081234567890' }],
    ['E. Persis seperti checkout (semua field)', {
        amount: 60000, currency: 'IDR',
        redirectUrl: `${SITE}/thank-you.html?order=${sampleOrderId}`,
        paymentLinkCallbackUrl: `${SITE}/api/xenith-webhook`,
        customerReference: '081234567890', customerName: 'Tes Sandbox',
        customerPhoneNumber: '081234567890', referenceCode: sampleOrderId
    }]
];

console.log(`Base: ${BASE}\nSite: ${SITE}\n`);
for (const [label, body] of variants) {
    const r = await post('/v1/payment-links', body);
    const ok = r.status === 201 || r.status === 200;
    console.log(`${ok ? 'OK   ' : 'GAGAL'} [${r.status}] ${label}`);
    if (!ok) console.log('       ->', JSON.stringify(r.data));
    else if (r.data) console.log(`       id: ${r.data.id}  |  url: ${r.data.paymentLinkUrl || '-'}`);
}
console.log('\nBaca dari atas: variasi PERTAMA yang GAGAL menunjuk field penyebabnya.');
