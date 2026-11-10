// /api/og?id=<id> — gambar kartu share produk (1080x1350, JPEG).
// Data: catalog.js (globalThis.HQ_CATALOG) + computeDetailPricing.
// Handler gaya Web Request + named export GET (sama dengan api/*.js lain).
import '../catalog.js';
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const ROOT = process.cwd();
const FONTS_DIR = path.join(ROOT, 'assets', 'fonts');
const LOGO_PATH = process.env.LOGO_PATH || path.join(ROOT, 'img', 'hamzahcolor.png');

const FONT_WEIGHTS = [400, 500, 600, 800];
const fonts = FONT_WEIGHTS.map(w => ({
    name: 'Jakarta',
    weight: w,
    data: fs.readFileSync(path.join(FONTS_DIR, `plus-jakarta-sans-latin-${w}-normal.woff`)),
}));

const BLUE = '#1A5FB4';
const STAR = 'data:image/svg+xml;base64,' + Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fbbf24" d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9z"/></svg>').toString('base64');

const h = (type, style, children) => ({ type, props: { style: { display: 'flex', ...style }, children } });
const img = (src, style) => ({ type: 'img', props: { src, style } });
const uri = (buf, mime = 'image/jpeg') => `data:${mime};base64,${buf.toString('base64')}`;
const rp = n => 'Rp' + n.toLocaleString('id-ID');

function data() {
    const c = globalThis.HQ_CATALOG || {};
    return { products: c.GLOBAL_PRODUCTS || [], proof: c.PRODUCT_SOCIAL_PROOF || {}, pricing: c.computeDetailPricing };
}

async function renderCard(product, link) {
    const { proof, pricing } = data();
    const p = pricing(product);
    const social = proof[product.id] || {};
    const photo = fs.readFileSync(path.join(ROOT, (product.images && product.images[0]) || product.img));
    const bg = await sharp(photo).resize(1080, 940, { fit: 'cover' }).blur(30).jpeg({ quality: 78 }).toBuffer();
    const main = await sharp(photo).resize(940, 940, { fit: 'cover' }).jpeg({ quality: 88 }).toBuffer();

    const LOGO_H = 40;
    const lm = await sharp(LOGO_PATH).metadata();
    const logoW = Math.round(LOGO_H * lm.width / lm.height);
    const logoBuf = await sharp(LOGO_PATH).resize({ height: LOGO_H * 2 }).png().toBuffer();

    const tree = h('div', { width: 1080, height: 1350, background: '#ffffff', fontFamily: 'Jakarta', position: 'relative' }, [
        img(uri(bg), { position: 'absolute', left: 0, top: 0, width: 1080, height: 940 }),
        img(uri(main), { position: 'absolute', left: 70, top: 0, width: 940, height: 940 }),

        // bar harga
        h('div', { position: 'absolute', left: 0, top: 940, width: 1080, height: 124, background: 'linear-gradient(90deg, #e4ecfa 0%, #f2f6fd 100%)', alignItems: 'center', paddingLeft: 56 }, [
            h('div', { alignItems: 'flex-end', color: '#0b0b0b' }, [
                h('div', { fontSize: 40, fontWeight: 600, marginBottom: 8 }, p.isRange ? 'mulai Rp' : 'Rp'),
                h('div', { fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -2, marginLeft: 2 }, p.effLow.toLocaleString('id-ID')),
                (p.crt > p.effLow && !p.isRange) ? h('div', { fontSize: 34, fontWeight: 500, color: '#6b6b6b', textDecoration: 'line-through', marginLeft: 30, marginBottom: 10 }, rp(p.crt)) : null,
            ].filter(Boolean)),
            p.effPct > 0 ? h('div', { position: 'absolute', left: 0, top: 34, width: 1038, justifyContent: 'flex-end' }, [h('div', { background: '#e03a1a', color: '#fff', fontSize: 40, fontWeight: 600, padding: '8px 30px', borderRadius: 999 }, `${p.isRange ? 'hingga ' : ''}-${p.effPct}%`)]) : null,
        ].filter(Boolean)),

        // judul
        h('div', { position: 'absolute', left: 65, top: 1088, width: 950, fontSize: 40, fontWeight: 500, lineHeight: 1.16, color: '#101010', display: 'block', lineClamp: 2, maxHeight: 96, overflow: 'hidden' }, product.name),

        // rating + terjual
        (social.rating || social.sold) ? h('div', { position: 'absolute', left: 65, top: 1198, alignItems: 'center', fontSize: 26, color: '#2b2b2b' }, [
            social.rating ? img(STAR, { width: 30, height: 30 }) : null,
            social.rating ? h('div', { marginLeft: 8, fontWeight: 600 }, String(social.rating)) : null,
            (social.rating && social.sold) ? h('div', { width: 1.5, height: 22, background: '#b9b9b9', margin: '0 22px' }) : null,
            social.sold ? h('div', { fontWeight: 500 }, `${social.sold} terjual`) : null,
        ].filter(Boolean)) : null,

        // garis + footer
        h('div', { position: 'absolute', left: 65, top: 1262, width: 950, height: 2, background: '#e6e6e6' }),
        h('div', { position: 'absolute', left: 65, top: 1286, fontSize: 23, fontWeight: 500, color: '#1b1b1b' }, link.replace(/^https?:\/\//, '')),
        img(uri(logoBuf, 'image/png'), { position: 'absolute', right: 65, top: 1286, width: logoW, height: LOGO_H }),
    ].filter(Boolean));

    const svg = await satori(tree, { width: 1080, height: 1350, fonts });
    const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1080 } }).render().asPng();
    return sharp(png).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
}

const json = (status, body, maxAge) => new Response(JSON.stringify(body), {
    status,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': `public, max-age=${maxAge}, s-maxage=${maxAge}`,
    },
});

async function handler(request) {
    const raw = new URL(request.url).searchParams.get('id');
    if (raw == null || !/^\d+$/.test(raw)) {
        return json(400, { error: 'id harus berupa angka' }, 60);
    }
    const id = Number(raw);
    const { products } = data();
    const product = products.find(p => p.id === id);
    if (!product) {
        return json(404, { error: 'produk tidak ditemukan' }, 60);
    }

    const origin = process.env.SITE_URL || new URL(request.url).origin;
    const link = `${origin.replace(/\/$/, '')}/p/${product.id}`;
    const jpeg = await renderCard(product, link);

    return new Response(jpeg, {
        status: 200,
        headers: {
            'Content-Type': 'image/jpeg',
            'Content-Length': String(jpeg.length),
            'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
        },
    });
}

export { handler as GET };
