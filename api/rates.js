const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const env = process.env;

async function handler(request) {
    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }

    try {
        const { destination_postal_code, items } = await request.json();

        if (!destination_postal_code || !items || !items.length) {
            return new Response(JSON.stringify({ error: 'Missing destination_postal_code or items' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
        }

        const body = {
            origin_postal_code: parseInt(env.ORIGIN_POSTAL_CODE) || 15223,
            destination_postal_code: parseInt(destination_postal_code),
            couriers: 'jne,lion',
            items: items.map(i => ({
                name: i.name,
                description: 'Produk Hamzah Quran',
                value: i.value,
                weight: i.weight,
                quantity: i.quantity,
                length: 21,
                width: 15,
                height: 3
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

        if (!res.ok) {
            console.error('Biteship rates error:', JSON.stringify(data));
        }

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    } catch (err) {
        console.error('Biteship rates exception:', err.message);
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }
}

export { handler as POST, handler as OPTIONS };
