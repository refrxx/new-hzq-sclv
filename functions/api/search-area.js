export async function onRequest(context) {
    const { request, env } = context;
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    try {
        const { name, district, city, province } = await request.json();
        const keyword = [name, district, city, province].filter(Boolean).join(', ');
        if (!keyword) {
            return new Response(JSON.stringify({ error: 'Missing location name' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const url = `https://api.biteship.com/v1/maps/areas?input=${encodeURIComponent(keyword)}&type=single&limit=3`;
        const res = await fetch(url, {
            headers: { 'Authorization': env.BITESHIP_API_KEY }
        });
        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
