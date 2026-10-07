const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const env = process.env;

export default async function handler(request) {
    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
    }

    const APPS_SCRIPT_URL = env.APPS_SCRIPT_URL;

    if (request.method === 'POST') {
        try {
            const body = await request.json();
            const res = await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            return new Response(JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
        } catch (err) {
            return new Response(JSON.stringify({ success: false, error: err.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
        }
    }

    if (request.method === 'GET') {
        try {
            const url = new URL(request.url);
            const orderId = url.searchParams.get('orderId');
            if (!orderId) {
                return new Response(JSON.stringify({ success: false, error: 'Missing orderId' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json', ...corsHeaders }
                });
            }
            const res = await fetch(`${APPS_SCRIPT_URL}?orderId=${encodeURIComponent(orderId)}`);
            const data = await res.json();
            return new Response(JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
        } catch (err) {
            return new Response(JSON.stringify({ success: false, error: err.message }), {
                status: 500,
                headers: { 'Content-Type': 'application/json', ...corsHeaders }
            });
        }
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
}
