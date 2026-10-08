const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

const UPSTREAM_BASE = 'https://carikodepos.id/api';

// Allowlist supaya endpoint ini tidak jadi open proxy.
const ALLOWED_ENDPOINTS = ['provinces', 'cities', 'districts', 'villages', 'postal-codes'];

const ALLOWED_PARAMS = {
    limit: 'number',
    page: 'number',
    search: 'string',
    provinceId: 'string',
    cityId: 'string',
    districtId: 'string',
    villageId: 'string',
    latitude: 'string',
    longitude: 'string',
    radius: 'string',
    excludeVillageId: 'string',
    period: 'string',
};

async function handler(request) {
    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'GET') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }

    const url = new URL(request.url);
    const endpoint = url.searchParams.get('endpoint') || '';

    if (!ALLOWED_ENDPOINTS.includes(endpoint)) {
        return new Response(JSON.stringify({ error: 'Unknown endpoint' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }

    const qs = new URLSearchParams();

    for (const [name, type] of Object.entries(ALLOWED_PARAMS)) {
        const raw = url.searchParams.get(name);
        if (raw === null || raw === '') continue;

        if (type === 'number') {
            const n = Number(raw);
            if (!Number.isFinite(n) || n <= 0) continue;
            qs.set(name, String(Math.floor(n)));
        } else {
            qs.set(name, raw.slice(0, 100));
        }
    }

    const target = `${UPSTREAM_BASE}/${endpoint}${qs.toString() ? `?${qs}` : ''}`;

    try {
        const res = await fetch(target, {
            headers: { 'Accept': 'application/json' },
        });

        const body = await res.text();

        return new Response(body, {
            status: res.status,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=600',
                ...corsHeaders,
            },
        });
    } catch (err) {
        console.error('Wilayah proxy exception:', err.message);
        return new Response(JSON.stringify({ error: err.message }), { status: 502, headers: { 'Content-Type': 'application/json', ...corsHeaders } });
    }
}

export { handler as GET, handler as OPTIONS };