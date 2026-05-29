// GLOBAL PRODUCT DATA
const GLOBAL_PRODUCTS = [
    {
        id: 1,
        name: "Hafazan 8 Blok QPP A5",
        category: "Al Quran Sedang",
        priceCrt: "Rp159.000",
        priceStr: "Rp143.000",
        priceWa: "Rp118.000",
        img: "img/katalog/8qpp-a5.jpg",
        images: ["img/8qpp-a5/8qpp-a5.jpg", "img/8qpp-a5/8qpp-a5-1.jpg", "img/8qpp-a5/8qpp-a5-2.jpg", "img/8qpp-a5/8qpp-a5-3.jpg", "img/8qpp-a5/8qpp-a5-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafazan 8 Blok QPP A5",
        shopee: "https://shopee.co.id/hamzahquran/23569937190",
        specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Quran Premium (awet dan tahan lama)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna", "QR Code Murottal"]
    },
    {
        id: 2,
        name: "Hafazan 8 Blok Matte A5",
        category: "Al Quran Sedang",
        priceCrt: "Rp169.000",
        priceStr: "Rp149.000",
        priceWa: "Rp121.000",
        img: "img/katalog/8matte-a5.jpg",
        images: ["img/8matte-a5/8matte-a5.jpg", "img/8matte-a5/8matte-a5-1.jpg", "img/8matte-a5/8matte-a5-2.jpg", "img/8matte-a5/8matte-a5-3.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafazan 8 Blok Matte A5",
        shopee: "https://shopee.co.id/hamzahquran/17095398884",
        specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Hanya tersedia versi tanpa latin", "Terjemah perayat", "Tajwid Warna", "Desain elegan", "QR Code Murottal"]
    },
    {
        id: 3,
        name: "Hafazan 8 TAHFIZ A5",
        category: "Al Quran Sedang",
        priceCrt: "Rp169.000",
        priceStr: "Rp149.000",
        priceWa: "Rp121.000",
        img: "img/katalog/8tahfiz-a5.jpg",
        images: ["img/8tahfiz/8tahfiz-3.jpg", "img/8tahfiz/8tahfiz.jpg", "img/8tahfiz/8tahfiz-1.jpg", "img/8tahfiz/8tahfiz-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafazan 8 TAHFIZ A5",
        shopee: "https://shopee.co.id/hamzahquran/26385974446",
        specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Hanya tersedia versi tanpa latin", "Terjemah perkata", "Terjemah perayat", "Fokus hafalan intensif", "QR Code Murottal"]
    },
    {
        id: 4,
        name: "Tilawah A5",
        category: "Al Quran Sedang",
        priceCrt: "Rp129.000",
        priceStr: "Rp120.000",
        priceWa: "Rp108.000",
        img: "img/katalog/tilawah-a5.jpg",
        images: ["img/tilawah/tilawah-3.jpg", "img/tilawah/tilawah.jpg", "img/tilawah/tilawah-1.jpg", "img/tilawah/tilawah-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Tilawah A5",
        shopee: "https://shopee.co.id/hamzahquran/26513988170",
        specs: ["Kertas Quran Premium (awet dan tahan lama)", "Tajwid Warna", "Rasm Utsmani 15 baris", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Tanpa terjemah", "Hardcover kokoh", "Cocok untuk tilawah harian", "Desain elegan", "Proses cetak cepat"]
    },
    {
        id: 5,
        name: "Non Terjemah 6 Blok A5",
        category: "Al Quran Sedang",
        priceCrt: "Rp149.000",
        priceStr: "Rp139.000",
        priceWa: "Rp113.000",
        img: "img/katalog/yazid.jpg",
        images: ["img/yazid/yazid-a5.jpg", "img/yazid/yazid-a5-1.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 6 Blok Non Terjemah A5",
        shopee: "https://shopee.co.id/hamzahquran/26474664037",
        specs: ["Kertas Quran Premium (awet dan tahan lama)", "6 Blok Warna Hafalan", "Tajwid Warna", "Panduan Muroja'ah", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Hardcover kokoh", "Tanpa terjemah", "Desain colorful", "Proses cetak cepat"]
    },
    {
        id: 6,
        name: "Hafazan 8 Blok QPP A4",
        category: "Al Quran Besar",
        priceCrt: "Rp229.000",
        priceStr: "Rp199.000",
        priceWa: "Rp171.000",
        img: "img/katalog/8qpp-a4.jpg",
        images: ["img/8qpp-a4/8qpp-a4.jpg", "img/8qpp-a4/8qpp-a4-1.jpg", "img/8qpp-a4/8qpp-a4-2.jpg", "img/8qpp-a4/8qpp-a4-3.jpg", "img/8qpp-a4/8qpp-a4-4.jpg", "img/8qpp-a4/8qpp-a4-5.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafazan 8 Blok QPP A4",
        shopee: "https://shopee.co.id/hamzahquran/20691896045",
        specs: ["8 blok warna hafalan", "Ukuran A4 (Besar) 21 x 29,7 cm", "Kertas Quran Premium (awet dan tahan lama)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna", "QR Code Murottal"]
    },
    {
        id: 7,
        name: "Hafazan 8 Blok Matte A4",
        category: "Al Quran Besar",
        priceCrt: "Rp239.000",
        priceStr: "Rp219.000",
        priceWa: "Rp183.000",
        img: "img/katalog/8matte-a4.jpg",
        images: ["img/8matte-a4/8matte-a4.jpg", "img/8matte-a4/8matte-a4-1.jpg", "img/8matte-a4/8matte-a4-2.jpg", "img/8matte-a4/8matte-a4-3.jpg", "img/8matte-a4/8matte-a4-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafazan 8 Blok Matte A4",
        shopee: "https://shopee.co.id/hamzahquran/23954192019",
        specs: ["8 blok warna hafalan", "Ukuran A4 (Besar) 21 x 29,7 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Hanya tersedia versi tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna"]
    },
    {
        id: 8,
        name: "IQRO Hitam Putih HVS A5",
        category: "IQRO",
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
        name: "IQRO Full Color HVS A5",
        category: "IQRO",
        priceCrt: "Rp99.000",
        priceStr: "Rp84.900",
        priceWa: "Rp75.000",
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
        priceCrt: "Rp79.000",
        priceStr: "Rp62.000",
        priceWa: "Rp53.000",
        img: "img/katalog/juzamma.jpg",
        images: ["img/katalog/juzamma.jpg", "img/juzamma/juzamma-3.jpg", "img/juzamma/juzamma-2.jpg", "img/juzamma/juzamma-1.jpg", "img/juzamma/juzamma-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
        wa: "Halo Admin, saya ingin pesan Juz Amma Custom Nama Full Color A5",
        shopee: "https://shopee.co.id/hamzahquran/43817837285",
        specs: ["Kertas HVS Premium 70gr", "Full Color", "Tajwid Warna", "Dilengkapi Asmaul Husna", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Mudah dibawa", "Kertas berkualitas", "Tampilan cerah", "Bantu hafalan surat pendek"]
    },
];

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

// 1. Theme Theme Management
function initTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');

    const isDark = localStorage.getItem('theme') === 'dark';

    html.classList.toggle('dark', isDark);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const willBeDark = !html.classList.contains('dark');
            html.classList.toggle('dark', willBeDark);
            localStorage.setItem('theme', willBeDark ? 'dark' : 'light');
        });
    }
}

// 1b. Navbar Scroll Effect
function initNavbar() {
    const header = document.querySelector('.header-sticky');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
}

// 2. Mobile Menu
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }
}

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

// 4. Katalog Page Logic
let scalevProductsCache = [];

async function initKatalog() {
    const productGrid = document.getElementById('product-list');
    if (!productGrid) return;

    let currentFilter = 'Semua Produk';
    let currentSort = 'default';

    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortTrigger = document.getElementById('sort-trigger');
    const sortDropdown = document.getElementById('sort-dropdown');
    const sortOptions = document.querySelectorAll('.sort-option');
    const sortLabel = document.getElementById('current-sort-label');

    productGrid.innerHTML = Array(8).fill(`
        <div class="animate-pulse bg-slate-100 dark:bg-slate-800 rounded-2xl aspect-square"></div>
    `).join('');

    try {
        const data = await scalevGetProducts({ per_page: 20 });
        scalevProductsCache = data.data || [];

        if (!scalevProductsCache.length) {
            productGrid.innerHTML = '<p class="col-span-full text-center text-slate-400 py-20">Produk tidak ditemukan.</p>';
            return;
        }

        function renderProducts() {
            let filtered = [...scalevProductsCache];

            if (currentSort === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
            else if (currentSort === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));
            else if (currentSort === 'price-low') filtered.sort((a, b) => parseFloat(a.price_range?.min || '0') - parseFloat(b.price_range?.min || '0'));
            else if (currentSort === 'price-high') filtered.sort((a, b) => parseFloat(b.price_range?.min || '0') - parseFloat(a.price_range?.min || '0'));

            productGrid.innerHTML = filtered.map((item) => {
                const price = parseFloat(item.price_range?.min || '0');
                const img = Array.isArray(item.images) && item.images.length > 0
                    ? (typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url)
                    : 'img/placeholder.jpg';

                return `
                    <div class="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
                        <a href="product-detail.html?slug=${item.slug}" class="block">
                            <div class="bg-[#f2f2f2] dark:bg-slate-800 aspect-square rounded-xl overflow-hidden mb-6 relative">
                                <img src="${img}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onerror="this.src='img/placeholder.jpg'">
                            </div>
                            <h3 class="text-md font-display font-bold text-slate-900 dark:text-white mb-4 px-2 leading-tight line-clamp-2">${item.name}</h3>
                        </a>
                        <div class="flex flex-col px-2 pb-2">
                            <div class="flex items-center justify-between mb-1">
                                <div class="text-[1.2rem] sm:text-[1rem] text-brand-blue dark:text-brand-gold font-bold flex items-center gap-1">
                                    <span class="material-symbols-outlined">confirmation_number</span>
                                    <span class="price-val">${scalevFormatRupiah(price)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between mb-1">
                            <a href="product-detail.html?slug=${item.slug}" class="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-black transition-all text-sm md:text-xs font-bold px-4 py-3 rounded-xl text-center w-full">Lihat Detail</a>
                        </div>
                    </div>
                `;
            }).join('');
        }

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => {
                    b.classList.remove('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
                    b.classList.add('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');
                });
                btn.classList.add('bg-brand-blue', 'text-white', 'dark:bg-white', 'dark:text-black', 'shadow-lg');
                btn.classList.remove('bg-slate-50', 'dark:bg-slate-900', 'text-slate-400', 'dark:text-slate-500');
                currentFilter = btn.textContent.trim().replace(/\s+/g, ' ');
                renderProducts();
            });
        });

        if (sortTrigger) {
            sortTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                if (sortDropdown) sortDropdown.classList.toggle('hidden');
            });
            document.addEventListener('click', () => sortDropdown && sortDropdown.classList.add('hidden'));
            sortOptions.forEach(opt => {
                opt.addEventListener('click', () => {
                    currentSort = opt.getAttribute('data-sort');
                    if (sortLabel) sortLabel.textContent = opt.textContent;
                    renderProducts();
                });
            });
        }

        renderProducts();

    } catch (err) {
        productGrid.innerHTML = `<div class="col-span-full text-center py-20">
            <p class="text-slate-400 mb-4">Gagal memuat produk</p>
            <button onclick="initKatalog()" class="px-6 py-2 bg-brand-blue text-white rounded-full font-bold text-sm">Coba Lagi</button>
        </div>`;
    }

    scalevRefreshCartBadge();
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

async function initProductDetail() {
    const detailContainer = document.getElementById('product-name');
    if (!detailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    if (!slug) return;

    try {
        let product;
        try {
            product = await scalevGetProduct(slug);
        } catch {
            product = await scalevGetBundle(slug);
        }

        currentProductData = product;
        activeIdx = 0;

        document.title = `${product.name} - Hamzah Quran`;

        const setEl = (id, content, attr = 'textContent') => {
            const el = document.getElementById(id);
            if (el) el[attr] = content;
        };

        const price = product.variants?.[0]?.price
            || parseFloat(product.price_range?.min || product.price || '0');

        setEl('product-name', product.name);
        setEl('product-price', scalevFormatRupiah(price));
        if (document.getElementById('harga-coret')) {
            document.getElementById('harga-coret').textContent = '';
        }
        setEl('product-wa-price', `
            <div class="wa-price-badge py-3 px-5 mb-2">
                <span class="material-symbols-outlined !text-2xl">confirmation_number</span>
                <span class="price-val !text-2xl sm:!text-3xl">${scalevFormatRupiah(price)}</span>
                <span class="label-text !text-sm !opacity-100 !font-normal">Harga spesial Web</span>
            </div>
        `, 'innerHTML');

        const images = (product.images || []).map(img =>
            typeof img === 'string' ? img : img.url
        ).filter(Boolean);

        if (images.length > 0) {
            setEl('main-image', images[0], 'src');
        }

        const thumbGallery = document.getElementById('thumbnail-gallery');
        if (thumbGallery && images.length > 0) {
            thumbGallery.className = "flex overflow-x-auto gap-3 pb-2 scrollbar-hide";
            thumbGallery.innerHTML = images.map((imgSrc, idx) => `
                <div id="thumb-${idx}" class="thumb-item flex-shrink-0 w-20 sm:w-24 cursor-pointer aspect-square rounded-xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-brand-blue' : 'border-transparent opacity-60 hover:opacity-100'}"
                     onclick="changeMainImage(${idx}, '${imgSrc}')">
                    <img src="${imgSrc}" class="w-full h-full object-cover" onerror="this.src='img/placeholder.jpg'">
                </div>
            `).join('');
        }

        const specList = document.getElementById('spec-list');
        if (specList) {
            specList.innerHTML = '';
        }

        const productDesc = document.getElementById('product-desc');
        if (productDesc && product.description) {
            productDesc.innerHTML = product.description;
        }

        // Variants
        const variants = product.variants || [];
        let selectedVariantId = variants[0]?.id || null;
        let selectedBundleId = product.bundle_price_option_id || null;
        let itemType = product.entity_type === 'bundle_price_option' ? 'bundle_price_option' : 'variant';

        if (variants.length > 1) {
            const variantContainer = document.getElementById('variant-selector');
            if (variantContainer) {
                variantContainer.innerHTML = variants.map((v, i) => `
                    <button class="variant-btn px-4 py-2 rounded-full border-2 font-semibold text-sm transition-all
                        ${i === 0 ? 'border-brand-blue text-brand-blue' : 'border-slate-200 text-slate-500'}"
                        data-id="${v.id}" data-price="${v.price}">
                        ${v.name}
                    </button>
                `).join('');

                variantContainer.querySelectorAll('.variant-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        selectedVariantId = parseInt(btn.dataset.id);
                        const vPrice = parseFloat(btn.dataset.price);
                        const priceEl = document.querySelector('.price-val');
                        if (priceEl && vPrice) priceEl.textContent = scalevFormatRupiah(vPrice);
                        variantContainer.querySelectorAll('.variant-btn').forEach(b => {
                            b.className = b.className.replace('border-brand-blue text-brand-blue', 'border-slate-200 text-slate-500');
                        });
                        btn.className = btn.className.replace('border-slate-200 text-slate-500', 'border-brand-blue text-brand-blue');
                    });
                });
            }
        }

        let qty = 1;
        document.querySelectorAll('[id^="add-to-cart-btn"]').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = itemType === 'variant' ? selectedVariantId : selectedBundleId;
                if (!id) { alert('Pilih varian dulu'); return; }

                btn.disabled = true;
                const orig = btn.innerHTML;
                btn.innerHTML = '<span class="material-symbols-outlined animate-spin">progress_activity</span>';

                try {
                    await scalevAddToCart(itemType, id, qty);
                    await scalevRefreshCartBadge();
                    showToast('Berhasil ditambahkan ke keranjang!');
                } catch (e) {
                    showToast('Gagal menambahkan ke keranjang', true);
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = orig;
                }
            });
        });

        // Related products
        await renderRelatedProducts(slug);

    } catch (err) {
        console.error('Product detail error:', err);
    }

    scalevRefreshCartBadge();
}

async function renderRelatedProducts(currentSlug) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;

    let items = scalevProductsCache;
    if (!items.length) {
        try {
            const data = await scalevGetProducts({ per_page: 20 });
            items = data.data || [];
        } catch { return; }
    }

    const related = items.filter(i => i.slug !== currentSlug);
    const shuffled = related.sort(() => Math.random() - 0.5).slice(0, 4);

    if (!shuffled.length) {
        relatedContainer.innerHTML = '';
        return;
    }

    relatedContainer.innerHTML = shuffled.map(item => {
        const price = parseFloat(item.price_range?.min || '0');
        const img = Array.isArray(item.images) && item.images.length > 0
            ? (typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url)
            : 'img/placeholder.jpg';

        return `
            <div class="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                <a href="product-detail.html?slug=${item.slug}" class="block">
                    <div class="bg-[#f2f2f2] dark:bg-slate-800 aspect-square rounded-xl overflow-hidden mb-4 relative">
                        <img src="${img}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onerror="this.src='img/placeholder.jpg'">
                    </div>
                    <h3 class="text-md font-display font-bold text-slate-900 dark:text-white mb-1 px-2 leading-tight h-[2rem]">${item.name}</h3>
                </a>
                <div class="flex flex-col px-2 pb-2 mb-2">
                    <div class="flex items-center justify-between mb-1">
                        <div class="text-[1.2rem] sm:text-[1rem] text-brand-blue dark:text-brand-gold font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined">confirmation_number</span>
                            <span class="price-val">${scalevFormatRupiah(price)}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-auto">
                    <a href="product-detail.html?slug=${item.slug}" class="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-black transition-all text-sm md:text-xs font-bold px-4 py-3 rounded-xl text-center w-full">Lihat Produk</a>
                </div>
            </div>
        `;
    }).join('');
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

function getCurrentImages() {
    if (!currentProductData || !currentProductData.images) return [];
    return currentProductData.images.map(img =>
        typeof img === 'string' ? img : img.url
    ).filter(Boolean);
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCounter = document.getElementById('lightbox-counter');

    if (!lightbox || !currentProductData) return;

    const images = getCurrentImages();
    lbImg.src = images[activeIdx] || 'img/placeholder.jpg';
    lbCounter.textContent = `${activeIdx + 1} / ${images.length}`;

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
    const images = getCurrentImages();
    if (!images.length) return;
    activeIdx = (activeIdx + 1) % images.length;
    changeMainImage(activeIdx, images[activeIdx]);
}

function prevImage() {
    const images = getCurrentImages();
    if (!images.length) return;
    activeIdx = (activeIdx - 1 + images.length) % images.length;
    changeMainImage(activeIdx, images[activeIdx]);
}

// 6. Trending Section (Index Page)
async function initTrending() {
    const trendingGrid = document.getElementById('trending-grid');
    if (!trendingGrid) return;

    let items = scalevProductsCache;
    if (!items.length) {
        try {
            const data = await scalevGetProducts({ per_page: 10 });
            items = data.data || [];
        } catch { return; }
    }

    const displayItems = items.slice(0, 4);

    trendingGrid.innerHTML = displayItems.map((item, idx) => {
        const price = parseFloat(item.price_range?.min || '0');
        const img = Array.isArray(item.images) && item.images.length > 0
            ? (typeof item.images[0] === 'string' ? item.images[0] : item.images[0].url)
            : 'img/placeholder.jpg';

        return `
            <div class="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all animate-fade-in-up" style="animation-delay: ${idx * 50}ms">
                <a href="product-detail.html?slug=${item.slug}" class="block">
                    <div class="bg-[#f2f2f2] dark:bg-slate-800 aspect-square rounded-xl overflow-hidden mb-6 relative">
                        <img src="${img}" alt="${item.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onerror="this.src='img/placeholder.jpg'">
                    </div>
                    <h3 class="text-md font-display font-bold text-slate-900 dark:text-white mb-4 px-2 leading-tight">${item.name}</h3>
                </a>
                <div class="flex flex-col px-2 pb-2">
                    <div class="flex items-center justify-between mb-1">
                        <div class="text-[1.2rem] sm:text-[1rem] text-brand-blue dark:text-brand-gold font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined">confirmation_number</span>
                            <span class="price-val">${scalevFormatRupiah(price)}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mb-1">
                    <a href="product-detail.html?slug=${item.slug}" class="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-black transition-all text-sm md:text-xs font-bold px-4 py-3 rounded-xl text-center w-full">Lihat Detail</a>
                </div>
            </div>
        `;
    }).join('');
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

function addToCart(productId, customName, coverId, customNote = '', customFont = '') {
    const product = GLOBAL_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const coverData = coverId ? COVER_DESIGNS.find(c => c.id === coverId) : null;

    // Each customization is unique, so always push new item
    cart.push({
        id: product.id,
        name: product.name,
        category: product.category, // Added this line
        priceCrt: product.priceCrt,
        priceWa: product.priceWa,
        img: product.img,
        qty: 1,
        customName: customName || '',
        customNote: customNote || '',
        customFont: customFont || '',
        coverName: coverData ? coverData.name : '',
        coverCategory: coverData ? coverData.category : '',
        coverImg: coverData ? coverData.img : ''
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
function showToast(message, isError = false) {
    const existing = document.getElementById('cart-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'cart-toast';
    const bg = isError ? 'bg-red-500' : 'bg-emerald-600';
    toast.className = `fixed bottom-24 left-1/2 -translate-x-1/2 z-[300] ${bg} text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm toast-in`;
    toast.innerHTML = `
        <span class="material-symbols-outlined">${isError ? 'error' : 'check_circle'}</span>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('toast-in');
        toast.classList.add('toast-out');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// --- Custom Name & Cover Modal ---
let modalProductId = null;
let modalSelectedCoverId = null;
let modalCoverFilter = 'Semua';

function openCustomModal(productId) {
    window.location.href = `personalize.html?id=${productId}`;
}

function initPersonalizationPage() {
    const personalizeContainer = document.getElementById('personalize-product-name');
    if (!personalizeContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
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

                addToCart(product.id, customName, modalSelectedCoverId, customNote, customFont);
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
        window.location.href = 'produk.html';
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

    addToCart(modalProductId, customName, modalSelectedCoverId);
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

function updateCartQty(idx, newQty) {
    if (newQty < 1) {
        cart.splice(idx, 1);
    } else {
        cart[idx].qty = parseInt(newQty);
    }
    saveCart();
    renderCart(); // Refresh cart UI if on cart page

    // Auto-refresh shipping if already calculated
    const pCode = document.getElementById('cust-postal-code')?.value;
    if (pCode && pCode.length === 5) {
        calculateShipping(pCode);
    }
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
                <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                    <img src="${item.coverImg || item.img}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 w-full">
                    <h3 class="font-bold text-lg text-slate-900 dark:text-white leading-tight">${item.name}</h3>
                    ${item.customName ? `<div class="flex items-center gap-1.5 mt-1"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">badge</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Nama: ${item.customName}</span></div>` : ''}
                    ${item.coverName ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">palette</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Cover: ${item.coverName} (${item.coverCategory})</span></div>` : ''}
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

async function initCart() {
    scalevRefreshCartBadge();
    const cartContainer = document.getElementById('cart-container');
    if (!cartContainer) return;

    const emptyCartView = document.getElementById('empty-cart');
    const cartItemsWrapper = document.getElementById('cart-items');

    try {
        const cart = await scalevGetCart();
        const items = cart.items || [];

        if (!items.length) {
            cartContainer.classList.add('hidden');
            if (emptyCartView) {
                emptyCartView.classList.remove('hidden');
                emptyCartView.classList.add('flex');
            }
            return;
        }

        if (emptyCartView) {
            emptyCartView.classList.add('hidden');
            emptyCartView.classList.remove('flex');
        }
        cartContainer.classList.remove('hidden');

        let subtotal = 0;
        cartItemsWrapper.innerHTML = items.map(item => {
            let name, img;
            if (item.type === 'bundle_price_option') {
                name = item.bundle_name || item.bundle_price_option_name || 'Produk';
                img = item.image || 'img/placeholder.jpg';
            } else {
                name = item.product_name || item.variant_name || 'Produk';
                img = item.image || 'img/placeholder.jpg';
            }
            const price = parseFloat(item.price || '0');
            subtotal += price * item.quantity;

            return `
                <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl relative group" data-item-id="${item.id}">
                    <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                        <img src="${img}" class="w-full h-full object-cover" onerror="this.src='img/placeholder.jpg'">
                    </div>
                    <div class="flex-1 w-full">
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white leading-tight">${name}</h3>
                        <div class="text-brand-blue dark:text-brand-gold font-bold text-sm mt-1 mb-3">${scalevFormatRupiah(price)}</div>
                        <div class="flex items-center justify-between w-full">
                            <div class="flex items-center gap-2">
                                <div class="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-1 shadow-sm w-fit">
                                    <button class="qty-minus w-6 h-6 flex items-center justify-center text-slate-500 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors" data-id="${item.id}" data-qty="${item.quantity}"><span class="material-symbols-outlined text-[1rem]">remove</span></button>
                                    <input type="number" readonly value="${item.quantity}" class="w-10 text-center text-sm font-bold bg-transparent text-slate-900 dark:text-white outline-none border-none pointer-events-none">
                                    <button class="qty-plus w-6 h-6 flex items-center justify-center text-slate-500 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors" data-id="${item.id}" data-qty="${item.quantity}"><span class="material-symbols-outlined text-[1rem]">add</span></button>
                                </div>
                                <button class="remove-item text-slate-500 hover:text-red-500 transition-colors p-2 shrink-0" data-id="${item.id}">
                                    <span class="material-symbols-outlined text-[1.2rem]">delete</span>
                                </button>
                            </div>
                            <div class="text-slate-900 dark:text-white font-black text-right pl-2 shrink-0">${scalevFormatRupiah(price * item.quantity)}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        cartItemsWrapper.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = parseInt(btn.dataset.id);
                const qty = parseInt(btn.dataset.qty);
                if (qty <= 1) return;
                await scalevUpdateCart(id, qty - 1);
                initCart();
            });
        });
        cartItemsWrapper.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = parseInt(btn.dataset.id);
                const qty = parseInt(btn.dataset.qty);
                await scalevUpdateCart(id, qty + 1);
                initCart();
            });
        });
        cartItemsWrapper.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = parseInt(btn.dataset.id);
                await scalevRemoveCart(id);
                initCart();
            });
        });

        const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

        document.querySelectorAll('.cart-total').forEach(el => el.textContent = scalevFormatRupiah(totalPrice));
        document.querySelectorAll('.cart-count-summary').forEach(el => el.textContent = totalQty);
        document.querySelectorAll('.cart-normal-total').forEach(el => el.textContent = scalevFormatRupiah(totalPrice));
        document.querySelectorAll('.cart-subtotal').forEach(el => el.textContent = scalevFormatRupiah(totalPrice));
        document.querySelectorAll('.cart-discount').forEach(el => el.textContent = '- Rp0');

        document.querySelectorAll('.btn-checkout').forEach(btn => {
            btn.textContent = 'Proses Checkout';
            btn.onclick = () => window.location.href = 'checkout.html';
        });

    } catch (err) {
        console.error('Cart error:', err);
    }
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

// --- START ALL ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    initMobileMenu();
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
});
