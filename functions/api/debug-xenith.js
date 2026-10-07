// SEMENTARA: kirim 1 request persis seperti checkout dari Cloudflare ke Xenith SANDBOX,
// lalu tampilkan request yang dikirim (signature & key disamarkan) dan respon Xenith.
// Dikunci pakai DEBUG_KEY (isi di env tab Preview). HAPUS file ini setelah selesai.
// Membuat 1 payment link tes di sandbox. Tidak menyentuh Google Sheets.
import { hmacBase64, xenithBaseUrl } from '../_lib/xenith.js';

const mask = (v, n) => String(v || '').slice(0, n) + '…(disamarkan)';

export async function onRequestGet({ request, env }) {
    const url = new URL(request.url);
    if (!env.DEBUG_KEY || url.searchParams.get('key') !== env.DEBUG_KEY) {
        return new Response('forbidden', { status: 403 });
    }
    const base = xenithBaseUrl(env);
    if (base.includes('openapi.xenithpay.com')) {
        return new Response('hanya untuk sandbox', { status: 400 });
    }
    if (!env.XENITH_API_KEY || !env.XENITH_SECRET_KEY) {
        return new Response('XENITH_API_KEY / XENITH_SECRET_KEY belum diset', { status: 500 });
    }

    const origin = (env.SITE_URL || url.origin).replace(/\/$/, '');
    const orderId = 'HQ-' + Date.now();
    const path = '/v1/payment-links';
    const body = {
        amount: 60000,
        currency: 'IDR',
        redirectUrl: `${origin}/thank-you.html?order=${orderId}`,
        paymentLinkCallbackUrl: `${origin}/api/xenith-webhook`,
        customerReference: '081234567890',
        customerName: 'Tes Sandbox',
        customerPhoneNumber: '081234567890',
        referenceCode: orderId
    };
    const bodyStr = JSON.stringify(body);
    const timestamp = new Date().toISOString();
    const signature = await hmacBase64(env.XENITH_SECRET_KEY, `POST\n${path}\n${timestamp}\n${bodyStr}`);
    const headers = {
        'Content-Type': 'application/json',
        'Xenith-Api-Key': env.XENITH_API_KEY,
        'Xenith-Request-Signature': signature,
        'Xenith-Request-Timestamp': timestamp,
        'X-Idempotency-Key': crypto.randomUUID()
    };

    let status = null, respHeaders = {}, respBody = null, fetchError = null;
    try {
        const res = await fetch(base + path, { method: 'POST', headers, body: bodyStr });
        status = res.status;
        res.headers.forEach((v, k) => { if (k.toLowerCase() !== 'set-cookie') respHeaders[k] = v; });
        respBody = await res.text();
    } catch (e) { fetchError = e.message; }

    let egressIp = null;
    try { egressIp = (await (await fetch('https://api64.ipify.org?format=json')).json()).ip; }
    catch (e) { egressIp = 'error: ' + e.message; }

    const out = {
        sent_at_utc: timestamp,
        egress_ip_seen_by_ipify: egressIp,
        request: {
            method: 'POST',
            url: base + path,
            headers: {
                ...headers,
                'Xenith-Api-Key': mask(headers['Xenith-Api-Key'], 4),
                'Xenith-Request-Signature': mask(signature, 8)
            },
            body
        },
        response: { status, headers: respHeaders, body: respBody, fetchError },
        note: 'Header tambahan yang ditempel Cloudflare otomatis tidak terlihat dari dalam function.'
    };
    return new Response(JSON.stringify(out, null, 2), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
    });
}
