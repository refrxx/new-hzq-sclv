// Kartu share produk, desain final (1080x1350, rasio 4:5).
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const REPO = '/home/claude/hzq-h';
const FONTS = '/tmp/og/node_modules/@fontsource/plus-jakarta-sans/files';
const font = w => fs.readFileSync(`${FONTS}/plus-jakarta-sans-latin-${w}-normal.woff`);
const fonts = [400, 500, 600, 800].map(w => ({ name: 'Jakarta', data: font(w), weight: w }));

// ---- data produk (di produksi: lib/catalog.js, satu sumber untuk situs dan fungsi gambar) ----
const src = fs.readFileSync(`${REPO}/script.js`, 'utf8');
const slice = (start, end) => src.slice(src.indexOf(start), src.indexOf(end, src.indexOf(start)) + end.length);
const GLOBAL_PRODUCTS = new Function(slice('const GLOBAL_PRODUCTS = [', '\n];') + '; return GLOBAL_PRODUCTS;')();
const PRODUCT_SOCIAL_PROOF = new Function(slice('const PRODUCT_SOCIAL_PROOF = {', '\n};') + '; return PRODUCT_SOCIAL_PROOF;')();
const num = s => parseInt(String(s || '').replace(/[^\d]/g, ''), 10) || 0;
const voucherOf = p => p.xtraVoucher != null ? p.xtraVoucher : (['IQRO', 'Juz Amma'].includes(p.category) ? 5000 : 10000);
function pricing(p) {
  const web = p.bindings ? Object.values(p.bindings).map(num) : [num(p.priceWa)];
  const low = Math.max(Math.min(...web) - voucherOf(p), 0), high = Math.max(Math.max(...web) - voucherOf(p), 0);
  const crt = num(p.priceCrt);
  return { low, isRange: low !== high, crt, pct: crt > low ? Math.round((crt - low) / crt * 100) : 0 };
}

const h = (type, style, children) => ({ type, props: { style: { display: 'flex', ...style }, children } });
const img = (src, style) => ({ type: 'img', props: { src, style } });
const uri = (buf, mime = 'image/jpeg') => `data:${mime};base64,${buf.toString('base64')}`;
const STAR = 'data:image/svg+xml;base64,' + Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fbbf24" d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.5l-5.9 3.2 1.2-6.6L2.5 9.5l6.6-.9z"/></svg>').toString('base64');
const BLUE = '#1A5FB4';
const LOGO_PATH = process.env.LOGO_PATH || `${REPO}/img/logo-hamzah-color.png`;

export async function renderCard(p, link) {
  const { low, isRange, crt, pct } = pricing(p);
  const social = PRODUCT_SOCIAL_PROOF[p.id] || {};
  const photo = fs.readFileSync(path.join(REPO, (p.images && p.images[0]) || p.img));
  const bg = await sharp(photo).resize(1080, 940, { fit: 'cover' }).blur(30).jpeg({ quality: 78 }).toBuffer();
  const main = await sharp(photo).resize(940, 940, { fit: 'cover' }).jpeg({ quality: 88 }).toBuffer();
  const LOGO_H = 40;
  const lm = await sharp(LOGO_PATH).metadata();
  const logoW = Math.round(LOGO_H * lm.width / lm.height);
  const logoBuf = await sharp(LOGO_PATH).resize({ height: LOGO_H * 2 }).png().toBuffer();
  const rp = n => 'Rp' + n.toLocaleString('id-ID');

  const tree = h('div', { width: 1080, height: 1350, background: '#ffffff', fontFamily: 'Jakarta', position: 'relative' }, [
    img(uri(bg), { position: 'absolute', left: 0, top: 0, width: 1080, height: 940 }),
    img(uri(main), { position: 'absolute', left: 70, top: 0, width: 940, height: 940 }),

    // bar harga
    h('div', { position: 'absolute', left: 0, top: 940, width: 1080, height: 124, background: 'linear-gradient(90deg, #e4ecfa 0%, #f2f6fd 100%)', alignItems: 'center', paddingLeft: 56 }, [
      h('div', { alignItems: 'flex-end', color: '#0b0b0b' }, [
        h('div', { fontSize: 40, fontWeight: 600, marginBottom: 8 }, isRange ? 'mulai Rp' : 'Rp'),
        h('div', { fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -2, marginLeft: 2 }, low.toLocaleString('id-ID')),
        (crt > low && !isRange) ? h('div', { fontSize: 34, fontWeight: 500, color: '#6b6b6b', textDecoration: 'line-through', marginLeft: 30, marginBottom: 10 }, rp(crt)) : null,
      ].filter(Boolean)),
      pct > 0 ? h('div', { position: 'absolute', left: 0, top: 34, width: 1038, justifyContent: 'flex-end' }, [h('div', { background: '#e03a1a', color: '#fff', fontSize: 40, fontWeight: 600, padding: '8px 30px', borderRadius: 999 }, `${isRange ? 'hingga ' : ''}-${pct}%`)]) : null,
    ].filter(Boolean)),

    // judul
    h('div', { position: 'absolute', left: 65, top: 1088, width: 950, fontSize: 40, fontWeight: 500, lineHeight: 1.16, color: '#101010', display: 'block', lineClamp: 2, maxHeight: 96, overflow: 'hidden' }, p.name),

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
  return sharp(png).jpeg({ quality: 80, mozjpeg: true }).toBuffer();   // JPEG: lebih kecil, cocok buat preview chat
}

if (process.argv[1].endsWith('card2.mjs')) {
  for (const id of [14, 8]) {
    const p = GLOBAL_PRODUCTS.find(x => x.id === id);
    const jpg = await renderCard(p, `hamzahquran.com/p/${id}`.replace(/^/, 'https://'));
    fs.writeFileSync(`/tmp/og/final-${id}.jpg`, jpg);
    console.log(id, p.name, `${(jpg.length / 1024).toFixed(0)} KB`, JSON.stringify(pricing(p)), JSON.stringify(PRODUCT_SOCIAL_PROOF[id]));
  }
}
