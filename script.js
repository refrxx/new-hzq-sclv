// GLOBAL PRODUCT DATA
const GLOBAL_PRODUCTS = [
    {
        id: 1,
        name: "Al Quran Custom Hafalan 8 Blok QPP A5",
        category: "Al Quran Sedang",
        weight: 850,
        priceCrt: "Rp159.000",
        priceStr: "Rp143.000",
        priceWa: "Rp139.000",
        img: "img/katalog/8qpp-a5.jpg",
        images: ["img/8qpp-a5/8qpp-a5.jpg", "img/8qpp-a5/8qpp-a5-1.jpg", "img/8qpp-a5/8qpp-a5-2.jpg", "img/8qpp-a5/8qpp-a5-3.jpg", "img/8qpp-a5/8qpp-a5-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 8 Blok QPP A5",
        shopee: "https://shopee.co.id/hamzahquran/23569937190",
        specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Quran Premium (awet dan tahan lama)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna", "QR Code Murottal"]
    },
    {
        id: 2,
        name: "Al Quran Custom Hafalan 8 Blok Matte A5",
        category: "Al Quran Sedang",
        weight: 850,
        priceCrt: "Rp169.000",
        priceStr: "Rp149.000",
        priceWa: "Rp142.000",
        img: "img/katalog/8matte-a5.jpg",
        images: ["img/8matte-a5/8matte-a5.jpg", "img/8matte-a5/8matte-a5-1.jpg", "img/8matte-a5/8matte-a5-2.jpg", "img/8matte-a5/8matte-a5-3.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 8 Blok Matte A5",
        shopee: "https://shopee.co.id/hamzahquran/17095398884",
        specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perayat", "Tajwid Warna", "Desain elegan", "QR Code Murottal"]
    },
    {
id: 3,
        name: "Al Quran Custom Hafalan 8 TAHFIZ A5",
        category: "Al Quran Sedang",
        soldOut: true,
        weight: 850,
        priceCrt: "Rp169.000",
        priceStr: "Rp149.000",
        priceWa: "Rp142.000",
        img: "img/katalog/8tahfiz-a5.jpg",
        images: ["img/8tahfiz/8tahfiz-3.jpg", "img/8tahfiz/8tahfiz.jpg", "img/8tahfiz/8tahfiz-1.jpg", "img/8tahfiz/8tahfiz-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 8 TAHFIZ A5",
        shopee: "https://shopee.co.id/hamzahquran/26385974446",
        specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Hanya tersedia versi tanpa latin", "Terjemah perkata", "Terjemah perayat", "Fokus hafalan intensif", "QR Code Murottal"]
    },
    {
        id: 4,
        name: "Al Quran Custom Tilawah A5",
        category: "Al Quran Sedang",
        weight: 850,
        priceCrt: "Rp129.000",
        priceStr: "Rp120.000",
        priceWa: "Rp115.000",
        img: "img/katalog/tilawah-a5.jpg",
        images: ["img/tilawah/tilawah-3.jpg", "img/tilawah/tilawah.jpg", "img/tilawah/tilawah-1.jpg", "img/tilawah/tilawah-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Tilawah A5",
        shopee: "https://shopee.co.id/hamzahquran/26513988170",
        specs: ["Kertas Quran Premium (awet dan tahan lama)", "Tajwid Warna", "Rasm Utsmani 15 baris", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Tanpa terjemah", "Hardcover kokoh", "Cocok untuk tilawah harian", "Desain elegan", "Proses cetak cepat"]
    },
    {
        id: 5,
        name: "Al Quran Custom Non Terjemah 6 Blok A5",
        category: "Al Quran Sedang",
        weight: 850,
        priceCrt: "Rp149.000",
        priceStr: "Rp139.000",
        priceWa: "Rp129.000",
        img: "img/katalog/yazid.jpg",
        images: ["img/yazid/yazid-a5.jpg", "img/yazid/yazid-a5-1.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 6 Blok Non Terjemah A5",
        shopee: "https://shopee.co.id/hamzahquran/26474664037",
        specs: ["Kertas Quran Premium (awet dan tahan lama)", "6 Blok Warna Hafalan", "Tajwid Warna", "Panduan Muroja'ah", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Hardcover kokoh", "Tanpa terjemah", "Desain colorful", "Proses cetak cepat"]
    },
    {
        id: 6,
        name: "Al Quran Custom Hafalan 8 Blok QPP A4",
        category: "Al Quran Besar",
        weight: 1600,
        priceCrt: "Rp229.000",
        priceStr: "Rp199.000",
        priceWa: "Rp189.000",
        img: "img/katalog/8qpp-a4.jpg",
        images: ["img/8qpp-a4/8qpp-a4.jpg", "img/8qpp-a4/8qpp-a4-1.jpg", "img/8qpp-a4/8qpp-a4-2.jpg", "img/8qpp-a4/8qpp-a4-3.jpg", "img/8qpp-a4/8qpp-a4-4.jpg", "img/8qpp-a4/8qpp-a4-5.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 8 Blok QPP A4",
        shopee: "https://shopee.co.id/hamzahquran/20691896045",
        specs: ["8 blok warna hafalan", "Ukuran A4 (Besar) 21 x 29,7 cm", "Kertas Quran Premium (awet dan tahan lama)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna", "QR Code Murottal"]
    },
    {
        id: 7,
        name: "Al Quran Custom Hafalan 8 Blok Matte A4",
        category: "Al Quran Besar",
        weight: 1600,
        priceCrt: "Rp239.000",
        priceStr: "Rp219.000",
        priceWa: "Rp195.000",
        img: "img/katalog/8matte-a4.jpg",
        images: ["img/8matte-a4/8matte-a4.jpg", "img/8matte-a4/8matte-a4-1.jpg", "img/8matte-a4/8matte-a4-2.jpg", "img/8matte-a4/8matte-a4-3.jpg", "img/8matte-a4/8matte-a4-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 8 Blok Matte A4",
        shopee: "https://shopee.co.id/hamzahquran/23954192019",
        specs: ["8 blok warna hafalan", "Ukuran A4 (Besar) 21 x 29,7 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Hanya tersedia versi tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna"]
    },
    {
        id: 8,
        name: "IQRO Custom Hitam Putih HVS A5",
        category: "IQRO",
        weight: 350,
        priceCrt: "Rp79.000",
        priceStr: "Rp69.000",
        priceWa: "Rp64.000",
        img: "img/katalog/iqro-bw-3.jpg",
        images: ["img/iqro-bw/iqro-bw-3.jpg", "img/iqro-bw/iqro-bw.jpg", "img/iqro-bw/iqro-bw-1.jpg", "img/iqro-bw/iqro-bw-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan IQRO Custom Nama Hitam Putih HVS A5",
        shopee: "https://shopee.co.id/hamzahquran/22346411504",
        specs: ["Hardcover Premium", "Kertas HVS Premium 70gr", "Isi IQRO original", "Penerbit AMM Yogyakarta", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Lengkap Jilid 1-6", "Kertas putih, tulisan jelas"]
    },
    {
        id: 9,
        name: "IQRO Custom Full Color HVS A5",
        category: "IQRO",
        weight: 350,
        priceCrt: "Rp99.000",
        priceStr: "Rp84.900",
        priceWa: "Rp79.000",
        img: "img/katalog/iqro-qr-3.jpg",
        images: ["img/iqro-qr/iqro-qr-3.jpg", "img/iqro-qr/iqro-qr.jpg", "img/iqro-qr/iqro-qr-1.jpg", "img/iqro-qr/iqro-qr-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan IQRO Custom Nama Full Color QR Code HVS A5",
        shopee: "https://shopee.co.id/hamzahquran/18189793910",
        specs: ["Hardcover Premium", "Kertas HVS Premium 70gr", "Isi IQRO original full color", "Penerbit Al Qosbah dengan lisensi", "QR Code video pembelajaran", "Tanpa transliterasi latin", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Menarik untuk anak"]
    },
    {
        id: 10,
        name: "Juz Amma Full Color A5",
        category: "Juz Amma",
        weight: 350,
        priceCrt: "Rp79.000",
        priceStr: "Rp62.000",
        priceWa: "Rp58.000",
        img: "img/katalog/juzamma.jpg",
        images: ["img/katalog/juzamma.jpg", "img/juzamma/juzamma-3.jpg", "img/juzamma/juzamma-2.jpg", "img/juzamma/juzamma-1.jpg", "img/juzamma/juzamma-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Juz Amma Custom Nama Full Color A5",
        shopee: "https://shopee.co.id/hamzahquran/43817837285",
        specs: ["Kertas HVS Premium 70gr", "Full Color", "Tajwid Warna", "Dilengkapi Asmaul Husna", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Mudah dibawa", "Kertas berkualitas", "Tampilan cerah", "Bantu hafalan surat pendek"]
    },
];

// --- Social Proof (manual) ---
// TODO: ganti angka di bawah dengan data penjualan asli dari Shopee sebelum publish.
// Nilai di bawah ini placeholder. Kosongkan / hapus entry bila produk tidak punya data.
const PRODUCT_SOCIAL_PROOF = {
    1: { rating: '4.9', sold: 5450},
    2: { rating: '4.8', sold: 1421 },
    3: { rating: '4.9', sold: 18 },
    4: { rating: '4.7', sold: 22 },
    5: { rating: '4.8', sold: 43 },
    6: { rating: '5.0', sold: 257 },
    7: { rating: '4.9', sold: 153 },
    8: { rating: '4.8', sold: 567 },
    9: { rating: '4.9', sold: 4405 },
    10: { rating: '4.8', sold: 314 },
};

// --- Label singkat untuk pill kategori di card (data p.category tetap penuh) ---
const CATEGORY_SHORT = {
    'Al Quran Sedang': 'Sedang',
    'Al Quran Besar': 'Besar',
};
const shortCategory = c => CATEGORY_SHORT[c] || c;

// --- Voucher Config ---
const GRATIS_ONGKIR_TIERS = [
  { min: 0, amount: 5000, label: 'Voucher Ongkir' },
  { min: 60000, amount: 10000, label: 'Voucher Ongkir' },
  { min: 100000, amount: 20000, label: 'Voucher Ongkir' },
  { min: 300000, amount: 50000, label: 'Voucher Ongkir' },
  { min: 500000, amount: 70000, label: 'Voucher Ongkir' },
];
const VOUCHER_TIERS = [
  { min: 400000, amount: 40000, label: 'Voucher XTRA' },
  { min: 250000, amount: 25000, label: 'Voucher XTRA' },
  { min: 100000, amount: 10000, label: 'Voucher XTRA' },
  { min: 0, amount: 5000, label: 'Voucher XTRA' },
];

const QURAN_VARIANTS = {
  1: ['latin', 'tanpa-latin'],
  2: ['latin', 'tanpa-latin'],
  6: ['latin', 'tanpa-latin'],
  7: ['latin'],
};
function getBestVoucherAmount(subtotal) {
  for (const t of [...VOUCHER_TIERS].sort((a, b) => b.min - a.min)) if (subtotal >= t.min) return t.amount;
  return 0;
}
function getVoucherLabel(amount) {
  return `Rp${amount.toLocaleString('id-ID')}`;
}
function getAutoGratisOngkir(subtotal) {
  const e = GRATIS_ONGKIR_TIERS.filter(t => subtotal >= t.min).sort((a, b) => b.amount - a.amount);
  return e[0] || null;
}
function getAutoVoucher(subtotal) {
  const e = VOUCHER_TIERS.filter(t => subtotal >= t.min).sort((a, b) => b.amount - a.amount);
  return e[0] || null;
}

// Facebook Pixel: Lead event on all WhatsApp link clicks
document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href*="wa.me"]');
    if (link && typeof fbq !== 'undefined') fbq('track', 'Lead');
});

let selectedCourierPrice = 0;
let selectedCourierName = '';
let selectedCourierService = '';

const COVER_DESIGNS = [
    { id: 1, name: "Aesthetic Violet", category: "Aesthetic", img: "img/cover/aesthetic-series-1.jpg" },
    { id: 2, name: "Aesthetic Soft Pink", category: "Aesthetic", img: "img/cover/aesthetic-series-2.jpg" },
    { id: 3, name: "Aesthetic Sage Green", category: "Aesthetic", img: "img/cover/aesthetic-series-3.jpg" },
    { id: 4, name: "Aesthetic Purple", category: "Aesthetic", img: "img/cover/aesthetic-series-4.jpg" },
    { id: 5, name: "Aesthetic Pink", category: "Aesthetic", img: "img/cover/aesthetic-series-5.jpg" },
    { id: 6, name: "Aesthetic Brown", category: "Aesthetic", img: "img/cover/aesthetic-series.jpg" },
    { id: 7, name: "Rose Green", category: "Floral Wedding", img: "img/cover/floral-wedding-1.jpg" },
    { id: 8, name: "Pink Blossom", category: "Floral Wedding", img: "img/cover/floral-wedding-2.jpg" },
    { id: 9, name: "Floral Navy", category: "Floral Wedding", img: "img/cover/floral-wedding-3.jpg" },
    { id: 10, name: "Floral Green", category: "Floral Wedding", img: "img/cover/floral-wedding-4.jpg" },
    { id: 11, name: "Amethyst", category: "Floral Wedding", img: "img/cover/floral-wedding-5.jpg" },
    { id: 12, name: "Simply Brown", category: "Floral Wedding", img: "img/cover/floral-wedding.jpg" },
    { id: 13, name: "HMZ Pink", category: "HMZ Signature", img: "img/cover/hmz-signature-1.jpg" },
    { id: 14, name: "HMZ Denim", category: "HMZ Signature", img: "img/cover/hmz-signature-2.jpg" },
    { id: 15, name: "HMZ Dark Grey", category: "HMZ Signature", img: "img/cover/hmz-signature-3.jpg" },
    { id: 16, name: "HMZ Brown", category: "HMZ Signature", img: "img/cover/hmz-signature-4.jpg" },
    { id: 17, name: "HMZ Sage", category: "HMZ Signature", img: "img/cover/hmz-signature.jpg" },
    { id: 18, name: "Ka'bah Pink", category: "Ka'bah", img: "img/cover/ka'bah-series-1.jpg" },
    { id: 19, name: "Ka'bah Green", category: "Ka'bah", img: "img/cover/ka'bah-series-2.jpg" },
    { id: 20, name: "Ka'bah Black", category: "Ka'bah", img: "img/cover/ka'bah-series-3.jpg" },
    { id: 21, name: "Ka'bah Silver", category: "Ka'bah", img: "img/cover/ka'bah-series.jpg" },
    { id: 22, name: "Astronot 3D", category: "Kids Junior", img: "img/cover/kids-junior-1.jpg" },
    { id: 23, name: "Space Tosca", category: "Kids Junior", img: "img/cover/kids-junior-2.jpg" },
    { id: 24, name: "Forest", category: "Kids Junior", img: "img/cover/kids-junior-3.jpg" },
    { id: 25, name: "Space Purple", category: "Kids Junior", img: "img/cover/kids-junior-4.jpg" },
    { id: 26, name: "Istana Pink", category: "Kids Junior", img: "img/cover/kids-junior-5.jpg" },
    { id: 27, name: "Playground", category: "Kids Junior", img: "img/cover/kids-junior-6.jpg" },
    { id: 28, name: "Kastil", category: "Kids Junior", img: "img/cover/kids-junior-7.jpg" },
    { id: 29, name: "Pink Mahkota", category: "Kids Junior", img: "img/cover/kids-junior-8.jpg" },
    { id: 30, name: "Planet Gold", category: "Kids Junior", img: "img/cover/kids-junior-9.jpg" },
    { id: 31, name: "Bunga Ungu", category: "Kids Junior", img: "img/cover/kids-junior-10.jpg" },
    { id: 32, name: "Planet Purple", category: "Kids Junior", img: "img/cover/kids-junior-11.jpg" },
    { id: 33, name: "Castle", category: "Kids Junior", img: "img/cover/kids-junior-12.jpg" },
    { id: 34, name: "Roket", category: "Kids Junior", img: "img/cover/kids-junior-13.jpg" },
    { id: 35, name: "Unicorn", category: "Kids Junior", img: "img/cover/kids-junior.jpg" },
    { id: 36, name: "Kufi Pink", category: "Kufi Batik", img: "img/cover/kufi-series-1.jpg" },
    { id: 37, name: "Kufi Green", category: "Kufi Batik", img: "img/cover/kufi-series-2.jpg" },
    { id: 38, name: "Kufi Blue", category: "Kufi Batik", img: "img/cover/kufi-series-3.jpg" },
    { id: 39, name: "Kufi Black", category: "Kufi Batik", img: "img/cover/kufi-series-4.jpg" },
    { id: 40, name: "Kufi Red", category: "Kufi Batik", img: "img/cover/kufi-series.jpg" },
    { id: 41, name: "Flower Black", category: "Muslim Kids", img: "img/cover/muslim-kids series-1.jpg" },
    { id: 42, name: "Star Brown", category: "Muslim Kids", img: "img/cover/muslim-kids series-2.jpg" },
    { id: 43, name: "Dino Brown", category: "Muslim Kids", img: "img/cover/muslim-kids series-3.jpg" },
    { id: 44, name: "Smart Girl", category: "Muslim Kids", img: "img/cover/muslim-kids series-4.jpg" },
    { id: 45, name: "Football Boy", category: "Muslim Kids", img: "img/cover/muslim-kids series-5.jpg" },
    { id: 46, name: "Sky Blue", category: "Muslim Kids", img: "img/cover/muslim-kids series-6.jpg" },
    { id: 47, name: "Galaxy", category: "Muslim Kids", img: "img/cover/muslim-kids series-7.jpg" },
    { id: 48, name: "Rocket Boy", category: "Muslim Kids", img: "img/cover/muslim-kids series-8.jpg" },
    { id: 49, name: "Basket Boy", category: "Muslim Kids", img: "img/cover/muslim-kids series-9.jpg" },
    { id: 50, name: "Pinky Girl", category: "Muslim Kids", img: "img/cover/muslim-kids series-10.jpg" },
    { id: 51, name: "Latte Brown", category: "Muslim Kids", img: "img/cover/muslim-kids series-11.jpg" },
    { id: 52, name: "Night Sky", category: "Muslim Kids", img: "img/cover/muslim-kids series-12.jpg" },
    { id: 53, name: "Star Black", category: "Muslim Kids", img: "img/cover/muslim-kids series.jpg" },
    { id: 54, name: "Bromo", category: "Nature", img: "img/cover/nature-series-1.jpg" },
    { id: 55, name: "Aurora", category: "Nature", img: "img/cover/nature-series-2.jpg" },
    { id: 56, name: "Alam", category: "Nature", img: "img/cover/nature-series-3.jpg" },
    { id: 57, name: "Daun", category: "Nature", img: "img/cover/nature-series.jpg" },
    { id: 58, name: "Rainbow Pink", category: "Rainbow", img: "img/cover/rainbow-series-1.jpg" },
    { id: 59, name: "Rainbow Orange", category: "Rainbow", img: "img/cover/rainbow-series-2.jpg" },
    { id: 60, name: "Rainbow Navy", category: "Rainbow", img: "img/cover/rainbow-series-3.jpg" },
    { id: 61, name: "Rainbow Blue", category: "Rainbow", img: "img/cover/rainbow-series-4.jpg" },
    { id: 62, name: "Rainbow Purple", category: "Rainbow", img: "img/cover/rainbow-series.jpg" },
    { id: 63, name: "Rocket Pink", category: "Rocket 3D", img: "img/cover/rocket-3d series-1.jpg" },
    { id: 64, name: "Rocket Green", category: "Rocket 3D", img: "img/cover/rocket-3d series-2.jpg" },
    { id: 65, name: "Rocket Blue", category: "Rocket 3D", img: "img/cover/rocket-3d series-3.jpg" },
    { id: 66, name: "Rocket Black", category: "Rocket 3D", img: "img/cover/rocket-3d series-4.jpg" },
    { id: 67, name: "Rocket Red", category: "Rocket 3D", img: "img/cover/rocket-3d series.jpg" },
    { id: 68, name: "Army Biru", category: "IQRO", img: "img/coveriqro/Army Biru_comp.jpg" },
    { id: 69, name: "Army Hijau", category: "IQRO", img: "img/coveriqro/Army Hijau_comp.jpg" },
    { id: 70, name: "Astronot 3D", category: "IQRO", img: "img/coveriqro/Astronot 3D_comp.jpg" },
    { id: 71, name: "Candy", category: "IQRO", img: "img/coveriqro/Candy_comp.jpg" },
    { id: 72, name: "Castle", category: "IQRO", img: "img/coveriqro/Castle_comp.jpg" },
    { id: 73, name: "Dino Brown", category: "IQRO", img: "img/coveriqro/Dino Brown_comp.jpg" },
    { id: 74, name: "Flower Black", category: "IQRO", img: "img/coveriqro/Flower Black_comp.jpg" },
    { id: 75, name: "Football Boy", category: "IQRO", img: "img/coveriqro/Football Boy_comp.jpg" },
    { id: 76, name: "Forest Fox", category: "IQRO", img: "img/coveriqro/Forest Fox_comp.jpg" },
    { id: 77, name: "Galaxy", category: "IQRO", img: "img/coveriqro/Galaxy_comp.jpg" },
    { id: 78, name: "Gunung", category: "IQRO", img: "img/coveriqro/Gunung_comp.jpg" },
    { id: 79, name: "Ice Cream", category: "IQRO", img: "img/coveriqro/Ice Cream_comp.jpg" },
    { id: 80, name: "Istana Pink", category: "IQRO", img: "img/coveriqro/Istana Pink_comp.jpg" },
    { id: 81, name: "Ka'bah Grey", category: "IQRO", img: "img/coveriqro/Ka'bah Grey_comp.jpg" },
    { id: 82, name: "Ka'bah Pink", category: "IQRO", img: "img/coveriqro/Ka'bah Pink_comp.jpg" },
    { id: 83, name: "Ka'bah Yellow", category: "IQRO", img: "img/coveriqro/Ka'bah Yellow_comp.jpg" },
    { id: 84, name: "Kastil", category: "IQRO", img: "img/coveriqro/Kastil_comp.jpg" },
    { id: 85, name: "Latte Brown", category: "IQRO", img: "img/coveriqro/Latte Brown_comp.jpg" },
    { id: 86, name: "Masjid", category: "IQRO", img: "img/coveriqro/Masjid_comp.jpg" },
    { id: 87, name: "Night Sky", category: "IQRO", img: "img/coveriqro/Night Sky_comp.jpg" },
    { id: 88, name: "Pantai", category: "IQRO", img: "img/coveriqro/Pantai_comp.jpg" },
    { id: 89, name: "Pink Mahkota", category: "IQRO", img: "img/coveriqro/Pink Mahkota_comp.jpg" },
    { id: 90, name: "Pinky Girl", category: "IQRO", img: "img/coveriqro/Pinky Girl_comp.jpg" },
    { id: 91, name: "Rainbow", category: "IQRO", img: "img/coveriqro/Rainbow_comp.jpg" },
    { id: 92, name: "Rocket Black", category: "IQRO", img: "img/coveriqro/Rocket Black_comp.jpg" },
    { id: 93, name: "Rocket Blue", category: "IQRO", img: "img/coveriqro/Rocket Blue_comp.jpg" },
    { id: 94, name: "Rocket Green", category: "IQRO", img: "img/coveriqro/Rocket Green_comp.jpg" },
    { id: 95, name: "Rocket Pink", category: "IQRO", img: "img/coveriqro/Rocket Pink_comp.jpg" },
    { id: 96, name: "Rocket Red", category: "IQRO", img: "img/coveriqro/Rocket Red_comp.jpg" },
    { id: 97, name: "Roket", category: "IQRO", img: "img/coveriqro/Roket_comp.jpg" },
    { id: 98, name: "Sea World", category: "IQRO", img: "img/coveriqro/Sea World_comp.jpg" },
    { id: 99, name: "Sky Blue", category: "IQRO", img: "img/coveriqro/Sky Blue_comp.jpg" },
    { id: 100, name: "Smart Girl", category: "IQRO", img: "img/coveriqro/Smart Girl_comp.jpg" },
    { id: 101, name: "Star Black", category: "IQRO", img: "img/coveriqro/Star Black_comp.jpg" },
    { id: 102, name: "Star Brown", category: "IQRO", img: "img/coveriqro/Star Brown_comp.jpg" },
    { id: 103, name: "Unicorn", category: "IQRO", img: "img/coveriqro/Unicorn_comp.jpg" },
    { id: 104, name: "Astronot 3D", category: "Juz Amma", img: "img/coverjza/Astronot 3D_comp.jpg" },
    { id: 105, name: "Football Boy", category: "Juz Amma", img: "img/coverjza/Football Boy_comp.jpg" },
    { id: 106, name: "Galaxy", category: "Juz Amma", img: "img/coverjza/Galaxy_comp.jpg" },
    { id: 107, name: "Kastil", category: "Juz Amma", img: "img/coverjza/Kastil_comp.jpg" },
    { id: 108, name: "Latte Brown", category: "Juz Amma", img: "img/coverjza/Latte Brown_comp.jpg" },
    { id: 109, name: "Night Sky", category: "Juz Amma", img: "img/coverjza/Night Sky_comp.jpg" },
    { id: 110, name: "Pinky Girl", category: "Juz Amma", img: "img/coverjza/Pinky Girl_comp.jpg" },
    { id: 111, name: "Rocket Blue", category: "Juz Amma", img: "img/coverjza/Rocket Blue_comp.jpg" },
    { id: 112, name: "Rocket Green", category: "Juz Amma", img: "img/coverjza/Rocket Green_comp.jpg" },
    { id: 113, name: "Rocket Pink", category: "Juz Amma", img: "img/coverjza/Rocket Pink_comp.jpg" },
    { id: 114, name: "Rocket Red", category: "Juz Amma", img: "img/coverjza/Rocket Red_comp.jpg" },
    { id: 115, name: "Sky Blue", category: "Juz Amma", img: "img/coverjza/Sky Blue_comp.jpg" },
    { id: 116, name: "Smart Girl", category: "Juz Amma", img: "img/coverjza/Smart Girl_comp.jpg" },
    { id: 117, name: "Star Blue", category: "Juz Amma", img: "img/coverjza/Star Blue_comp.jpg" }
];

// 2b. Promo Rotator for Mobile
function initPromoRotator() {
    const isMobile = () => window.innerWidth < 640;
    const items = document.querySelectorAll('.promo-item');
    const separators = document.querySelectorAll('.promo-separator');

    if (items.length <= 1) return;

    let current = 0;
    let rotatorInterval = null;

    function update() {
        if (isMobile()) {
            // Hide all items and separators
            items.forEach(el => el.classList.add('hidden'));
            separators.forEach(el => el.classList.add('hidden'));

            // Show only the current item with animation
            const target = items[current];
            target.classList.remove('hidden');
            target.classList.add('animate-promo-slide');

            // Re-trigger animation by removing and adding class back (if it's the same item staying, though here it rotates)
            // But just in case, let's reset it every time
            target.style.animation = 'none';
            target.offsetHeight; /* trigger reflow */
            target.style.animation = '';

            current = (current + 1) % items.length;
        } else {
            // Desktop view: show all items and separators
            items.forEach(el => {
                el.classList.remove('hidden', 'animate-promo-slide');
            });
            separators.forEach(el => {
                el.classList.remove('hidden');
            });
            // Stop rotator interval when in desktop mode if desired, but resize event will handle resume.
        }
    }

    function startRotator() {
        if (rotatorInterval) clearInterval(rotatorInterval);
        update(); // run once immediately
        rotatorInterval = setInterval(update, 3500); // 3.5s rotate
    }

    startRotator();
    window.addEventListener('resize', () => {
        // If switched to desktop, reset view
        if (!isMobile()) {
            update();
        }
    });
}

// 3. Lenis Smooth Scroll
function initLenis() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        window.lenis = lenis; // Expose for other functions

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Auto anchor scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#') {
                    e.preventDefault();
                    lenis.scrollTo(targetId, { offset: -80, duration: 1.5 });
                }
            });
        });

        return lenis;
    }
    return null;
}

// Product Card Template (katalog, related, trending)
function productCardTemplate(p, opts = {}) {
    const toNum = s => parseInt(String(s).replace(/[^\d]/g, ''), 10) || 0;
    const crt = toNum(p.priceCrt);
    const wa = toNum(p.priceWa);
    const discount = crt > 0 ? Math.round((crt - wa) / crt * 100) : 0;

    const social = PRODUCT_SOCIAL_PROOF[p.id] || {};
    const metaParts = [];
    if (social.rating) {
        metaParts.push(`<span class="inline-flex items-center gap-0.5"><span class="material-symbols-outlined text-[0.9rem] text-amber-400 leading-none" style="font-variation-settings: 'FILL' 1">star</span>${social.rating}</span>`);
    }
    if (social.sold) {
        metaParts.push(`<span>Terjual ${social.sold}</span>`);
    }
    const metaRow = metaParts.length
        ? `<div class="mt-1.5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400">${metaParts.join('<span class="text-slate-300 dark:text-slate-600">|</span>')}</div>`
        : '';

    const discountRow = discount > 0
        ? `<div class="mt-1 flex items-center gap-2">
                    <span class="text-[11px] sm:text-xs text-slate-400 line-through">${p.priceCrt}</span>
                    <span class="bg-red-500 text-white text-[10px] sm:text-[11px] font-bold rounded-full px-2 py-0.5">-${discount}%</span>
                </div>`
        : '';

    // Sold out: gambar jadi abu-abu + label overlay
    const soldOutOverlay = p.soldOut
        ? `<div class="absolute inset-0 flex items-center justify-center bg-slate-900/40">
                    <span class="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-black uppercase tracking-widest text-slate-700 shadow-lg">Sold Out</span>
                </div>`
        : '';

    return `<a href="product-detail.html?id=${p.id}"
        class="group flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-shadow hover:shadow-xl ${opts.className || ''}"
        style="${opts.style || ''}" aria-label="Lihat detail ${p.name}">
        <div class="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img src="${p.img}" alt="${p.name}" loading="lazy"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${p.soldOut ? 'grayscale opacity-60' : ''}">
            ${soldOutOverlay}
        </div>
        <div class="p-4 flex flex-col flex-1">
            <div class="flex flex-wrap items-center gap-1 mb-1.5 sm:gap-1.5 sm:mb-2">
                <span class="rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase text-white bg-gradient-to-r from-brand-blue to-blue-800">COD</span>
                <span class="rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase bg-brand-gold/20 text-amber-700 dark:text-brand-gold">${shortCategory(p.category)}</span>
            </div>
            <h3 class="font-display font-bold text-[13px] sm:text-sm text-slate-900 dark:text-white line-clamp-2 min-h-[2.5rem]">${p.name}</h3>
            ${metaRow}
            <div class="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
                <p class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Harga Spesial</p>
                <p class="price-val text-base sm:text-lg md:text-xl font-black leading-tight text-brand-blue dark:text-brand-gold">${p.priceWa}</p>
                ${discountRow}
            </div>
        </div>
    </a>`;
}

// 4. Katalog Page Logic
function initKatalog() {
    const productGrid = document.getElementById('product-list');
    if (!productGrid) return;

    let currentFilter = 'ALL';
    let currentSort = 'default';

    const filterButtons = document.querySelectorAll('.category-card');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const sortSelect = document.getElementById('sort-select');

    const catScroll = document.getElementById('category-scroll');
    const catPrev = document.getElementById('cat-prev');
    const catNext = document.getElementById('cat-next');

    const toNum = v => parseFloat(String(v).replace(/[^\d]/g, '')) || 0;
    const soldOf = p => (PRODUCT_SOCIAL_PROOF[p.id] && PRODUCT_SOCIAL_PROOF[p.id].sold) || 0;

    function renderProducts() {
        let filtered = [...GLOBAL_PRODUCTS];

        if (currentFilter !== 'ALL') {
            filtered = GLOBAL_PRODUCTS.filter(p => p.category === currentFilter);
        }

        if (currentSort === 'price-low') filtered.sort((a, b) => toNum(a.priceWa) - toNum(b.priceWa));
        else if (currentSort === 'price-high') filtered.sort((a, b) => toNum(b.priceWa) - toNum(a.priceWa));
        else if (currentSort === 'sold-desc') filtered.sort((a, b) => soldOf(b) - soldOf(a));

        productGrid.innerHTML = filtered.map(p => productCardTemplate(p)).join('');
    }

    // Filter events
    function selectCategory(btn) {
        filterButtons.forEach(b => {
            const isActive = (b === btn);
            b.classList.toggle('selected', isActive);
            b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        currentFilter = btn.dataset.category || 'ALL';
        renderProducts();
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => selectCategory(btn));
    });

    // Horizontal category carousel nav (mobile only)
    function updateCatNav() {
        if (!catScroll || !catPrev || !catNext) return;
        const overflow = catScroll.scrollWidth > catScroll.clientWidth + 4;
        catPrev.classList.toggle('hidden', !overflow);
        catNext.classList.toggle('hidden', !overflow);
        if (!overflow) return;
        const maxScroll = catScroll.scrollWidth - catScroll.clientWidth;
        catPrev.disabled = catScroll.scrollLeft <= 4;
        catNext.disabled = catScroll.scrollLeft >= maxScroll - 4;
    }

    if (catScroll && catPrev && catNext) {
        catPrev.addEventListener('click', () => {
            catScroll.scrollBy({ left: -catScroll.clientWidth * 0.8, behavior: 'smooth' });
        });
        catNext.addEventListener('click', () => {
            catScroll.scrollBy({ left: catScroll.clientWidth * 0.8, behavior: 'smooth' });
        });

        let navRaf = null;
        catScroll.addEventListener('scroll', () => {
            if (navRaf) return;
            navRaf = requestAnimationFrame(() => {
                navRaf = null;
                updateCatNav();
            });
        });
        window.addEventListener('resize', updateCatNav);
        updateCatNav();
        // Re-check once fonts/images settle so clientWidth is final
        window.addEventListener('load', updateCatNav);
    }

    // Sort events: tombol (desktop) & dropdown (mobile) berbagi satu state
    function applySort(key) {
        currentSort = key;
        sortButtons.forEach(b => {
            const isActive = b.getAttribute('data-sort') === key;
            b.classList.toggle('active', isActive);
            b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        if (sortSelect) sortSelect.value = key;
        renderProducts();
    }

    // Tombol: klik tombol aktif lagi = matikan sortir
    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-sort');
            applySort(currentSort === key ? 'default' : key);
        });
    });

    // Dropdown mobile: pilih "Default" untuk matikan sortir
    if (sortSelect) {
        sortSelect.addEventListener('change', () => applySort(sortSelect.value));
    }

    renderProducts();
}

// 4b. Cover Katalog Page Logic
function initCoverKatalog() {
    const coverGrid = document.getElementById('cover-list');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const productTabs = document.querySelectorAll('.product-tab-btn');
    const categoryFilterContainer = document.getElementById('category-filter-container');

    if (!coverGrid) return;

    let currentProductType = 'Al Quran';
    let currentFilter = 'Semua Desain';
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Lightbox close logic
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });
        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        }
    }

    function renderCovers() {
        let filtered = [...COVER_DESIGNS];

        // 1. Filter by Product Type
        if (currentProductType === 'IQRO') {
            filtered = filtered.filter(c => c.category === 'IQRO');
        } else if (currentProductType === 'Juz Amma') {
            filtered = filtered.filter(c => c.category === 'Juz Amma');
        } else {
            // Al Quran (Excluding IQRO/Juz Amma)
            filtered = filtered.filter(c => c.category !== 'IQRO' && c.category !== 'Juz Amma');

            // 2. Filter by Al Quran Category
            if (currentFilter !== 'Semua Desain') {
                filtered = filtered.filter(c => c.category === currentFilter);
            }
        }

        coverGrid.innerHTML = filtered.map((c, idx) => `
            <div class="cover-card group bg-white dark:bg-slate-900 rounded-xl p-1 mb-1 transition-all cursor-zoom-in">
                <div class="bg-slate-50 dark:bg-slate-800 aspect-[3/4] rounded-xl overflow-hidden mb-2 relative">
                    <img src="${c.img}" alt="${c.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <div class="px-2 pb-2">
                    <span class="text-[0.65rem] font-bold text-brand-blue dark:text-brand-gold text-center uppercase tracking-wider mb-1 block">${c.category}</span>
                    <h3 class="text-sm sm:text-md font-display font-bold text-center text-slate-900 dark:text-white leading-tight">${c.name}</h3>
                </div>
            </div>
        `).join('');
    }

    // Product Tab Events
    productTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            currentProductType = btn.getAttribute('data-type');

            // Reset sub-category filter when switching product type
            currentFilter = 'Semua Desain';
            filterButtons.forEach(b => {
                b.classList.remove('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
                b.classList.add('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');
            });
            const firstSubBtn = document.querySelector('.filter-btn');
            if (firstSubBtn) {
                firstSubBtn.classList.add('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
                firstSubBtn.classList.remove('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');
            }

            // Update Tabs UI
            productTabs.forEach(b => {
                b.classList.remove('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
                b.classList.add('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');
            });
            btn.classList.add('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
            btn.classList.remove('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');

            // Toggle sub-filters visibility
            if (currentProductType === 'Al Quran') {
                categoryFilterContainer.classList.remove('hidden');
            } else {
                categoryFilterContainer.classList.add('hidden');
            }

            renderCovers();
        });
    });

    // Event delegation for opening lightbox
    coverGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.cover-card');
        if (card && lightbox && lightboxImg) {
            const img = card.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            }
        }
    });

    // Sub-Category Filter events
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
                b.classList.add('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');
            });
            btn.classList.add('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
            btn.classList.remove('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');
            currentFilter = btn.textContent.trim().replace(/\s+/g, ' ');
            renderCovers();
        });
    });

    renderCovers();
}

// 5. Product Detail Logic
let currentProductData = null;
let activeIdx = 0;

function initProductDetail() {
    const detailContainer = document.getElementById('product-name'); // Check if we are on detail page
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = GLOBAL_PRODUCTS.find(p => p.id === productId);

    if (product) {
        currentProductData = product;
        activeIdx = 0;

        document.title = `${product.name} - Hamzah Quran`;
        const setEl = (id, content, attr = 'textContent') => {
            const el = document.getElementById(id);
            if (el) el[attr] = content;
        };

        setEl('breadcrumb-current', product.name);
        setEl('product-name', product.name);
        setEl('product-category', product.category);
        setEl('harga-coret', product.priceCrt);
        setEl('product-price', product.priceStr);
        setEl('product-wa-price', `
            <div class="wa-price-badge py-3 px-5 mb-2">
                <span class="material-symbols-outlined !text-2xl">confirmation_number</span>
                <span class="price-val !text-2xl sm:!text-3xl">${product.priceWa}</span>
                <span class="label-text !text-sm !opacity-100 !font-normal">Harga spesial Web</span>
            </div>
        `, 'innerHTML');

        // Voucher banner
        const priceNum = parseFloat(product.priceWa.replace(/[^\d]/g, ''));
        const productVoucher = getBestVoucherAmount(priceNum);
        const voucherBanner = document.getElementById('voucher-banner');
        const voucherText = document.getElementById('voucher-banner-text');
        if (voucherBanner && voucherText) {
            voucherBanner.classList.remove('hidden');
            voucherText.textContent = `Checkout sekarang dan dapatkan voucher XTRA ${getVoucherLabel(productVoucher)}!`;
        }

        setEl('main-image', product.img, 'src');
        setEl('wa-link', `https://wa.me/6285155060816?text=${encodeURIComponent(product.wa)}`, 'href');
        setEl('wa-link-mobile', `https://wa.me/6285155060816?text=${encodeURIComponent(product.wa)}`, 'href');
        setEl('shopee-link', product.shopee, 'href');
        setEl('shopee-link-mobile', product.shopee, 'href');

        const setupCartBtn = (btnId) => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.onclick = (e) => {
                    e.preventDefault();
                    if (product.soldOut) return;
                    if (product.category && product.category.startsWith('Al Quran')) {
                        const variants = QURAN_VARIANTS[product.id];
                        if (variants) {
                            openQuranPickerModal(product.id, variants);
                        } else {
                            openCustomModal(product.id);
                        }
                    } else {
                        openCustomModal(product.id);
                    }
                };
            }
        };

        setupCartBtn('add-to-cart-btn');
        setupCartBtn('add-to-cart-btn-mobile');

        // Sold out: matikan tombol keranjang + link Shopee, link Chat Admin tetap aktif
        if (product.soldOut) {
            ['add-to-cart-btn', 'add-to-cart-btn-mobile'].forEach(id => {
                const btn = document.getElementById(id);
                if (!btn) return;
                btn.disabled = true;
                btn.classList.add('btn-disabled-solid');
                const icon = btn.querySelector('.material-symbols-outlined');
                if (icon) icon.textContent = 'remove_shopping_cart';
                Array.from(btn.childNodes).forEach(node => {
                    if (node.nodeType === 3 && node.textContent.trim()) {
                        node.textContent = ' Stok Habis ';
                    }
                });
            });

            ['shopee-link', 'shopee-link-mobile'].forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                el.removeAttribute('href');
                el.setAttribute('aria-disabled', 'true');
                el.setAttribute('tabindex', '-1');
                el.classList.add('btn-disabled-outline');
            });
        }

        // Render Gallery Thumbnails
        const thumbGallery = document.getElementById('thumbnail-gallery');

        if (thumbGallery && product.images) {
            thumbGallery.className = "flex overflow-x-auto gap-3 pb-2 scrollbar-hide";
            thumbGallery.innerHTML = product.images.map((imgSrc, idx) => `
                <div id="thumb-${idx}" class="thumb-item flex-shrink-0 w-20 sm:w-24 cursor-pointer aspect-square rounded-xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-brand-blue' : 'border-transparent opacity-60 hover:opacity-100'}"
                     onclick="changeMainImage(${idx}, '${imgSrc}')">
                    <img src="${imgSrc}" class="w-full h-full object-cover">
                </div>
            `).join('');
        }

        // Dynamic Specs Description
        const specList = document.getElementById('spec-list');
        if (specList && product.specs) {
            specList.innerHTML = product.specs.map(s => `
                <li class="flex items-center gap-3 text-slate-900 dark:text-slate-100">
                    <span class="material-symbols-outlined text-brand-blue dark:text-brand-gold">check_circle</span>
                    <span>${s}</span>
                </li>
            `).join('');
        }

        // Dynamic Text Description
        const productDesc = document.getElementById('product-desc');
        if (productDesc && product.desc) {
            productDesc.textContent = product.desc;
        }

        // Render Related Products
        renderRelatedProducts(product.id, product.category);

        // Touch swipe for mobile
        const imgContainer = document.querySelector('#main-image')?.parentElement;
        if (imgContainer && product.images?.length > 1) {
            let startX = 0, startY = 0;
            imgContainer.addEventListener('touchstart', (e) => {
                const touch = e.touches[0];
                startX = touch.clientX;
                startY = touch.clientY;
            }, { passive: true });
            imgContainer.addEventListener('touchend', (e) => {
                const touch = e.changedTouches[0];
                const deltaX = touch.clientX - startX;
                const deltaY = touch.clientY - startY;
                if (Math.abs(deltaY) > Math.abs(deltaX)) return;
                if (deltaX > 60) prevImage();
                else if (deltaX < -60) nextImage();
            }, { passive: true });
        }

    } else if (window.location.pathname.includes('product-detail.html')) {
        window.location.href = 'shop.html';
    }
}

function renderRelatedProducts(currentId, category) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;

    // Filter products: same category, different ID
    let related = GLOBAL_PRODUCTS.filter(p => p.id !== currentId);

    // Sort: items from SAME category first, then others
    const sameCategory = related.filter(p => p.category === category);
    const otherCategories = related.filter(p => p.category !== category);

    // Shuffle helper
    const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

    // Combine and take 4
    let finalRelated = [...shuffle(sameCategory), ...shuffle(otherCategories)].slice(0, 4);

relatedContainer.innerHTML = finalRelated.map(p => productCardTemplate(p)).join('');
}

// Gallery Changer
function changeMainImage(idx, src) {
    const mainImg = document.getElementById('main-image');
    if (!mainImg) return;

    activeIdx = idx;

    // Smooth transition effect
    mainImg.style.opacity = '0.5';
    setTimeout(() => {
        mainImg.src = src;
        mainImg.style.opacity = '1';
    }, 150);

    // Update active thumbnail state
    document.querySelectorAll('.thumb-item').forEach(thumb => {
        thumb.classList.remove('border-brand-blue');
        thumb.classList.add('border-transparent', 'opacity-60');
    });

    const activeThumb = document.getElementById(`thumb-${idx}`);
    if (activeThumb) {
        activeThumb.classList.add('border-brand-blue');
        activeThumb.classList.remove('border-transparent', 'opacity-60');
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    // Sync with lightbox if open
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCounter = document.getElementById('lightbox-counter');
    if (lightbox && !lightbox.classList.contains('pointer-events-none')) {
        lbImg.src = src;
        lbCounter.textContent = `${activeIdx + 1} / ${currentProductData.images.length}`;
    }
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCounter = document.getElementById('lightbox-counter');

    if (!lightbox || !currentProductData) return;

    lbImg.src = currentProductData.images[activeIdx];
    lbCounter.textContent = `${activeIdx + 1} / ${currentProductData.images.length}`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

function nextImage() {
    if (!currentProductData || !currentProductData.images) return;
    activeIdx = (activeIdx + 1) % currentProductData.images.length;
    changeMainImage(activeIdx, currentProductData.images[activeIdx]);
}

function prevImage() {
    if (!currentProductData || !currentProductData.images) return;
    activeIdx = (activeIdx - 1 + currentProductData.images.length) % currentProductData.images.length;
    changeMainImage(activeIdx, currentProductData.images[activeIdx]);
}

// 6. Trending Section (Index Page)
function initTrending() {
    const trendingGrid = document.getElementById('trending-grid');
    if (!trendingGrid) return;

    // Show specific products as trending
    const trendingIds = [1, 6, 9, 10];
    const trendingProducts = GLOBAL_PRODUCTS.filter(p => trendingIds.includes(p.id));

trendingGrid.innerHTML = trendingProducts.map((p, idx) => productCardTemplate(p, {
        className: 'animate-fade-in-up',
        style: `animation-delay: ${idx * 50}ms`
    })).join('');
}

const counters = document.querySelectorAll('.counter');
const speed = 200; // Semakin tinggi semakin lambat

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const isDecimal = counter.getAttribute('data-decimal');
    let count = 0;

    // Tentukan kecepatan increment
    const increment = target / speed;

    const updateCount = () => {
        count += increment;

        if (count < target) {
            // Jika desimal (untuk rating 4.9)
            if (isDecimal) {
                counter.innerText = count.toFixed(1);
            } else {
                // Jika ribuan (tambah format titik jika perlu)
                counter.innerText = Math.ceil(count).toLocaleString('id-ID');
            }
            setTimeout(updateCount, 1);
        } else {
            // Pastikan angka terakhir pas dengan target
            counter.innerText = isDecimal ? target : target.toLocaleString('id-ID');
        }
    };

    updateCount();
};


// Intersection Observer agar animasi jalan pas di-scroll ke area tersebut
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target); // Hanya jalan sekali
        }
    });
}, { threshold: 1 });

counters.forEach(counter => observer.observe(counter));

// --- Cart System ---
let cart = JSON.parse(localStorage.getItem('hq_cart')) || [];

function saveCart() {
    localStorage.setItem('hq_cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badges = document.querySelectorAll('#nav-cart-badge');
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badges.forEach(badge => {
        if (totalQty > 0) {
            badge.textContent = totalQty;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    });
}

function addToCart(productId, customName, coverId, customNote = '', customFont = '', quranType = '') {
    const product = GLOBAL_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const coverData = coverId ? COVER_DESIGNS.find(c => c.id === coverId) : null;

    // Each customization is unique, so always push new item
    cart.push({
        id: product.id,
        name: product.name,
        category: product.category,
        priceCrt: product.priceCrt,
        priceWa: product.priceWa,
        img: product.img,
        qty: 1,
        customName: customName || '',
        customNote: customNote || '',
        customFont: customFont || '',
        coverName: coverData ? coverData.name : '',
        coverCategory: coverData ? coverData.category : '',
        coverImg: coverData ? coverData.img : '',
        quranType: quranType || ''
    });
    saveCart();
    showToast(`${product.name} berhasil ditambahkan ke keranjang!`);

    // Facebook Pixel: AddToCart
    if (typeof fbq !== 'undefined') {
        fbq('track', 'AddToCart', {
            content_name: product.name,
            content_category: product.category,
            content_ids: [product.id],
            content_type: 'product',
            value: parseFloat(product.priceWa.replace(/[^\d]/g, '')),
            currency: 'IDR'
        });
    }
}

// --- Toast Notification ---
function showToast(message) {
    // Remove existing toast
    const existing = document.getElementById('cart-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.className = 'fixed top-6 left-1/2 z-[300] bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 font-semibold toast-in';
    toast.innerHTML = `
        <span class="material-symbols-outlined">check_circle</span>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('toast-in');
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// --- Custom Name & Cover Modal ---
let modalProductId = null;
let modalSelectedCoverId = null;
let modalCoverFilter = 'Semua';

function openCustomModal(productId, quranType) {
    let url = `personalize.html?id=${productId}`;
    if (quranType) url += `&quranType=${quranType}`;
    window.location.href = url;
}

function initPersonalizationPage() {
    const personalizeContainer = document.getElementById('personalize-product-name');
    if (!personalizeContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const quranType = urlParams.get('quranType') || '';
    const product = GLOBAL_PRODUCTS.find(p => p.id === productId);

    if (product) {
        modalProductId = product.id;
        modalSelectedCoverId = null;
        modalCoverFilter = 'Semua';

        // Set Product Details
        const setEl = (id, content, attr = 'textContent') => {
            const el = document.getElementById(id);
            if (el) el[attr] = content;
        };

        setEl('personalize-product-img', product.img, 'src');
        setEl('personalize-product-name', product.name);
        setEl('personalize-product-category', product.category);
        setEl('personalize-product-price', product.priceWa || product.priceStr);

        const backLink = document.getElementById('back-to-product');
        if (backLink) backLink.href = `product-detail.html?id=${product.id}`;

        // Edit mode: pre-fill form with existing cart item data
        const editMode = urlParams.get('edit');
        let editIdx = -1;
        if (editMode) {
            editIdx = parseInt(sessionStorage.getItem('hq_edit_cart_idx') || '-1');
            if (editIdx >= 0 && cart[editIdx]) {
                const editItem = cart[editIdx];
                const nameInput = document.getElementById('custom-name-input');
                if (nameInput && editItem.customName) nameInput.value = editItem.customName;

                const noteInput = document.getElementById('custom-note-input');
                if (noteInput && editItem.customNote) noteInput.value = editItem.customNote;

                const fontInput = document.getElementById('custom-font-input');
                if (fontInput && editItem.customFont) fontInput.value = editItem.customFont;

                if (editItem.coverName) {
                    const cover = COVER_DESIGNS.find(c => c.name === editItem.coverName && c.category === editItem.coverCategory);
                    if (cover) {
                        setTimeout(() => selectModalCover(cover.id), 100);
                    }
                }
            }
        }

        // Setup Form
        const nameInput = document.getElementById('custom-name-input');
        if (nameInput) {
            nameInput.addEventListener('input', updateConfirmBtn);
        }

        const confirmBtn = document.getElementById('confirm-add-to-cart');
        if (confirmBtn) {
            confirmBtn.onclick = () => {
                const nameInput = document.getElementById('custom-name-input');
                const customName = nameInput ? nameInput.value.trim() : '';
                const hasCover = modalSelectedCoverId !== null;

                if (!customName) {
                    showFieldError('custom-name-input', 'Mohon isi nama untuk custom Al-Quran');
                    return;
                }

                if (!hasCover) {
                    showFieldError('modal-cover-grid', 'Silakan pilih desain cover favoritmu');
                    return;
                }

                const customNote = document.getElementById('custom-note-input')?.value.trim() || '';
                const customFont = document.getElementById('custom-font-input')?.value.trim() || '';

                const cover = COVER_DESIGNS.find(c => c.id === modalSelectedCoverId);

                // Edit mode: replace item at stored index instead of pushing new
                if (editIdx >= 0 && cart[editIdx]) {
                    cart[editIdx] = {
                        ...cart[editIdx],
                        customName,
                        customNote,
                        customFont,
                        coverName: cover ? cover.name : '',
                        coverCategory: cover ? cover.category : '',
                        coverImg: cover ? cover.img : cart[editIdx].img,
                    };
                    saveCart();
                    showToast('Item berhasil diperbarui!');
                    sessionStorage.removeItem('hq_edit_cart_idx');
                } else {
                    addToCart(product.id, customName, modalSelectedCoverId, customNote, customFont, quranType);
                }
                window.location.href = 'cart.html';
            };
        }

        const removeBtn = document.getElementById('remove-cover-selection');
        if (removeBtn) {
            removeBtn.onclick = removeModalCoverSelection;
        }

        renderModalCoverFilters();
        renderModalCoverGrid();
        updateConfirmBtn();

    } else {
        window.location.href = 'shop.html';
    }
}

function closeCustomModal() {
    const modal = document.getElementById('custom-modal');
    const content = document.getElementById('custom-modal-content');
    if (!modal) return;

    content.classList.remove('scale-100');
    content.classList.add('scale-95');
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');

    setTimeout(() => {
        modal.classList.add('pointer-events-none');
        document.body.style.overflow = '';
    }, 300);
}

function renderModalCoverFilters() {
    const container = document.getElementById('modal-cover-filters');
    if (!container) return;

    const product = GLOBAL_PRODUCTS.find(p => p.id === modalProductId);
    const productCategory = product ? (product.category || "").toLowerCase() : "";

    let availableCovers = [];
    if (productCategory.includes("iqro")) {
        availableCovers = COVER_DESIGNS.filter(c => c.img.includes("img/coveriqro/"));
    } else if (productCategory.includes("juz amma")) {
        availableCovers = COVER_DESIGNS.filter(c => c.img.includes("img/coverjza/"));
    } else {
        // Al Quran or others default to main cover folder
        availableCovers = COVER_DESIGNS.filter(c => c.img.includes("img/cover/") && !c.img.includes("coveriqro") && !c.img.includes("coverjza"));
    }

    const categories = ['Semua', ...new Set(availableCovers.map(c => c.category))];

    container.innerHTML = categories.map(cat => {
        const isActive = cat === modalCoverFilter;
        const activeClass = isActive
            ? 'bg-brand-blue text-white dark:bg-brand-gold dark:text-black shadow-lg font-medium'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium';
        return `<button onclick="filterModalCovers('${cat.replace(/'/g, "\\'")}')"
            class="whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${activeClass}">${cat}</button>`;
    }).join('');
}

function filterModalCovers(category) {
    modalCoverFilter = category;
    renderModalCoverFilters();
    renderModalCoverGrid();
}

function renderModalCoverGrid() {
    const grid = document.getElementById('modal-cover-grid');
    if (!grid) return;

    const product = GLOBAL_PRODUCTS.find(p => p.id === modalProductId);
    const productCategory = product ? (product.category || "").toLowerCase() : "";

    let covers = [];
    if (productCategory.includes("iqro")) {
        covers = COVER_DESIGNS.filter(c => c.img.includes("img/coveriqro/"));
    } else if (productCategory.includes("juz amma")) {
        covers = COVER_DESIGNS.filter(c => c.img.includes("img/coverjza/"));
    } else {
        // Al Quran or others default to main cover folder
        covers = COVER_DESIGNS.filter(c => c.img.includes("img/cover/") && !c.img.includes("coveriqro") && !c.img.includes("coverjza"));
    }

    // Filter by UI category tab
    if (modalCoverFilter !== 'Semua') {
        covers = covers.filter(c => c.category === modalCoverFilter);
    }

    grid.innerHTML = covers.map(c => {
        const isSelected = c.id === modalSelectedCoverId;
        const selectedBorder = isSelected ? 'ring-3 ring-brand-blue dark:ring-brand-gold' : 'border border-slate-200 dark:border-slate-700';
        return `
            <div class="modal-cover-card rounded-xl overflow-hidden ${selectedBorder} ${isSelected ? 'selected' : ''}"
                 onclick="selectModalCover(${c.id})">
                <div class="cover-check bg-brand-blue dark:bg-brand-gold text-white dark:text-black">
                    <span class="material-symbols-outlined text-[0.9rem]">check</span>
                </div>
                <div class="aspect-[3/4] bg-slate-100 dark:bg-slate-800">
                    <img src="${c.img}" alt="${c.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-2 bg-white dark:bg-slate-900">
                    <p class="text-[0.85rem] font-medium text-slate-900 dark:text-white text-center">${c.name}</p>
                </div>
            </div>
        `;
    }).join('');
}

function selectModalCover(coverId) {
    modalSelectedCoverId = coverId;
    const cover = COVER_DESIGNS.find(c => c.id === coverId);

    // Update preview
    const preview = document.getElementById('selected-cover-preview');
    if (preview && cover) {
        preview.classList.remove('hidden');
        document.getElementById('selected-cover-img').src = cover.img;
        document.getElementById('selected-cover-name').textContent = cover.name;
        document.getElementById('selected-cover-category').textContent = cover.category;
    }

    // Re-render grid to show selection
    renderModalCoverGrid();
    updateConfirmBtn();
}

function removeModalCoverSelection() {
    modalSelectedCoverId = null;
    document.getElementById('selected-cover-preview').classList.add('hidden');
    renderModalCoverGrid();
    updateConfirmBtn();
}

function updateConfirmBtn() {
    const confirmBtn = document.getElementById('confirm-add-to-cart');
    if (!confirmBtn) return;
    // Keep it enabled to show validation on click
    confirmBtn.disabled = false;
}

function confirmAddToCart() {
    const nameInput = document.getElementById('custom-name-input');
    const customName = nameInput ? nameInput.value.trim() : '';

    if (!customName || !modalSelectedCoverId) {
        const validationMsg = document.getElementById('modal-validation-msg');
        if (validationMsg) validationMsg.classList.remove('hidden');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const quranType = urlParams.get('quranType') || '';

    addToCart(modalProductId, customName, modalSelectedCoverId, '', '', quranType);
    window.location.href = 'cart.html';
}

// Init modal event listeners (called from DOMContentLoaded)
function initCustomModal() {
    const modal = document.getElementById('custom-modal');
    if (!modal) return;

    // Close button
    const closeBtn = document.getElementById('custom-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeCustomModal);

    // Backdrop click
    const backdrop = document.getElementById('custom-modal-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeCustomModal);

    // ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
            closeCustomModal();
        }
    });

    // Name input live validation
    const nameInput = document.getElementById('custom-name-input');
    if (nameInput) {
        nameInput.addEventListener('input', updateConfirmBtn);
    }

    // Remove cover selection
    const removeBtn = document.getElementById('remove-cover-selection');
    if (removeBtn) removeBtn.addEventListener('click', removeModalCoverSelection);

    // Confirm button
    const confirmBtn = document.getElementById('confirm-add-to-cart');
    if (confirmBtn) confirmBtn.addEventListener('click', confirmAddToCart);
}

// === Quran Picker Modal ===
let quranPickerProductId = null;
let selectedQuranType = 'latin';

function openQuranPickerModal(productId, variants) {
    quranPickerProductId = productId;
    const modal = document.getElementById('quran-picker-modal');
    if (!modal) return;

    const optLatin = document.getElementById('quran-opt-latin');
    const optTanpa = document.getElementById('quran-opt-tanpa-latin');
    const hasLatin = variants.includes('latin');
    const hasTanpa = variants.includes('tanpa-latin');

    // Show/hide options based on available variants
    if (optLatin) optLatin.style.display = hasLatin ? '' : 'none';
    if (optTanpa) optTanpa.style.display = hasTanpa ? '' : 'none';

    // Auto-select first available variant
    const defaultType = hasLatin ? 'latin' : 'tanpa-latin';
    selectedQuranType = defaultType;
    selectQuranType(defaultType);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeQuranPickerModal() {
    const modal = document.getElementById('quran-picker-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function selectQuranType(type) {
    selectedQuranType = type;
    document.querySelectorAll('.quran-picker-card').forEach(el => {
        el.classList.remove('selected');
        el.classList.remove('border-brand-blue');
        el.classList.add('border-transparent');
    });
    const target = type === 'latin'
        ? document.getElementById('quran-opt-latin')
        : document.getElementById('quran-opt-tanpa-latin');
    if (target) {
        target.classList.add('selected');
        target.classList.remove('border-transparent');
        target.classList.add('border-brand-blue');
        const radio = target.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    }
}

function confirmQuranPicker() {
    closeQuranPickerModal();
    if (quranPickerProductId) {
        openCustomModal(quranPickerProductId, selectedQuranType);
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeQuranPickerModal();
});

function updateCartQty(idx, newQty) {
    if (newQty < 1) {
        cart.splice(idx, 1);
    } else {
        cart[idx].qty = parseInt(newQty);
    }
    saveCart();
    renderCart();

    // Reset ongkir lama, disable pilihan kurir, munculin tombol update
    selectedCourierPrice = 0;
    selectedCourierName = '';
    selectedCourierService = '';
    updateGrandTotal();

    document.querySelectorAll('.shipping-option').forEach(el => {
        el.style.opacity = '0.4';
        el.style.pointerEvents = 'none';
        const radio = el.querySelector('input[type="radio"]');
        if (radio) radio.disabled = true;
    });

    const btn = document.getElementById('btn-update-ongkir');
    if (btn) btn.classList.remove('hidden');
}

function editCartItem(idx) {
    const item = cart[idx];
    if (!item) return;
    sessionStorage.setItem('hq_edit_cart_idx', idx);
    window.location.href = `personalize.html?id=${item.id}&edit=1`;
}

function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    const emptyCartView = document.getElementById('empty-cart');
    const cartItemsWrapper = document.getElementById('cart-items');

    if (!cartContainer || !emptyCartView || !cartItemsWrapper) return;

    if (cart.length === 0) {
        cartContainer.classList.add('hidden');
        emptyCartView.classList.remove('hidden');
        emptyCartView.classList.add('flex');
        return;
    } else {
        cartContainer.classList.remove('hidden');
        emptyCartView.classList.add('hidden');
        emptyCartView.classList.remove('flex');
    }

    let subtotal = 0;

    // Parse price safely
    const parsePrice = (priceCrt) => {
        return parseFloat(priceCrt.replace(/[^0-9]/g, ''));
    };
    const formatPrice = (amount) => {
        return `Rp${amount.toLocaleString('id-ID')}`;
    };

    cartItemsWrapper.innerHTML = cart.map((item, idx) => {
        // Use WA price since checkout goes to WA
        const priceNum = parsePrice(item.priceWa || item.priceCrt);
        subtotal += priceNum * item.qty;

        return `
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl relative group">
                <button onclick="editCartItem(${idx})" class="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-blue/10 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold hover:bg-brand-blue/20 dark:hover:bg-brand-gold/20 transition-colors text-xs font-semibold z-10" title="Ubah">
                    <span class="material-symbols-outlined text-[0.9rem]">edit</span>ubah
                </button>
                <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                    <img src="${item.coverImg || item.img}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 w-full">
                    <h3 class="font-bold text-lg text-slate-900 dark:text-white leading-tight">${item.name}</h3>
                    ${item.customName ? `<div class="flex items-center gap-1.5 mt-1"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">badge</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Nama: ${item.customName}</span></div>` : ''}
                    ${item.coverName ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">palette</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Cover: ${item.coverName} (${item.coverCategory})</span></div>` : ''}
                    ${item.quranType ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">menu_book</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Varian: ${item.quranType === 'latin' ? 'Latin' : 'Tanpa Latin'}</span></div>` : ''}
                    ${item.customNote ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">edit_note</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Ucapan: ${item.customNote}</span></div>` : ''}
                    ${item.customFont ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">font_download</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Font: ${item.customFont}</span></div>` : ''}
                    <div class="text-brand-blue dark:text-brand-gold font-bold text-sm mt-1 mb-3">${formatPrice(priceNum)} <span class="text-xs text-slate-400 font-normal line-through ml-1">${item.priceCrt}</span></div>
                    
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center gap-2">
                            <div class="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-1 shadow-sm w-fit">
                                <button onclick="updateCartQty(${idx}, ${item.qty - 1})" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors"><span class="material-symbols-outlined text-[1rem]">remove</span></button>
                                <input type="number" readonly value="${item.qty}" class="w-10 text-center text-sm font-bold bg-transparent text-slate-900 dark:text-white outline-none border-none pointer-events-none">
                                <button onclick="updateCartQty(${idx}, ${item.qty + 1})" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors"><span class="material-symbols-outlined text-[1rem]">add</span></button>
                            </div>
                            <button onclick="updateCartQty(${idx}, 0)" class="text-slate-500 hover:text-red-500 transition-colors p-2 shrink-0">
                                <span class="material-symbols-outlined text-[1.2rem]">delete</span>
                            </button>
                        </div>
                        <div class="text-slate-900 dark:text-white font-black text-right pl-2 shrink-0">${formatPrice(priceNum * item.qty)}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.cart-count-summary').forEach(el => el.textContent = totalQty);

    document.querySelectorAll('.cart-subtotal').forEach(el => el.textContent = formatPrice(subtotal));

    updateCartTotalUI();
}



// --- Notification Modal ---
function showAlert(title, text, type = 'warning') {
    const existing = document.getElementById('hamzah-alert-modal');
    if (existing) existing.remove();

    const colors = {
        warning: 'text-amber-500',
        error: 'text-rose-500',
        success: 'text-emerald-500',
        info: 'text-brand-blue dark:text-brand-gold'
    };
    const icons = {
        warning: 'warning',
        error: 'error',
        success: 'check_circle',
        info: 'info'
    };

    const modal = document.createElement('div');
    modal.id = 'hamzah-alert-modal';
    modal.className = 'fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-none';
    modal.innerHTML = `
        <div id="hamzah-alert-box" class="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2.5rem] p-10 shadow-2xl transform transition-all duration-400 scale-90 opacity-0">
            <div class="flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-8">
                    <span class="material-symbols-outlined text-5xl ${colors[type] || colors.warning}">${icons[type] || icons.warning}</span>
                </div>
                <h3 class="text-2xl font-display font-black text-slate-900 dark:text-white mb-3">${title}</h3>
                <p class="text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed">${text}</p>
                <button id="close-alert-btn" class="w-full bg-brand-blue dark:bg-white text-white dark:text-black font-bold py-4 rounded-3xl shadow-lg hover:shadow-brand-blue/30 transition-all hover:-translate-y-1">
                    Oke, Mengerti
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Show with small delay
    setTimeout(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
        const box = document.getElementById('hamzah-alert-box');
        box.classList.remove('scale-90', 'opacity-0');
        box.classList.add('scale-100', 'opacity-100');
    }, 10);

    const close = () => {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        const box = document.getElementById('hamzah-alert-box');
        box.classList.remove('scale-100', 'opacity-100');
        box.classList.add('scale-90', 'opacity-0');
        setTimeout(() => modal.remove(), 400);
    };

    document.getElementById('close-alert-btn').onclick = close;
    modal.onclick = (e) => { if (e.target === modal) close(); };
}

function initCart() {
    updateCartBadge();
    const cartContainer = document.getElementById('cart-container');
    if (!cartContainer) return; // Only run on cart.html

    renderCart();

    // Checkout to WA binding
    const loadingOverlay = document.getElementById('loading-overlay');

    const btnsCheckout = document.querySelectorAll('.btn-checkout-wa');
    btnsCheckout.forEach(btnCheckout => {
        btnCheckout.addEventListener('click', async () => {
            if (cart.length === 0) {
                return showAlert("Keranjang Kosong", "Wah, keranjang belanja Anda masih kosong nih. Yuk cari Al-Quran favoritmu!", "info");
            }

            try {
                const name = document.getElementById('cust-name').value.trim();
                const phone = document.getElementById('cust-phone').value.trim();
                const address = document.getElementById('cust-address').value.trim();
                const getSelectText = (id) => {
                const el = document.getElementById('cust-' + id);
                if (!el || el.selectedIndex <= 0) return '';
                const text = el.options[el.selectedIndex].text;
                if (text.includes('Pilih ') || text.includes('Memuat')) return '';
                return text;
            };

            const province = getSelectText('province');
            const city = getSelectText('city');
            const district = getSelectText('district');
            const subdistrict = getSelectText('subdistrict');

            const courierPrice = selectedCourierPrice || 0;
            const courierLabel = selectedCourierName ? `${selectedCourierName} ${selectedCourierService}` : '';

            if (!name) return showFieldError('cust-name');
            if (!phone) return showFieldError('cust-phone');
            if (!address) return showFieldError('cust-address');
            if (!document.querySelector('input[name="payment-method"]:checked')) {
                showFieldError('cust-name');
                return showAlert('Pilih Pembayaran', 'Silakan pilih metode pembayaran.', 'info');
            }

            if (!selectedCourierName) {
                return showAlert('Pilih Kurir', 'Silakan pilih kurir dan update ongkos kirim sebelum checkout.', 'info');
            }

            const formatPrice = (amount) => `Rp${amount.toLocaleString('id-ID')}`;
            const parsePrice = (p) => parseFloat(p.replace(/[^0-9]/g, ''));

            let subtotal = 0;
            let message = `ADA ORDER BARU NIH!\nOrder Website hamzahquran.com\n\n`;
            message += `*Data Penerima:*\n`;
            message += `- Nama: ${name}\n`;
            message += `- No. WA: ${phone}\n`;
            message += `- Alamat: ${address}\n`;
            const regionParts = [subdistrict, district, city, province].filter(p => p !== '');
            if (regionParts.length > 0) {
                message += `- Wilayah: ${regionParts.join(', ')}\n`;
            }
            message += `\n`;

            message += `*Detail Pesanan:*\n`;

            cart.forEach((c, i) => {
                const priceNum = parsePrice(c.priceWa || c.priceCrt);
                const totalItem = priceNum * c.qty;
                subtotal += totalItem;
                message += `${i + 1}. ${c.name}\n`;
                if (c.customName) message += `   - Nama: ${c.customName}\n`;
                if (c.coverName) message += `   - Cover: ${c.coverName} (${c.coverCategory})\n`;
                if (c.quranType) message += `   - Varian: ${c.quranType === 'latin' ? 'Latin' : 'Tanpa Latin'}\n`;
                if (c.customNote) message += `   - Ucapan: ${c.customNote}\n`;
                if (c.customFont) message += `   - Font: ${c.customFont}\n`;
                message += `   ${c.qty} x ${formatPrice(priceNum)} = ${formatPrice(totalItem)}\n`;
            });

            const paymentRadio = document.querySelector('input[name="payment-method"]:checked');
            const paymentMethodValue = paymentRadio?.value || 'xenith';
            const paymentLabels = { xenith: 'QRIS & Transfer Bank', cod: 'COD' };
            const paymentMethodText = paymentLabels[paymentMethodValue] || 'QRIS & Transfer Bank';

            const shippingDiscount = getShippingDiscount(courierPrice, subtotal);
            const ongkirAfterSubsidy = courierPrice - shippingDiscount;
            const voucher = getVoucherDiscount(subtotal);
            const codFee = paymentMethodValue === 'cod' ? Math.round((subtotal + ongkirAfterSubsidy - voucher) * 0.04) : 0;
            const grandTotal = subtotal + ongkirAfterSubsidy + codFee - voucher;

            const isGratisOngkir = getAutoGratisOngkir(subtotal) !== null;
            const goLabel = getGratisOngkirLabel(subtotal);
            const vchLabel = getAutoVoucherLabel(subtotal);
            const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
            // Harga katalog (sebelum diskon), buat rincian di pesanan-saya.html.
            const normalSubtotal = cart.reduce((sum, item) => sum + (parsePrice(item.priceCrt || item.priceWa) * item.qty), 0);

            message += `==============\n`;
            message += `*SUBTOTAL: ${formatPrice(subtotal)}*\n`;
            if (voucher > 0) {
                message += `*${vchLabel || 'Voucher XTRA'}:* -${formatPrice(voucher)}\n`;
            }
            message += `*Ongkos Kirim:* ${courierLabel ? `${courierLabel} — ${formatPrice(courierPrice)}` : formatPrice(courierPrice)}\n`;
            if (shippingDiscount > 0) {
                if (isGratisOngkir) {
                    message += `*${goLabel}:* -${formatPrice(shippingDiscount)}\n`;
                } else {
                    message += `*Subsidi Ongkir (${totalQty} pcs × Rp20.000):* -${formatPrice(shippingDiscount)}\n`;
                }
            }
            message += `*Total Ongkir:* ${ongkirAfterSubsidy === 0 ? 'Gratis 🎉' : formatPrice(ongkirAfterSubsidy)}\n`;
            if (codFee > 0) {
                message += `*Biaya Admin Bayar di Rumah (4%):* ${formatPrice(codFee)}\n`;
            }
            message += `*TOTAL PEMBAYARAN:* ${formatPrice(grandTotal)}\n\n`;

            message += `*Metode Pembayaran:* ${paymentMethodText}\n\n`;

            // === XENITH ONLINE PAYMENT ===
            // Order dicatat di server (Sheets), customer diarahkan ke halaman bayar Xenith.
            if (paymentMethodValue === 'xenith') {
                loadingOverlay?.classList.remove('hidden');
                loadingOverlay?.classList.add('flex');
                try {
                    const payRes = await fetch('/api/xenith-create', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            name, phone, address,
                            region: regionParts.join(', '),
                            courier: courierLabel,
                            items: cart.map(c => ({
                                name: c.name,
                                qty: c.qty,
                                price: parsePrice(c.priceWa || c.priceCrt),
                                variant: c.quranType ? (c.quranType === 'latin' ? 'Latin' : 'Tanpa Latin') : '',
                                note: [
                                    c.customName && `Nama: ${c.customName}`,
                                    c.coverName && `Cover: ${c.coverName}`,
                                    c.customNote && `Ucapan: ${c.customNote}`,
                                    c.customFont && `Font: ${c.customFont}`
                                ].filter(Boolean).join(', ')
                            })),
                            subtotal,
                            ongkir: ongkirAfterSubsidy,
                            voucher,
                            grandTotal
                        })
                    });
                    const pay = await payRes.json();
                    if (!payRes.ok || !pay.paymentLinkUrl) throw new Error(pay.error || 'Gagal membuat pembayaran');

                    // Telegram: detail order lengkap + Order ID dari server
                    try {
                        await fetch('/api/notify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                text: message + `*Order ID:* ${pay.orderId}\n*Status:* Menunggu pembayaran online`,
                                parse_mode: 'Markdown'
                            })
                        });
                    } catch (err) { console.error('Telegram notify error:', err); }

                    // Riwayat untuk pesanan-saya.html
                    const xenithOrder = {
                        name, phone, address,
                        paymentMethod: 'xenith',
                        subtotal,
                        normalSubtotal,
                        ongkir: ongkirAfterSubsidy,
                        courier: courierLabel,
                        subsidy: shippingDiscount,
                        subsidyQty: isGratisOngkir ? 0 : totalQty,
                        voucher,
                        voucherLabel: vchLabel,
                        gratisOngkirLabel: goLabel,
                        codFee: 0,
                        grandTotal,
                        cart: cart.map(item => ({
                            name: item.name,
                            qty: item.qty,
                            price: parsePrice(item.priceWa || item.priceCrt),
                            priceCrt: parsePrice(item.priceCrt || item.priceWa),
                            img: item.img || '',
                            coverImg: item.coverImg || '',
                            quranType: item.quranType || '',
                            customName: item.customName || '',
                            coverName: item.coverName || '',
                            coverCategory: item.coverCategory || '',
                            customNote: item.customNote || '',
                            customFont: item.customFont || ''
                        })),
                        orderId: pay.orderId,
                        paymentUrl: pay.paymentLinkUrl,
                        createdAt: new Date().toISOString(),
                        status: 'Menunggu Pembayaran'
                    };
                    const prevOrders = JSON.parse(localStorage.getItem('hq_orders') || '[]');
                    prevOrders.unshift(xenithOrder);
                    localStorage.setItem('hq_orders', JSON.stringify(prevOrders.slice(0, 5)));

                    if (typeof fbq !== 'undefined') {
                        fbq('track', 'Purchase', {
                            value: subtotal,
                            currency: 'IDR',
                            contents: cart.map(item => ({ id: item.id, quantity: item.qty })),
                            content_type: 'product'
                        });
                    }

                    cart = [];
                    localStorage.setItem('hq_cart', JSON.stringify(cart));
                    updateCartTotalUI();

                    window.location.href = pay.paymentLinkUrl;
                    return;
                } catch (err) {
                    console.error('Xenith checkout error:', err);
                    loadingOverlay?.classList.add('hidden');
                    loadingOverlay?.classList.remove('flex');
                    showAlert('Pembayaran Gagal', 'Pembayaran online belum bisa dibuat. Keranjang kamu aman, coba lagi atau pilih metode pembayaran lain.', 'error');
                    return;
                }
            }

            // Show loading, mulai kirim notifikasi
            loadingOverlay?.classList.remove('hidden');
            loadingOverlay?.classList.add('flex');

            // === TELEGRAM NOTIFICATION ===
            try {
                await fetch('/api/notify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        text: message,
                        parse_mode: 'Markdown'
                    })
                });
            } catch(err) {
                console.error('Telegram notify error:', err);
            }

            // === SIMPAN ORDER KE SESSION STORAGE ===
            const orderData = {
                name,
                phone,
                address,
                paymentMethod: paymentMethodValue,
                subtotal,
                normalSubtotal,
                ongkir: ongkirAfterSubsidy,
                courier: courierLabel,
                subsidy: shippingDiscount,
                subsidyQty: isGratisOngkir ? 0 : totalQty,
                voucher: voucher,
                voucherLabel: vchLabel,
                gratisOngkirLabel: goLabel,
                codFee,
                grandTotal,
                cart: cart.map(item => ({
                    name: item.name,
                    qty: item.qty,
                    price: parsePrice(item.priceWa || item.priceCrt),
                    priceCrt: parsePrice(item.priceCrt || item.priceWa),
                    img: item.img || '',
                    coverImg: item.coverImg || '',
                    quranType: item.quranType || '',
                    customName: item.customName || '',
                    coverName: item.coverName || '',
                    coverCategory: item.coverCategory || '',
                    customNote: item.customNote || '',
                    customFont: item.customFont || ''
                }))
            };
            // Tetap simpan ke sessionStorage untuk thank-you page
            sessionStorage.setItem('hq_order', JSON.stringify(orderData));

            // Simpan ke localStorage untuk pesanan-saya.html (max 5 pesanan)
            const orderId = 'HQ-' + Date.now();
            const orderWithMeta = {
                ...orderData,
                orderId,
                createdAt: new Date().toISOString(),
                status: 'Menunggu Pembayaran'
            };

            const existingOrders = JSON.parse(localStorage.getItem('hq_orders') || '[]');
            existingOrders.unshift(orderWithMeta);
            const trimmed = existingOrders.slice(0, 5);
            localStorage.setItem('hq_orders', JSON.stringify(trimmed));

            // === FACEBOOK PIXEL ===
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Purchase', {
                    value: subtotal,
                    currency: 'IDR',
                    contents: cart.map(item => ({
                        id: item.id,
                        quantity: item.qty
                    })),
                    content_type: 'product'
                });
            }

            // === KOSONGKAN CART ===
            cart = [];
            localStorage.setItem('hq_cart', JSON.stringify(cart));
            updateCartTotalUI();

            // === REDIRECT KE THANK YOU PAGE ===
            window.location.href = 'thank-you.html';
            } catch (err) {
                console.error('Checkout error:', err);
                loadingOverlay?.classList.add('hidden');
                loadingOverlay?.classList.remove('flex');
                showAlert('Oops!', 'Terjadi kesalahan. Silakan coba lagi.', 'error');
            }
        });
    });

    // Attach listeners
    const formFields = [
        'cust-name', 'cust-phone', 'cust-address', 'cust-province',
        'cust-city', 'cust-district', 'cust-subdistrict'
    ];
    formFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', updateCheckoutButtonState);
            el.addEventListener('change', updateCheckoutButtonState);
        }
    });

    document.querySelectorAll('input[name="payment-method"]').forEach(el => {
        el.addEventListener('change', () => {
            updateCheckoutButtonState();
            updateGrandTotal();
        });
    });

    initBiteship();
    initRegionalAPI();
}

// Nama wilayah dari carikodepos.id campur kapital: "DKI JAKARTA", "BALI",
// "Kabupaten Pidie", "KOTA ADM. JAKARTA PUSAT". Rapikan jadi title case,
// acronym resmi (DKI, DIY) tetap kapital, singkatan lain dibiarkan.
const WILAYAH_ACRONYM = new Set(['DKI', 'DIY']);

function formatWilayahName(name) {
    return String(name || '')
        .toLowerCase()
        .replace(/(^|[\s./-])([a-z]+)/g, (m, sep, word) => (
            WILAYAH_ACRONYM.has(word.toUpperCase())
                ? sep + word.toUpperCase()
                : sep + word[0].toUpperCase() + word.slice(1)
        ));
}

async function initRegionalAPI() {
    const provinceSelect = document.getElementById('cust-province');
    const citySelect = document.getElementById('cust-city');
    const districtSelect = document.getElementById('cust-district');
    const villageSelect = document.getElementById('cust-subdistrict');

    if (!provinceSelect) return;

    const postalInput = document.getElementById('cust-postal-code');
    const POSTAL_PLACEHOLDER = 'Contoh: 15223';

    // carikodepos.id tidak mengirim header CORS pada response GET, jadi browser
    // memblokir request langsung. Semua panggilan lewat Worker proxy /api/wilayah.
    // CATATAN: key di dalam json.data tidak sama dengan nama endpoint
    // (endpoint "postal-codes" -> json.data.postalCodes).
    const REGION_API = {
        provinces: { endpoint: 'provinces', dataKey: 'provinces' },
        cities: { endpoint: 'cities', dataKey: 'cities' },
        districts: { endpoint: 'districts', dataKey: 'districts' },
        villages: { endpoint: 'villages', dataKey: 'villages' },
        postalCodes: { endpoint: 'postal-codes', dataKey: 'postalCodes' },
    };

    async function fetchList(key, params = {}) {
        const cfg = REGION_API[key];
        if (!cfg) return [];

        try {
            const qs = new URLSearchParams({ endpoint: cfg.endpoint, ...params });
            const res = await fetch(`/api/wilayah?${qs}`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            return json?.data?.[cfg.dataKey] || [];
        } catch (err) {
            console.error(`API ${key} Error:`, err);
            return [];
        }
    }

    // API ini sesekali balas array kosong walau flag sukses -> coba 1x lagi
    async function fetchListRetry(key, params = {}) {
        let items = await fetchList(key, params);
        if (items.length === 0) {
            await new Promise(res => setTimeout(res, 400));
            items = await fetchList(key, params);
        }
        return items;
    }

    function fillSelect(select, placeholder, items) {
        select.innerHTML = '';

        const blank = document.createElement('option');
        blank.value = '';
        blank.textContent = placeholder;
        blank.disabled = true;
        blank.selected = true;
        select.appendChild(blank);

        [...items]
            .sort((a, b) => formatWilayahName(a.name).localeCompare(formatWilayahName(b.name), 'id'))
            .forEach(item => {
                const opt = document.createElement('option');
                opt.value = item.id;
                opt.textContent = formatWilayahName(item.name);
                select.appendChild(opt);
            });

        select.disabled = false;
    }

    function resetSelect(select, placeholder) {
        if (!select) return;
        select.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
        select.disabled = true;
    }

    function setPostalCode(code) {
        if (!postalInput) return;
        postalInput.placeholder = POSTAL_PLACEHOLDER;
        postalInput.value = code || '';
        // Trigger initBiteship() -> ongkir ikut terhitung tanpa klik manual
        if (code) postalInput.dispatchEvent(new Event('input'));
    }

    const provinces = await fetchListRetry('provinces', { limit: 50 });
    if (provinces.length === 0) {
        provinceSelect.innerHTML = '<option value="" disabled selected>Gagal memuat, isi manual</option>';
        provinceSelect.disabled = true;
    } else {
        fillSelect(provinceSelect, 'Pilih Provinsi', provinces);
    }

    provinceSelect.addEventListener('change', async () => {
        const provinceId = provinceSelect.value;
        resetSelect(citySelect, 'Memuat...');
        resetSelect(districtSelect, 'Pilih Kecamatan');
        resetSelect(villageSelect, 'Pilih Kelurahan/Desa');
        setPostalCode('');

        const cities = await fetchListRetry('cities', { provinceId, limit: 100 });
        if (provinceSelect.value !== provinceId) return;
        fillSelect(citySelect, 'Pilih Kota/Kabupaten', cities);
    });

    citySelect.addEventListener('change', async () => {
        const cityId = citySelect.value;
        resetSelect(districtSelect, 'Memuat...');
        resetSelect(villageSelect, 'Pilih Kelurahan/Desa');
        setPostalCode('');

        const districts = await fetchListRetry('districts', { cityId, limit: 100 });
        if (citySelect.value !== cityId) return;
        fillSelect(districtSelect, 'Pilih Kecamatan', districts);
    });

    districtSelect.addEventListener('change', async () => {
        const districtId = districtSelect.value;
        resetSelect(villageSelect, 'Memuat...');
        setPostalCode('');

        const villages = await fetchListRetry('villages', { districtId, limit: 100 });
        if (districtSelect.value !== districtId) return;
        fillSelect(villageSelect, 'Pilih Kelurahan/Desa', villages);
    });

    villageSelect.addEventListener('change', async () => {
        const villageId = villageSelect.value;
        setPostalCode('');
        if (!villageId) return;

        if (postalInput) postalInput.placeholder = 'Memuat...';

        // Satu desa bisa punya >1 kode pos -> ambil yang pertama
        const postalCodes = await fetchListRetry('postalCodes', { villageId, limit: 1 });
        if (villageSelect.value !== villageId) return;
        setPostalCode(postalCodes[0]?.code || '');
    });
}

function isCOD() {
    return document.querySelector('input[name="payment-method"]:checked')?.value === 'cod';
}

function getSubsidy() {
    const qty = cart.reduce((sum, item) => sum + item.qty, 0);
    return qty * 20000;
}

function getShippingDiscount(ongkirPrice, subtotal) {
    const auto = getAutoGratisOngkir(subtotal);
    if (auto) return Math.min(auto.amount, ongkirPrice);
    return Math.min(getSubsidy(), ongkirPrice);
}

function getVoucherDiscount(subtotal) {
    const auto = getAutoVoucher(subtotal);
    return auto ? auto.amount : 0;
}

function getGratisOngkirLabel(subtotal) {
    const auto = getAutoGratisOngkir(subtotal);
    return auto ? auto.label : null;
}

function getAutoVoucherLabel(subtotal) {
    const auto = getAutoVoucher(subtotal);
    return auto ? auto.label : null;
}

function updateGrandTotal() {
    const parsePrice = (p) => parseFloat(String(p).replace(/[^0-9]/g, ''));
    const formatPrice = (n) => `Rp${n.toLocaleString('id-ID')}`;

    const subtotal = cart.reduce((sum, item) => sum + (parsePrice(item.priceWa || item.priceCrt) * item.qty), 0);

    // Calculate discounts
    const ongkirPrice = selectedCourierPrice || 0;
    const shippingDiscount = getShippingDiscount(ongkirPrice, subtotal);
    const ongkirAfterSubsidy = ongkirPrice - shippingDiscount;
    const voucher = getVoucherDiscount(subtotal);
    const codFee = isCOD() ? Math.round((subtotal + ongkirAfterSubsidy - voucher) * 0.04) : 0;
    const grandTotal = subtotal + ongkirAfterSubsidy + codFee - voucher;

    // Get labels for display
    const isGratisOngkir = getAutoGratisOngkir(subtotal) !== null;
    const goLabel = getGratisOngkirLabel(subtotal);
    const vchLabel = getAutoVoucherLabel(subtotal);

    const rows = [
        { rowId: 'ongkir-summary-row', labelId: 'ongkir-summary-label', priceId: 'ongkir-summary-price', totalId: 'grand-total', codRowId: 'cod-fee-row', codPriceId: 'cod-fee-price', subRowId: 'subsidy-row', subPriceId: 'subsidy-price', vchRowId: 'voucher-row', vchPriceId: 'voucher-price' },
        { rowId: 'ongkir-summary-row-mobile', labelId: 'ongkir-summary-label-mobile', priceId: 'ongkir-summary-price-mobile', totalId: 'grand-total-mobile', codRowId: 'cod-fee-row-mobile', codPriceId: 'cod-fee-price-mobile', subRowId: 'subsidy-row-mobile', subPriceId: 'subsidy-price-mobile', vchRowId: 'voucher-row-mobile', vchPriceId: 'voucher-price-mobile' },
    ];

    rows.forEach(({ rowId, labelId, priceId, totalId, codRowId, codPriceId, subRowId, subPriceId, vchRowId, vchPriceId }) => {
        const row = document.getElementById(rowId);
        const label = document.getElementById(labelId);
        const priceEl = document.getElementById(priceId);
        const totalEl = document.getElementById(totalId);
        const codRow = document.getElementById(codRowId);
        const codPriceEl = document.getElementById(codPriceId);
        const subRow = document.getElementById(subRowId);
        const subPriceEl = document.getElementById(subPriceId);
        const vchRow = document.getElementById(vchRowId);
        const vchPriceEl = document.getElementById(vchPriceId);

        if (selectedCourierName && row) {
            row.classList.remove('hidden');
            if (label) label.textContent = 'Ongkos Kirim';
            if (priceEl) priceEl.textContent = ongkirPrice === 0 ? 'Gratis 🎉' : formatPrice(ongkirPrice);

            if (shippingDiscount > 0 && subRow && subPriceEl) {
                subRow.classList.remove('hidden');
                subPriceEl.textContent = `-${formatPrice(shippingDiscount)}`;
                const subLabel = subRow.querySelector('span:first-child');
                if (subLabel) {
                    if (isGratisOngkir) {
                        subLabel.textContent = goLabel;
                    } else {
                        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
                        subLabel.textContent = `Subsidi Ongkir (${totalQty} pcs × Rp20.000)`;
                    }
                }
            } else if (subRow) {
                subRow.classList.add('hidden');
            }
        } else if (row) {
            row.classList.add('hidden');
            if (subRow) subRow.classList.add('hidden');
        }

        if (voucher > 0 && vchRow) {
            vchRow.classList.remove('hidden');
            if (vchPriceEl) vchPriceEl.textContent = `-${formatPrice(voucher)}`;
            // Update XTRA label
            const vchLabelEl = vchRow.querySelector('span:first-child');
            if (vchLabelEl && vchLabel) {
                vchLabelEl.textContent = vchLabel;
            }
        } else if (vchRow) {
            vchRow.classList.add('hidden');
        }

        if (codFee > 0 && codRow) {
            codRow.classList.remove('hidden');
            if (codPriceEl) codPriceEl.textContent = formatPrice(codFee);
        } else if (codRow) {
            codRow.classList.add('hidden');
        }

        if (totalEl) totalEl.textContent = formatPrice(grandTotal);
    });

    document.querySelectorAll('.cart-total:not([id])').forEach(el => el.textContent = formatPrice(grandTotal));
}

// === BITESHIP ===
function getCartItems() {
    const parsePrice = (p) => parseFloat(String(p).replace(/[^0-9]/g, ''));
    return cart.map(item => ({
        name: item.name,
        value: parsePrice(item.priceWa || item.priceCrt),
        weight: item.weight || 850,
        quantity: item.qty
    }));
}

async function fetchRates(postalCode) {
    try {
        const items = getCartItems();
        if (!items.length || !postalCode) return [];

        const res = await fetch('/api/rates', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ destination_postal_code: postalCode, items })
        });
        if (!res.ok) return [];
        const data = await res.json();
        return data.pricing || data.rates || [];
    } catch (err) {
        return [];
    }
}

const COURIER_LOGOS = {
    'jne': 'img/jneico.svg',
    'lion': 'img/lionico.svg',
};

function getCourierLogo(rate) {
    const code = (rate.courier_code || rate.company || rate.courier_company || '').toLowerCase();
    if (code.includes('jne')) return COURIER_LOGOS.jne;
    if (code.includes('lion')) return COURIER_LOGOS.lion;
    return '';
}

function renderShippingOptions(rates) {
    const container = document.getElementById('shipping-options');
    const list = document.getElementById('shipping-options-list');
    if (!container || !list) return;

    if (!rates.length) {
        container.classList.add('hidden');
        return;
    }

    container.classList.remove('hidden');
    list.innerHTML = '';

    rates.forEach((rate, idx) => {
        const price = rate.price || rate.courier_price || 0;
        const company = rate.company || rate.courier_company || '';
        const service = rate.service || rate.courier_service_name || '';
        const est = rate.duration || rate.delivery_time || rate.courier_estimated || '';
        const logo = getCourierLogo(rate);

        const label = document.createElement('label');
        label.className = 'shipping-option flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 cursor-pointer has-[:checked]:ring-2 has-[:checked]:ring-brand-blue has-[:checked]:bg-brand-blue/5 transition-all';

        label.innerHTML = `
            <input type="radio" name="shipping-courier" value="${idx}"
                class="accent-brand-blue w-4 h-4 flex-shrink-0">
            ${logo ? `<img src="${logo}" alt="${company}" class="w-10 h-10 object-contain flex-shrink-0">` : ''}
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-slate-800 dark:text-slate-100">${service}</p>
                <p class="text-xs text-slate-400">${est}</p>
            </div>
            <span class="font-bold text-sm text-slate-900 dark:text-white flex-shrink-0">${price === 0 ? 'Gratis' : `Rp${price.toLocaleString('id-ID')}`}</span>
        `;

        const radio = label.querySelector('input');
        radio.addEventListener('change', () => {
            selectedCourierPrice = price;
            selectedCourierName = company;
            selectedCourierService = service;
            updateGrandTotal();
        });

        list.appendChild(label);
    });

    // Auto-select first
    const firstRadio = list.querySelector('input');
    if (firstRadio) {
        firstRadio.checked = true;
        firstRadio.dispatchEvent(new Event('change'));
    }
}

async function initBiteship() {
    const postalInput = document.getElementById('cust-postal-code');
    if (!postalInput) return;

    document.getElementById('btn-update-ongkir')?.addEventListener('click', async function () {
        const code = postalInput.value.replace(/\D/g, '').slice(0, 5);
        if (code.length < 5) return;

        this.textContent = 'Memperbarui...';
        this.disabled = true;

        const rates = await fetchRates(code);
        renderShippingOptions(rates);

        this.classList.add('hidden');
        this.textContent = 'Update Ongkos Kirim';
        this.disabled = false;
    });

    let debounceTimer;

    postalInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);

        selectedCourierPrice = 0;
        selectedCourierName = '';
        selectedCourierService = '';
        document.getElementById('shipping-options')?.classList.add('hidden');

        const code = postalInput.value.replace(/\D/g, '').slice(0, 5);
        if (code.length < 5) return;

        debounceTimer = setTimeout(async () => {
            const rates = await fetchRates(code);
            renderShippingOptions(rates);
        }, 500);
    });
}

function updateCartTotalUI() {
    const parsePrice = (p) => parseFloat(p.replace(/[^0-9]/g, ''));

    // Normal Price (original price before discount)
    const normalSubtotal = cart.reduce((sum, item) => sum + (parsePrice(item.priceCrt) * item.qty), 0);

    // Final Price (special web/wa price)
    const finalSubtotal = cart.reduce((sum, item) => sum + (parsePrice(item.priceWa || item.priceCrt) * item.qty), 0);

    const discountAmount = normalSubtotal - finalSubtotal;
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    const subtotals = document.querySelectorAll('.cart-subtotal');
    subtotals.forEach(el => el.textContent = `Rp${finalSubtotal.toLocaleString('id-ID')}`);

    const normalTotals = document.querySelectorAll('.cart-normal-total');
    normalTotals.forEach(el => el.textContent = `Rp${normalSubtotal.toLocaleString('id-ID')}`);

    const discounts = document.querySelectorAll('.cart-discount');
    discounts.forEach(el => el.textContent = `- Rp${discountAmount.toLocaleString('id-ID')}`);

    const counts = document.querySelectorAll('.cart-count-summary');
    counts.forEach(el => el.textContent = totalQty);

    updateCheckoutButtonState();
    updateGrandTotal();
}

function updateCheckoutButtonState() {
    const btns = document.querySelectorAll('.btn-checkout-wa');
    btns.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed');
    });
}

function showFieldError(id, msg = 'Lengkapi data berikut') {
    const el = document.getElementById(id);
    if (!el) return;

    // Remove existing
    const existing = el.parentElement.querySelector('.field-error-msg');
    if (existing) existing.remove();

    el.classList.add('ring-2', 'ring-red-500', 'bg-red-50', 'dark:bg-red-500/10', 'animate-shake');

    const errorMsg = document.createElement('div');
    errorMsg.className = 'field-error-msg text-red-500 text-[12px] font-medium mt-1.5 flex items-center gap-1 animate-shake';
    errorMsg.innerHTML = `<span class="material-symbols-outlined text-sm">error</span> ${msg}`;
    el.parentElement.appendChild(errorMsg);

    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => el.focus(), 500);

    // Clear on input
    el.addEventListener('input', function clear() {
        el.classList.remove('ring-2', 'ring-red-500', 'bg-red-50', 'dark:bg-red-500/10');
        const err = el.parentElement.querySelector('.field-error-msg');
        if (err) err.remove();
        el.removeEventListener('input', clear);
    });
}

// --- Bulk Order WhatsApp Autotext ---
function initBulkOrder() {
    const submitBtn = document.getElementById('bulkSubmitBtn');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', () => {
        const name = document.getElementById('bulkName').value;
        const whatsapp = document.getElementById('bulkWhatsapp').value;
        const instansi = document.getElementById('bulkInstansi').value;
        const product = document.getElementById('bulkProduct').value;
        const quantity = document.getElementById('bulkQuantity').value;
        const note = document.getElementById('bulkNote').value;

        // Validation
        if (!name || !whatsapp || !instansi) {
            alert('Mohon lengkapi Nama, No. WhatsApp, dan Instansi.');
            return;
        }

        const message = `Halo Admin Hamzah Quran, saya ingin meminta penawaran untuk Bulk Order / Pengadaan B2B:

*Data Pemohon:*
- Nama: ${name}
- No. WA: ${whatsapp}
- Instansi/Lembaga: ${instansi}

*Detail Pesanan:*
- Produk Diminati: ${product || '-'}
- Estimasi Jumlah: ${quantity || '-'}
- Catatan Tambahan: ${note || '-'}

Terima kasih.`;

        const waUrl = `https://wa.me/6285155060816?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    });
}

// --- Scroll to Top Logic ---
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        } else {
            scrollBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        }
    });

    scrollBtn.addEventListener('click', () => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.5 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Mobile dark mode toggle
function initThemeMobile() {
    const mobileToggle = document.getElementById('theme-toggle-mobile');
    const mobileKnob = document.getElementById('theme-toggle-mobile-knob');

    const updateMobileToggle = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if (mobileToggle) {
            mobileToggle.style.setProperty('--toggle-bg', isDark ? '#1A5FB4' : '#cbd5e1');
            mobileToggle.style.background = isDark ? '#1A5FB4' : '#cbd5e1';
        }
        if (mobileKnob) {
            mobileKnob.style.transform = isDark ? 'translateX(1.5rem)' : 'translateX(0.125rem)';
        }
    };

    mobileToggle?.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', !isDark);
        localStorage.setItem('theme', !isDark ? 'dark' : 'light');
        updateMobileToggle();
    });

    updateMobileToggle();
}

// --- START ALL ---
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initScrollToTop();
    initKatalog();
    initCoverKatalog();
    initProductDetail();
    initTrending();
    initCart();
    initPromoRotator();
    initCustomModal();
    initPersonalizationPage();
    initBulkOrder();
    initThemeMobile();
});
