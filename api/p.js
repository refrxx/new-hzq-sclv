// /p/<id> — halaman share produk: HTML kecil dengan Open Graph/Twitter khusus produk.
// Crawler (WhatsApp/FB/Threads) tidak menjalankan JS, jadi meta harus dari server.
// Manusia dialihkan ke halaman detail lewat JavaScript (bukan redirect HTTP).
import '../catalog.js';
import crypto from 'node:crypto';

const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const rp = n => 'Rp' + n.toLocaleString('id-ID');

function hashOf(product, price) {
    const social = (globalThis.HQ_CATALOG.PRODUCT_SOCIAL_PROOF || {})[product.id] || {};
    const seed = [product.name, price.low, price.high, social.rating || '', social.sold || ''].join('|');
    return crypto.createHash('sha1').update(seed).digest('hex').slice(0, 8);
}

function page({ title, description, shareUrl, image, target }) {
    const t = esc(title), d = esc(description), u = esc(shareUrl), i = esc(image), g = esc(target);
    return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t}</title>
<meta name="description" content="${d}">
<meta name="robots" content="noindex">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Hamzah Quran">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${d}">
<meta property="og:url" content="${u}">
<meta property="og:image" content="${i}">
<meta property="og:image:secure_url" content="${i}">
<meta property="og:image:width" content="1080">
<meta property="og:image:height" content="1350">
<meta property="og:image:type" content="image/jpeg">
<meta property="og:image:alt" content="${t}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${t}">
<meta name="twitter:description" content="${d}">
<meta name="twitter:image" content="${i}">
<link rel="canonical" href="${u}">
</head>
<body style="font-family:system-ui,sans-serif;padding:24px">
<p>Mengalihkan ke <a href="${g}">${t}</a>...</p>
<noscript><p>Buka <a href="${g}">halaman produk</a>.</p></noscript>
<script>location.replace(${JSON.stringify(target)});</script>
</body>
</html>`;
}

async function handler(request) {
    const url = new URL(request.url);
    const raw = url.searchParams.get('id');
    const host = (process.env.SITE_URL || url.origin).replace(/\/$/, '');

    const valid = raw != null && /^\d+$/.test(raw);
    const product = valid
        ? (globalThis.HQ_CATALOG.GLOBAL_PRODUCTS || []).find(p => p.id === Number(raw))
        : null;

    if (!product) {
        return new Response(null, { status: 302, headers: { Location: '/shop.html' } });
    }

    const price = globalThis.HQ_CATALOG.computeDetailPricing(product);
    const shareUrl = `${host}/p/${product.id}`;
    const image = `${host}/api/og?id=${product.id}&v=${hashOf(product, price)}`;
    const target = `/product-detail.html?id=${product.id}`;

    const title = `${product.name} - Hamzah Quran`;
    const priceText = price.isRange ? `Mulai ${rp(price.low)}` : `${rp(price.low)}`;
    const description = `${priceText} setelah voucher XTRA. Bisa COD ke seluruh Indonesia & garansi ganti baru.`;

    return new Response(page({ title, description, shareUrl, image, target }), {
        status: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=300, s-maxage=300',
        },
    });
}

export { handler as GET };
