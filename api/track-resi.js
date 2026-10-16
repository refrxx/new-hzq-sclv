import { sheets } from '../lib/orders.js';

const json = (obj, status = 200) => new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
});

const env = process.env;

// Label status Biteship -> teks Indonesia.
const STATUS_LABEL = {
    confirmed: 'Dikonfirmasi',
    allocated: 'Kurir ditugaskan',
    pickingUp: 'Kurir menjemput paket',
    picked: 'Paket diambil kurir',
    droppingOff: 'Dalam pengiriman',
    returnInTransit: 'Dalam proses pengembalian',
    onHold: 'Paket ditahan',
    delivered: 'Terkirim',
    rejected: 'Ditolak',
    courierNotFound: 'Resi tidak ditemukan di kurir',
    returned: 'Dikembalikan ke pengirim',
    cancelled: 'Dibatalkan',
    disposed: 'Dimusnahkan'
};

// Lacak nomor resi via Biteship Public Tracking:
//   GET /v1/trackings/:waybill_id/couriers/:courier_code   (biaya Rp10/hit)
// Kode kurir diambil dari kolom "note" di Google Sheet, mis. "jne Reguler" -> "jne".
// Kalau resi/kurir belum diisi (atau API gagal) -> { tracked:false }; frontend
// menyediakan link fallback ke cekresi.com.
async function handler(request) {
    if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);

    const orderId = new URL(request.url).searchParams.get('orderId');
    if (!orderId || !/^HQ-(\d{8}[A-Z0-9]{6}|\d{10,})$/.test(orderId)) {
        return json({ error: 'orderId tidak valid' }, 400);
    }

    let order;
    try {
        order = (await sheets(env, 'get', { orderId })).order;
    } catch (e) {
        return json({ tracked: false, error: 'Order tidak ditemukan' }, 404);
    }

    const resi = String(order.resi || '').trim();
    let courier = '';
    try {
        if (order.note) courier = JSON.parse(order.note).courier || '';
    } catch (e) {}
    const kurir = String(courier).trim().split(/\s+/)[0].toLowerCase();

    if (!resi || !kurir) {
        return json({ tracked: false, resi, kurir, reason: !resi ? 'no-resi' : 'no-courier' });
    }

    try {
        const res = await fetch(
            `https://api.biteship.com/v1/trackings/${encodeURIComponent(resi)}/couriers/${encodeURIComponent(kurir)}`,
            { headers: { 'Authorization': env.BITESHIP_API_KEY } }
        );
        const data = await res.json().catch(() => null);

        if (!res.ok || !data || data.success === false) {
            console.error('Biteship tracking error:', res.status, JSON.stringify(data).slice(0, 200));
            return json({ tracked: false, resi, kurir, reason: 'api-error' });
        }

        const history = Array.isArray(data.history) ? data.history.map(h => ({
            note: h.note || '',
            status: h.status || '',
            statusLabel: STATUS_LABEL[h.status] || h.status || '',
            updated_at: h.updated_at || ''
        })) : [];

        return json({
            tracked: true,
            resi,
            kurir,
            waybill: data.waybill_id || resi,
            courier: (data.courier && data.courier.company) || kurir,
            status: data.status || '',
            statusLabel: STATUS_LABEL[data.status] || data.status || '',
            history,
            link: data.link || ''
        });
    } catch (err) {
        console.error('Biteship tracking exception:', err.message);
        return json({ tracked: false, resi, kurir, reason: 'exception' });
    }
}

export { handler as GET };
