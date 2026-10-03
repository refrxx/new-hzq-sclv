// Helper Xenith: signing request, kirim request, verifikasi webhook.
// Pakai Web Crypto (jalan di Cloudflare Pages Functions, tanpa library).

const enc = new TextEncoder();

export async function hmacBase64(secret, message) {
    const key = await crypto.subtle.importKey(
        'raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
    );
    const sig = await crypto.subtle.sign('HMAC', key, enc.encode(message));
    let bin = '';
    new Uint8Array(sig).forEach(b => { bin += String.fromCharCode(b); });
    return btoa(bin);
}

export function safeEqual(a, b) {
    const x = enc.encode(String(a));
    const y = enc.encode(String(b));
    if (x.length !== y.length) return false;
    let diff = 0;
    for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
    return diff === 0;
}

export function xenithBaseUrl(env) {
    return (env.XENITH_BASE_URL || 'https://openapi.sandbox.xenithpay.com').replace(/\/$/, '');
}

// REQUEST ke Xenith.
// Signature payload: METHOD \n URI \n TIMESTAMP \n BODY  (\n = newline ASLI)
// HMAC-SHA256 pakai Secret Key, hasil di-base64.
export async function xenithRequest(env, method, path, body) {
    if (!env.XENITH_API_KEY || !env.XENITH_SECRET_KEY) {
        throw new Error('Xenith belum dikonfigurasi (XENITH_API_KEY / XENITH_SECRET_KEY)');
    }
    const timestamp = new Date().toISOString();
    const bodyStr = body ? JSON.stringify(body) : '';
    const payload = `${method}\n${path}\n${timestamp}\n${bodyStr}`;
    const signature = await hmacBase64(env.XENITH_SECRET_KEY, payload);

    const headers = {
        'Content-Type': 'application/json',
        'Xenith-Api-Key': env.XENITH_API_KEY,
        'Xenith-Request-Signature': signature,
        'Xenith-Request-Timestamp': timestamp
    };
    if (method === 'POST') headers['X-Idempotency-Key'] = crypto.randomUUID();

    const res = await fetch(xenithBaseUrl(env) + path, {
        method,
        headers,
        body: bodyStr || undefined // body yang dikirim HARUS string yang sama dengan yang di-sign
    });
    let data = null;
    try { data = await res.json(); } catch (e) { /* non-JSON */ }
    return { ok: res.ok, status: res.status, data };
}

// WEBHOOK dari Xenith.
// Signature string: POST \n PATH \n RAW_BODY \n TIMESTAMP
// PENTING: di webhook, "\n" = 2 karakter literal (backslash + n), BUKAN newline.
// Body harus raw persis seperti diterima, jangan parse lalu stringify ulang.
export async function verifyWebhook(request, rawBody, secret, toleranceSec) {
    const ts = request.headers.get('X-Xenith-Timestamp') || '';
    const sig = request.headers.get('X-Xenith-Signature') || '';
    if (!ts || !sig || !secret) return false;

    // Timestamp Xenith punya presisi nanodetik; Date.parse aman di 3 digit.
    const t = Date.parse(ts.replace(/(\.\d{3})\d+/, '$1'));
    if (!Number.isFinite(t) || Math.abs(Date.now() - t) > toleranceSec * 1000) return false;

    const path = new URL(request.url).pathname;
    const expected = await hmacBase64(secret, `POST\\n${path}\\n${rawBody}\\n${ts}`);
    return safeEqual(expected, sig);
}
