// catalog.js — satu sumber data produk + helper harga murni (tanpa DOM).
// Browser (script klasik): <script src="catalog.js"></script> SEBELUM script.js  -> baca window.HQ_CATALOG
// Server (ESM): import '../catalog.js'; lalu baca globalThis.HQ_CATALOG
(function (root) {
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
            specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Quran Premium (awet dan tahan lama)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna", "QR Code Murottal"],
            desc: "Al Quran hafalan dengan 8 blok warna untuk memudahkan membagi target hafalan, ukuran A5 (14,8 x 21 cm) yang ringkas. Kertas Quran premium dengan hardcover, tersedia versi latin maupun tanpa latin. Dilengkapi terjemah perkata, terjemah perayat, tajwid warna, dan QR Code murottal."
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
            specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perayat", "Tajwid Warna", "Desain elegan", "QR Code Murottal"],
            desc: "Al Quran hafalan 8 blok warna ukuran A5 (14,8 x 21 cm) dengan kertas Matte Premium yang lebih tebal. Hadir dalam versi latin maupun tanpa latin, lengkap dengan terjemah perayat, tajwid warna, dan tampilan yang elegan."
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
            specs: ["8 blok warna hafalan", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Hanya tersedia versi tanpa latin", "Terjemah perkata", "Terjemah perayat", "Fokus hafalan intensif", "QR Code Murottal"],
            desc: "Dirancang untuk program tahfiz dengan 8 blok warna dan fokus hafalan intensif. Kertas Matte Premium dan hardcover, ukuran A5 (14,8 x 21 cm), hanya tersedia versi tanpa latin. Dilengkapi terjemah perkata, terjemah perayat, dan QR Code murottal."
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
            images: ["img/tilawah-a5/tilawah-3.jpg", "img/tilawah-a5/tilawah.jpg", "img/tilawah-a5/tilawah-1.jpg", "img/tilawah-a5/tilawah-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Tilawah A5",
            shopee: "https://shopee.co.id/hamzahquran/26513988170",
            specs: ["Kertas Quran Premium (awet dan tahan lama)", "Tajwid Warna", "Rasm Utsmani 15 baris", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Tanpa terjemah", "Hardcover kokoh", "Cocok untuk tilawah harian", "Desain elegan", "Proses cetak cepat"],
            desc: "Al Quran tilawah ukuran A5 (14,8 x 21 cm) dengan rasm Utsmani 15 baris dan tajwid warna. Kertas Quran premium dan hardcover kokoh, tanpa terjemah \u2014 cocok untuk tilawah harian dengan desain elegan."
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
            images: ["img/hafalan-6blok/yazid-a5.jpg", "img/hafalan-6blok/yazid-a5-1.jpg", "img/hafalan-6blok/yazid-a5-2.jpg", "img/hafalan-6blok/yazid-a5-3.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Hafalan 6 Blok Non Terjemah A5",
            shopee: "https://shopee.co.id/hamzahquran/26474664037",
            specs: ["Kertas Quran Premium (awet dan tahan lama)", "6 Blok Warna Hafalan", "Tajwid Warna", "Panduan Muroja'ah", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Hardcover kokoh", "Tanpa terjemah", "Desain colorful", "Proses cetak cepat"],
            desc: "Al Quran hafalan 6 blok warna dengan desain colorful, tanpa terjemah, ukuran A5 (14,8 x 21 cm). Dilengkapi tajwid warna dan panduan muroja'ah untuk memudahkan muroja'ah hafalan."
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
            specs: ["8 blok warna hafalan", "Ukuran A4 (Besar) 21 x 29,7 cm", "Kertas Quran Premium (awet dan tahan lama)", "Hardcover bukan sticker", "Tersedia versi dengan latin maupun tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna", "QR Code Murottal"],
            desc: "Al Quran hafalan 8 blok warna ukuran A4 besar (21 x 29,7 cm) dengan tulisan lebih lega. Kertas Quran premium dan hardcover, tersedia versi latin maupun tanpa latin. Dilengkapi terjemah perkata, terjemah perayat, tajwid warna, dan QR Code murottal."
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
            specs: ["8 blok warna hafalan", "Ukuran A4 (Besar) 21 x 29,7 cm", "Kertas Matte Premium (lebih tebal dan glossy)", "Hardcover bukan sticker", "Hanya tersedia versi tanpa latin", "Terjemah perkata", "Terjemah perayat", "Tajwid Warna"],
            desc: "Al Quran hafalan 8 blok warna ukuran A4 (21 x 29,7 cm) dengan kertas Matte Premium yang lebih tebal. Hardcover, hanya versi tanpa latin, lengkap dengan terjemah perkata, terjemah perayat, dan tajwid warna."
        },
        {
            id: 8,
            name: "IQRO Custom Hitam Putih HVS A5",
            category: "IQRO",
            weight: 350,
            priceCrt: "Rp79.000",
            priceStr: "Rp69.000",
            priceWa: "Rp64.000",
            bindings: { softcover: "Rp54.000", hardcover: "Rp64.000" },
            img: "img/katalog/iqro-bw-3.jpg",
            images: ["img/iqro-bw/iqro-bw.jpg", "img/iqro-bw/iqro-bw-1.jpg", "img/iqro-bw/iqro-bw-2.jpg", "img/iqro-bw/iqro-bw-3.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan IQRO Custom Nama Hitam Putih HVS A5",
            shopee: "https://shopee.co.id/hamzahquran/22346411504",
            specs: ["Hardcover Premium", "Kertas HVS Premium 70gr", "Isi IQRO original", "Penerbit AMM Yogyakarta", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Lengkap Jilid 1-6", "Kertas putih, tulisan jelas"],
            desc: "IQRO custom nama dengan isi IQRO original dari penerbit AMM Yogyakarta, lengkap jilid 1-6. Kertas HVS Premium 70gr berwarna putih dengan tulisan yang jelas, hardcover premium, ukuran A5 (14,8 x 21 cm)."
        },
        {
            id: 9,
            name: "IQRO Custom Full Color HVS A5",
            category: "IQRO",
            weight: 350,
            priceCrt: "Rp99.000",
            priceStr: "Rp84.900",
            priceWa: "Rp79.000",
            bindings: { softcover: "Rp69.000", hardcover: "Rp79.000" },
            img: "img/katalog/iqro-qr-3.jpg",
            images: ["img/iqro-qr/iqro-qr-3.jpg", "img/iqro-qr/iqro-qr.jpg", "img/iqro-qr/iqro-qr-1.jpg", "img/iqro-qr/iqro-qr-2.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan IQRO Custom Nama Full Color QR Code HVS A5",
            shopee: "https://shopee.co.id/hamzahquran/18189793910",
            specs: ["Hardcover Premium", "Kertas HVS Premium 70gr", "Isi IQRO original full color", "Penerbit Al Qosbah dengan lisensi", "QR Code video pembelajaran", "Tanpa transliterasi latin", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Menarik untuk anak"],
            desc: "IQRO full color dengan isi original dari Al Qosbah (berlisensi) dan QR Code video pembelajaran. Tanpa transliterasi latin, kertas HVS Premium 70gr, hardcover premium, ukuran A5 (14,8 x 21 cm) \u2014 menarik untuk anak belajar mengaji."
        },
        {
            id: 10,
            name: "Juz Amma Full Color A5",
            category: "Juz Amma",
            weight: 350,
            priceCrt: "Rp79.000",
            priceStr: "Rp62.000",
            priceWa: "Rp58.000",
            bindings: { softcover: "Rp48.000", hardcover: "Rp58.000" },
            img: "img/katalog/juzamma.jpg",
            images: ["img/katalog/juzamma.jpg", "img/juzamma/juzamma-3.jpg", "img/juzamma/juzamma-2.jpg", "img/juzamma/juzamma-1.jpg", "img/juzamma/juzamma-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Juz Amma Custom Nama Full Color A5",
            shopee: "https://shopee.co.id/hamzahquran/43817837285",
            specs: ["Kertas HVS Premium 70gr", "Full Color", "Tajwid Warna", "Dilengkapi Asmaul Husna", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Mudah dibawa", "Kertas berkualitas", "Tampilan cerah", "Bantu hafalan surat pendek"],
            desc: "Juz Amma full color ukuran A5 (14,8 x 21 cm) dengan tajwid warna dan tampilan cerah. Dilengkapi Asmaul Husna dan mudah dibawa, cocok membantu hafalan surat-surat pendek."
        },
        {
            id: 11,
            name: "Al Quran Custom Tilawah A4 QPP Tajwid Warna",
            category: "Al Quran Besar",
            weight: 1600,
            priceCrt: "Rp169.000",
            priceStr: "Rp160.000",
            priceWa: "Rp155.000",
            img: "img/katalog/tilawah-a4.jpg",
            images: ["img/tilawah-a4/tilawah-a4.jpg", "img/tilawah-a4/tilawah-a4-1.jpg", "img/tilawah-a4/tilawah-a4-2.jpg", "img/tilawah-a4/tilawah-a4-3.jpg", "img/tilawah-a4/tilawah-a4-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Tilawah A4 QPP Tajwid Warna",
            shopee: "https://shopee.co.id/hamzahquran",
            specs: ["Kertas Quran Premium (awet dan tahan lama)", "Tajwid Warna", "Rasm Utsmani 15 baris", "Ukuran A4 (Besar) 21 x 29,7 cm", "Tanpa terjemah", "Hardcover kokoh", "Cocok untuk tilawah harian", "Desain elegan", "Proses cetak cepat"],
            desc: "Al Quran tilawah ukuran A4 besar (21 x 29,7 cm) dengan rasm Utsmani 15 baris dan tajwid warna. Kertas Quran premium dan hardcover kokoh, tanpa terjemah, nyaman untuk tilawah harian."
        },
        {
            id: 12,
            name: "Al Quran Custom Tilawah 4 Kode Warna A5 HVS",
            category: "Al Quran Sedang",
            weight: 850,
            priceCrt: "Rp103.000",
            priceStr: "Rp94.000",
            priceWa: "Rp89.000",
            xtraVoucher: 5000,
            img: "img/katalog/tilawah-4kode-a5.jpg",
            images: ["img/tilawah-4kode-a5/tilawah-4kode-a5.jpg", "img/tilawah-4kode-a5/tilawah-4kode-a5-1.jpg", "img/tilawah-4kode-a5/tilawah-4kode-a5-2.jpg", "img/tilawah-4kode-a5/tilawah-4kode-a5-3.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Tilawah 4 Kode Warna A5 HVS",
            shopee: "",
            specs: ["Kertas HVS 70gsm", "Isi berwarna", "4 kode warna tajwid", "Rasm Utsmani 15 baris", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Tanpa terjemah", "Hardcover kokoh", "Cocok untuk tilawah harian", "Desain elegan", "Proses cetak cepat"],
            desc: "Al Quran tilawah ukuran A5 (14,8 x 21 cm) dengan 4 kode warna tajwid dan rasm Utsmani 15 baris. Kertas HVS 70gsm berisi warna, hardcover kokoh, tanpa terjemah, cocok untuk tilawah harian."
        },
        {
            id: 13,
            name: "Al Quran Custom Tilawah 4 Kode Warna A4 HVS",
            category: "Al Quran Besar",
            weight: 1600,
            priceCrt: "Rp136.000",
            priceStr: "Rp127.000",
            priceWa: "Rp122.000",
            xtraVoucher: 7000,
            img: "img/katalog/tilawah-4kode-a4.jpg",
            images: ["img/tilawah-4kode-a4/tilawah-4kode-a4.jpg", "img/tilawah-4kode-a4/tilawah-4kode-a4-1.jpg", "img/tilawah-4kode-a4/tilawah-4kode-a4-2.jpg", "img/tilawah-4kode-a4/tilawah-4kode-a4-3.jpg", "img/tilawah-4kode-a4/tilawah-4kode-a4-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Tilawah 4 Kode Warna A4 HVS",
            shopee: "",
            specs: ["Kertas HVS 70gsm", "Isi berwarna", "4 kode warna tajwid", "Rasm Utsmani 15 baris", "Ukuran A4 (Besar) 21 x 29,7 cm", "Tanpa terjemah", "Hardcover kokoh", "Cocok untuk tilawah harian", "Desain elegan", "Proses cetak cepat"],
            desc: "Al Quran tilawah ukuran A4 besar (21 x 29,7 cm) dengan 4 kode warna tajwid dan rasm Utsmani 15 baris. Kertas HVS 70gsm berisi warna, hardcover kokoh, tanpa terjemah, nyaman untuk tilawah harian."
        },
        {
            id: 14,
            name: "Al Quran Custom Perkata Latin 4 Kode Tajwid A5 HVS",
            category: "Al Quran Sedang",
            weight: 850,
            priceCrt: "Rp100.000",
            priceStr: "Rp91.000",
            priceWa: "Rp86.000",
            xtraVoucher: 5000,
            img: "img/katalog/perkata-4kode-a5.jpg",
            images: ["img/perkata-4kode-a5/perkata-4kode-a5.jpg", "img/perkata-4kode-a5/perkata-4kode-a5-1.jpg", "img/perkata-4kode-a5/perkata-4kode-a5-2.jpg", "img/perkata-4kode-a5/perkata-4kode-a5-3.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Perkata Latin 4 Kode Tajwid A5 HVS",
            shopee: "",
            specs: ["Kertas HVS 70gsm", "Isi 2 warna", "Terjemah perkata", "Latin perkata", "4 kode tajwid", "Ukuran A5 (Sedang) 14,8 x 21 cm", "Hardcover kokoh", "Cocok untuk belajar arti per kata", "Proses cetak cepat"],
            desc: "Al Quran dengan terjemah dan latin perkata serta 4 kode tajwid, ukuran A5 (14,8 x 21 cm). Kertas HVS 70gsm, isi 2 warna, hardcover kokoh \u2014 cocok untuk belajar arti tiap kata sambil membaca."
        },
        {
            id: 15,
            name: "Al Quran Custom Perkata Latin 4 Kode Tajwid A4 HVS",
            category: "Al Quran Besar",
            weight: 1600,
            priceCrt: "Rp133.000",
            priceStr: "Rp124.000",
            priceWa: "Rp119.000",
            xtraVoucher: 7000,
            img: "img/katalog/perkata-4kode-a4.jpg",
            images: ["img/perkata-4kode-a4/perkata-4kode-a4.jpg", "img/perkata-4kode-a4/perkata-4kode-a4-1.jpg", "img/perkata-4kode-a4/perkata-4kode-a4-2.jpg", "img/perkata-4kode-a4/perkata-4kode-a4-3.jpg", "img/perkata-4kode-a4/perkata-4kode-a4-4.jpg", "img/usp.jpg", "img/usp-1.jpg", "img/usp-2.jpg"],
            wa: "Halo Admin, saya ingin pesan Al Quran Custom Nama Perkata Latin 4 Kode Tajwid A4 HVS",
            shopee: "",
            specs: ["Kertas HVS 70gsm", "Isi 2 warna", "Terjemah perkata", "Latin perkata", "4 kode tajwid", "Ukuran A4 (Besar) 21 x 29,7 cm", "Hardcover kokoh", "Cocok untuk belajar arti per kata", "Proses cetak cepat"],
            desc: "Al Quran dengan terjemah dan latin perkata serta 4 kode tajwid, ukuran A4 besar (21 x 29,7 cm). Kertas HVS 70gsm, isi 2 warna, hardcover kokoh \u2014 pas untuk belajar arti per kata dengan tulisan yang lebih lega."
        },
    ];

    // --- Social Proof (manual) ---
    // TODO: ganti angka di bawah dengan data penjualan asli dari Shopee sebelum publish.
    // Nilai di bawah ini placeholder. Kosongkan / hapus entry bila produk tidak punya data.
    const PRODUCT_SOCIAL_PROOF = {
        1: { rating: '4.9', sold: 5450 },
        2: { rating: '4.8', sold: 1421 },
        3: { rating: '4.9', sold: 18 },
        4: { rating: '4.7', sold: 22 },
        5: { rating: '4.8', sold: 43 },
        6: { rating: '5.0', sold: 257 },
        7: { rating: '4.9', sold: 153 },
        8: { rating: '4.8', sold: 567 },
        9: { rating: '4.9', sold: 4405 },
        10: { rating: '4.8', sold: 314 },
        11: { rating: '5.0', sold: 12 },
        12: { rating: '5.0', sold: 5 },
        13: { rating: '5.0', sold: 7 },
        14: { rating: '5.0', sold: 4 },
        15: { rating: '5.0', sold: 1 },
    };

    // --- Voucher XTRA per produk (bukan tier sub-total) ---
    // Default: Al Quran A4/A5 = Rp10.000, IQRO & Juz Amma = Rp5.000.
    // Produk dengan field xtraVoucher memakai nilai tsb (4 kode: A4 = Rp7.000, A5 = Rp5.000).
    const DEFAULT_XTRA_VOUCHER = 10000;
    const XTRA_VOUCHER_BY_CATEGORY = {
        IQRO: 5000,
        'Juz Amma': 5000,
    };
    function productXtraVoucher(p) {
        if (p && p.xtraVoucher != null) return p.xtraVoucher;
        if (p && XTRA_VOUCHER_BY_CATEGORY[p.category] != null) return XTRA_VOUCHER_BY_CATEGORY[p.category];
        return DEFAULT_XTRA_VOUCHER;
    }

    // --- Binding (softcover/hardcover) ---
    // Produk dengan pilihan jilid: hanya priceWa yang beda per binding, sisanya sama.
    function bindingPriceNum(v) { return parseInt(String(v).replace(/[^\d]/g, ''), 10) || 0; }
    function productCheapestPrice(p) {
        if (p && p.bindings) {
            const nums = Object.values(p.bindings).map(bindingPriceNum);
            return 'Rp' + Math.min(...nums).toLocaleString('id-ID');
        }
        return p.priceWa;
    }

    // --- Opsi varian Quran (selisih harga terhadap harga dasar) ---
    const VARIANT_OPTIONS = {
        latin: { label: 'Latin', img: 'img/preview-latin.jpg', add: 0 },
        'tanpa-latin': { label: 'Tanpa Latin', img: 'img/preview-tanpa-latin.jpg', add: 0 },
        'tajwid-terjemah': { label: 'Tajwid Terjemah', img: 'img/preview-tajwid-terjemah.jpg', add: 5000 },
        'non-terjemah': { label: 'Non Terjemah', img: 'img/preview-non-terjemah.jpg', add: 0 },
    };
    function variantPriceStr(product, field, quranType) {
        const base = product && product[field] ? String(product[field]) : '';
        const add = (VARIANT_OPTIONS[quranType] || {}).add || 0;
        if (!add) return base;
        const num = parseInt(base.replace(/[^\d]/g, ''), 10) || 0;
        return 'Rp' + (num + add).toLocaleString('id-ID');
    }

    // --- Harga halaman detail (murni, tanpa DOM) ---
    // Harga Web (atau tiap binding) dikurangi voucher XTRA per produk.
    // crt = priceCrt; pct dihitung hanya jika crt > low; isRange jika low !== high.
    function computeDetailPricing(product, quranType) {
        const p = product || {};
        const voucher = productXtraVoucher(p);
        const crt = bindingPriceNum(p.priceCrt);

        let low, high;
        if (quranType) {
            low = high = Math.max(0, bindingPriceNum(variantPriceStr(p, 'priceWa', quranType)) - voucher);
        } else if (p.bindings) {
            const nums = Object.values(p.bindings).map(bindingPriceNum);
            low = Math.max(0, Math.min(...nums) - voucher);
            high = Math.max(0, Math.max(...nums) - voucher);
        } else {
            low = high = Math.max(0, bindingPriceNum(p.priceWa) - voucher);
        }

        const isRange = low !== high;
        const pct = (crt > low && crt > 0) ? Math.round((crt - low) / crt * 100) : 0;
        const save = Math.max(0, crt - low);
        return { low, high, isRange, crt, pct, save, voucher };
    }

    root.HQ_CATALOG = {
        GLOBAL_PRODUCTS: GLOBAL_PRODUCTS,
        PRODUCT_SOCIAL_PROOF: PRODUCT_SOCIAL_PROOF,
        DEFAULT_XTRA_VOUCHER: DEFAULT_XTRA_VOUCHER,
        XTRA_VOUCHER_BY_CATEGORY: XTRA_VOUCHER_BY_CATEGORY,
        productXtraVoucher: productXtraVoucher,
        bindingPriceNum: bindingPriceNum,
        productCheapestPrice: productCheapestPrice,
        VARIANT_OPTIONS: VARIANT_OPTIONS,
        variantPriceStr: variantPriceStr,
        computeDetailPricing: computeDetailPricing,
    };
})(typeof globalThis !== 'undefined' ? globalThis : this);
