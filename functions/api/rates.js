export async function onRequest(context) {
    const { request, env } = context;
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    try {
        const { destination_area_id, items } = await request.json();

        if (!destination_area_id || !items || !items.length) {
            return new Response(JSON.stringify({ error: 'Missing destination_area_id or items' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        const body = {
            origin_postal_code: env.ORIGIN_POSTAL_CODE || '53147',
            destination_area_id,
            courier: 'jne,sicepat,jnt,anteraja',
            items: items.map(i => ({
                name: i.name,
                value: i.value,
                weight: i.weight,
                quantity: i.quantity
            }))
        };

        const res = await fetch('https://api.biteship.com/v1/rates/couriers', {
            method: 'POST',
            headers: {
                'Authorization': env.BITESHIP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
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
