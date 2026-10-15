import '../catalog.js';

const SITE = 'https://hamzahquran.com';
const DEFAULT_IMAGE = `${SITE}/img/hamzahcolor.png`;

// Crawler / link-preview bots yang butuh meta OG (tidak jalankan JS).
const CRAWLER_RE = /facebookexternalhit|facebookcatalog|Facebot|WhatsApp|Twitterbot|TelegramBot|LinkedInBot|Discordbot|Slackbot|Pinterest|SkypeUriPreview|redditbot|vkShare|embedly|quora link preview|outbrain|Googlebot|bingbot|Applebot|yandex|DuckDuckBot|Slurp|bot|crawler|spider|preview/i;

const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function absImage(img) {
    if (!img) return DEFAULT_IMAGE;
    if (/^https?:\/\//i.test(img)) return img;
    return `${SITE}/${String(img).replace(/^\//, '')}`;
}

function ogPage({ title, desc, image, shareUrl, target }) {
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(target)}">
<meta property="og:type" content="product">
<meta property="og:site_name" content="Hamzah Quran">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(shareUrl)}">
<meta property="og:image" content="${esc(image)}">
<meta property="og:image:secure_url" content="${esc(image)}">
<meta property="og:image:alt" content="${esc(title)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(image)}">
<meta http-equiv="refresh" content="0; url=${esc(target)}">
<script>location.replace(${JSON.stringify(target)});</script>
</head>
<body style="font-family:system-ui,sans-serif;padding:24px">
<p>Mengalihkan ke <a href="${esc(target)}">${esc(title)}</a>...</p>
</body>
</html>`;
}

export async function GET(request) {
    const requestUrl = new URL(request.url);
    const id = parseInt(requestUrl.searchParams.get('id'), 10);
    const products = (globalThis.HQ_CATALOG && globalThis.HQ_CATALOG.GLOBAL_PRODUCTS) || [];
    const product = products.find(p => p.id === id);

    if (!product) {
        return new Response(null, { status: 302, headers: { Location: `${SITE}/shop.html` } });
    }

    const target = `${SITE}/product-detail.html?id=${product.id}`;
    const shareUrl = `${SITE}/p/${product.id}`;
    const ua = request.headers.get('user-agent') || '';

    // Pengunjung manusia langsung dialihkan ke halaman produk.
    if (!CRAWLER_RE.test(ua)) {
        return new Response(null, { status: 302, headers: { Location: target } });
    }

    const title = `${product.name} - Hamzah Quran`;
    const desc = product.desc || `${product.category || 'Al Quran custom'} premium di Hamzah Quran. Gratis ongkir, garansi ganti baru, 100% original.`;
    const image = absImage(product.img);

    return new Response(ogPage({ title, desc, image, shareUrl, target }), {
        status: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=600, s-maxage=600'
        }
    });
}

export async function HEAD(request) {
    const res = await GET(request);
    return new Response(null, { status: res.status, headers: res.headers });
}
