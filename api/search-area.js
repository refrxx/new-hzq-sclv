const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const env = process.env;

export default async function handler(request) {
    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'GET') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }

    try {
        const url = new URL(request.url);
        const input = url.searchParams.get('input') || '';
        if (!input) {
            return new Response(JSON.stringify({ error: 'Missing input query param' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
        }

        const apiUrl = `https://api.biteship.com/v1/maps/areas?input=${encodeURIComponent(input)}&type=single&limit=3`;
        const res = await fetch(apiUrl, {
            headers: { 'Authorization': env.BITESHIP_API_KEY }
        });
        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }
}
