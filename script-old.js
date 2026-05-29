// GLOBAL PRODUCT DATA
const GLOBAL_PRODUCTS = [
    {
        id: 1,
        name: "Hafazan 8 Blok QPP A5",
        category: "Al Quran Sedang",
        priceCrt: "Rp159.000",
        priceStr: "Rp143.000",
        priceWa: "Rp129.000",
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
        priceWa: "Rp135.000",
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
        priceWa: "Rp135.000",
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
        priceWa: "Rp114.000",
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
        priceWa: "Rp129.000",
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
        priceWa: "Rp179.000",
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
        priceWa: "Rp195.000",
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
    { id: 67, name: "Rocket Red", category: "Rocket 3D", img: "img/cover/rocket-3d series.jpg" }
];

// 1. Theme Theme Management
function initTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');

    const isDark = localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

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
function initKatalog() {
    const productGrid = document.getElementById('product-list');
    if (!productGrid) return;

    let currentFilter = 'Semua Produk';
    let currentSort = 'default';

    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortTrigger = document.getElementById('sort-trigger');
    const sortDropdown = document.getElementById('sort-dropdown');
    const sortOptions = document.querySelectorAll('.sort-option');
    const sortLabel = document.getElementById('current-sort-label');

    function renderProducts() {
        let filtered = [...GLOBAL_PRODUCTS];

        if (currentFilter !== 'Semua Produk') {
            filtered = GLOBAL_PRODUCTS.filter(p => p.category === currentFilter);
        }

        if (currentSort === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
        else if (currentSort === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));
        else if (currentSort === 'price-low') filtered.sort((a, b) => parseFloat(a.priceStr.replace(/[^\d]/g, '')) - parseFloat(b.priceStr.replace(/[^\d]/g, '')));
        else if (currentSort === 'price-high') filtered.sort((a, b) => parseFloat(b.priceStr.replace(/[^\d]/g, '')) - parseFloat(a.priceStr.replace(/[^\d]/g, '')));

        productGrid.innerHTML = filtered.map((p, idx) => `
            <div class="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
                <a href="product-detail.html?id=${p.id}" class="block">
                    <div class="bg-[#f2f2f2] dark:bg-slate-800 aspect-square rounded-xl overflow-hidden mb-6 relative">
                        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    </div>
                    <h3 class="text-md font-display font-bold text-slate-900 dark:text-white mb-4 px-2 leading-tight">${p.name}</h3>
                </a>
                <div class="flex flex-col px-2 pb-2">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-[0.85rem] sm:text-[0.8rem] font-bold text-slate-400 tracking-tight line-through opacity-70">${p.priceCrt}</span>
                        <div class="text-[1.2rem] sm:text-[1rem] text-brand-blue dark:text-brand-gold font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined">confirmation_number</span>
                            <span class="price-val">${p.priceWa}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mb-1">
                    <a href="product-detail.html?id=${p.id}" class="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-black transition-all text-sm md:text-xs font-bold px-4 py-3 rounded-xl text-center w-full">Lihat Detail</a>
                </div>
            </div>
        `).join('');
    }

    // Filter events
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

    // Sort events
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
}

// 4b. Cover Katalog Page Logic
function initCoverKatalog() {
    const coverGrid = document.getElementById('cover-list');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!coverGrid) return;

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

        if (currentFilter !== 'Semua Desain') {
            filtered = COVER_DESIGNS.filter(c => c.category === currentFilter);
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

    // Filter events
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
        setEl('main-image', product.img, 'src');
        setEl('wa-link', `https://wa.me/6285155060816?text=${encodeURIComponent(product.wa)}`, 'href');
        setEl('shopee-link', product.shopee, 'href');

        const btnCart = document.getElementById('add-to-cart-btn');
        if (btnCart) {
            btnCart.onclick = (e) => {
                e.preventDefault();
                openCustomModal(product.id);
            };
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

    } else if (window.location.pathname.includes('product-detail.html')) {
        window.location.href = 'produk.html';
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

    relatedContainer.innerHTML = finalRelated.map(p => `
        <div class="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
            <a href="product-detail.html?id=${p.id}" class="block">
                <div class="bg-[#f2f2f2] dark:bg-slate-800 aspect-square rounded-xl overflow-hidden mb-4 relative">
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <h3 class="text-md font-display font-bold text-slate-900 dark:text-white mb-1 px-2 leading-tight h-[2rem]">${p.name}</h3>
            </a>
            <div class="flex flex-col px-2 pb-2 mb-2">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-[0.85rem] font-bold text-slate-400 tracking-tight line-through opacity-70">${p.priceCrt}</span>
                    <div class="text-[1.2rem] sm:text-[1rem] text-brand-blue dark:text-brand-gold font-bold flex items-center gap-1">
                        <span class="material-symbols-outlined">confirmation_number</span>
                        <span class="price-val">${p.priceWa}</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between mt-auto">
                <a href="product-detail.html?id=${p.id}" class="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-black transition-all text-sm md:text-xs font-bold px-4 py-3 rounded-xl text-center w-full">Lihat Produk</a>
            </div>
        </div>
    `).join('');
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

    trendingGrid.innerHTML = trendingProducts.map((p, idx) => `
        <div class="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all animate-fade-in-up" style="animation-delay: ${idx * 50}ms">
            <a href="product-detail.html?id=${p.id}" class="block">
                <div class="bg-[#f2f2f2] dark:bg-slate-800 aspect-square rounded-xl overflow-hidden mb-6 relative">
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                </div>
                <h3 class="text-md font-display font-bold text-slate-900 dark:text-white mb-4 px-2 leading-tight">${p.name}</h3>
            </a>
                <div class="flex flex-col px-2 pb-2">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-[0.85rem] sm:text-[0.8rem] font-bold text-slate-400 tracking-tight line-through opacity-70">${p.priceCrt}</span>
                        <div class="text-[1.2rem] sm:text-[1rem] text-brand-blue dark:text-brand-gold font-bold flex items-center gap-1">
                            <span class="material-symbols-outlined">confirmation_number</span>
                            <span class="price-val">${p.priceWa}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between mb-1">
                    <a href="product-detail.html?id=${p.id}" class="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-black transition-all text-sm md:text-xs font-bold px-4 py-3 rounded-xl text-center w-full">Lihat Detail</a>
                </div>
        </div>
    `).join('');
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
        priceStr: product.priceStr,
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
                const customName = nameInput.value.trim();
                const customNote = document.getElementById('custom-note-input')?.value.trim() || '';
                const customFont = document.getElementById('custom-font-input')?.value.trim() || '';

                addToCart(product.id, customName, modalSelectedCoverId, customNote, customFont);
                // Go to cart immediately
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

    const categories = ['Semua', ...new Set(COVER_DESIGNS.map(c => c.category))];

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

    let covers = [...COVER_DESIGNS];
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
    const nameInput = document.getElementById('custom-name-input');
    const confirmBtn = document.getElementById('confirm-add-to-cart');
    const validationMsg = document.getElementById('modal-validation-msg');

    if (!confirmBtn) return;

    const hasName = nameInput && nameInput.value.trim().length > 0;
    const hasCover = modalSelectedCoverId !== null;

    confirmBtn.disabled = !(hasName && hasCover);

    if (validationMsg) {
        validationMsg.classList.toggle('hidden', hasName && hasCover);
    }
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
                <button onclick="updateCartQty(${idx}, 0)" class="absolute top-2 right-2 text-slate-300 hover:text-red-500 transition-colors p-2">
                    <span class="material-symbols-outlined text-[1.2rem]">delete</span>
                </button>
                <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                    <img src="${item.img}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 w-full">
                    <h3 class="font-bold text-lg text-slate-900 dark:text-white leading-tight pr-6">${item.name}</h3>
                    ${item.customName ? `<div class="flex items-center gap-1.5 mt-1"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">badge</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Nama: ${item.customName}</span></div>` : ''}
                    ${item.coverName ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">palette</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Cover: ${item.coverName} (${item.coverCategory})</span></div>` : ''}
                    ${item.customNote ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">edit_note</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Ucapan: ${item.customNote}</span></div>` : ''}
                    ${item.customFont ? `<div class="flex items-center gap-1.5 mt-0.5"><span class="material-symbols-outlined text-[1rem] text-brand-blue dark:text-brand-gold">font_download</span><span class="text-sm font-semibold text-slate-600 dark:text-slate-300">Font: ${item.customFont}</span></div>` : ''}
                    <div class="text-brand-blue dark:text-brand-gold font-bold text-sm mt-1 mb-3">${formatPrice(priceNum)} <span class="text-xs text-slate-400 font-normal line-through ml-1">${item.priceCrt}</span></div>
                    
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center gap-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-1 shadow-sm w-fit">
                            <button onclick="updateCartQty(${idx}, ${item.qty - 1})" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors"><span class="material-symbols-outlined text-[1rem]">remove</span></button>
                            <input type="number" readonly value="${item.qty}" class="w-10 text-center text-sm font-bold bg-transparent text-slate-900 dark:text-white outline-none border-none pointer-events-none">
                            <button onclick="updateCartQty(${idx}, ${item.qty + 1})" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-colors"><span class="material-symbols-outlined text-[1rem]">add</span></button>
                        </div>
                        <div class="text-slate-900 dark:text-white font-black text-right pl-2 shrink-0">${formatPrice(priceNum * item.qty)}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const countEl = document.getElementById('cart-count-summary');
    if (countEl) countEl.textContent = totalQty;

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
    initBiteship();

    // Checkout to WA binding
    const btnCheckout = document.getElementById('btn-checkout-wa');
    if (btnCheckout) {
        updateCheckoutButtonState(); // Initial check

        // Listen to all inputs for state update
        const inputs = [
            'cust-name', 'cust-phone', 'cust-address',
            'cust-province', 'cust-city', 'cust-district',
            'cust-subdistrict', 'cust-postal-code'
        ];
        inputs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('input', updateCheckoutButtonState);
                el.addEventListener('change', updateCheckoutButtonState);
            }
        });

        btnCheckout.addEventListener('click', () => {
            if (cart.length === 0) {
                return showAlert("Keranjang Kosong", "Wah, keranjang belanja Anda masih kosong nih. Yuk cari Al-Quran favoritmu!", "info");
            }

            const name = document.getElementById('cust-name').value.trim();
            const phone = document.getElementById('cust-phone').value.trim();
            const address = document.getElementById('cust-address').value.trim();
            const province = document.getElementById('cust-province').options[document.getElementById('cust-province').selectedIndex]?.text || '';
            const city = document.getElementById('cust-city').options[document.getElementById('cust-city').selectedIndex]?.text || '';
            const district = document.getElementById('cust-district').options[document.getElementById('cust-district').selectedIndex]?.text || '';
            const subdistrict = document.getElementById('cust-subdistrict').options[document.getElementById('cust-subdistrict').selectedIndex]?.text || '';
            const postalCode = document.getElementById('cust-postal-code').value.trim();

            if (!name || !phone || !address || !province || !city || !district || !subdistrict || !postalCode) {
                return showAlert("Data Belum Lengkap", "Mohon lengkapi data penerima dan alamat pengiriman secara lengkap agar kami bisa memproses pesanan Anda.", "warning");
            }

            let message = `Halo Admin Hamzah Quran,\nSaya ingin melakukan pemesanan (Order Web):\n\n`;
            message += `*Data Penerima:*\n`;
            message += `- Nama: ${name}\n`;
            message += `- No. WA: ${phone}\n`;
            message += `- Alamat: ${address}\n`;
            message += `- Wilayah: ${subdistrict}, ${district}, ${city}, ${province} (${postalCode})\n\n`;

            message += `*Detail Pesanan:*\n`;

            const formatPrice = (amount) => `Rp${amount.toLocaleString('id-ID')}`;
            const parsePrice = (p) => parseFloat(p?.replace(/[^0-9]/g, '') || 0);

            let subtotalStr = 0;
            let subtotalWa = 0;
            cart.forEach((c, i) => {
                const pStr = parsePrice(c.priceStr || c.priceCrt);
                const pWa = parsePrice(c.priceWa || c.priceCrt);
                subtotalStr += pStr * c.qty;
                subtotalWa += pWa * c.qty;

                message += `${i + 1}. ${c.name}\n`;
                if (c.customName) message += `   - Nama: ${c.customName}\n`;
                if (c.coverName) message += `   - Cover: ${c.coverName} (${c.coverCategory})\n`;
                if (c.customNote) message += `   - Ucapan: ${c.customNote}\n`;
                if (c.customFont) message += `   - Font: ${c.customFont}\n`;
                message += `   ${c.qty} x ${formatPrice(pWa)} = ${formatPrice(pWa * c.qty)}\n`;
            });

            const shipCost = window.selectedShippingCost || 0;
            const shipCourier = window.selectedShippingCourier || '';
            const shipService = window.selectedShippingService || '';
            const codFee = window.selectedCodFee || 0;
            const pmEl = document.getElementById('payment-method');
            const paymentMethodText = pmEl ? pmEl.options[pmEl.selectedIndex]?.text : 'Transfer Bank';

            message += `*Ringkasan:* \n`;
            message += `- Harga sebelum diskon: ${formatPrice(subtotalStr)}\n`;
            if (subtotalStr - subtotalWa > 0) {
                message += `- Total diskon: -${formatPrice(subtotalStr - subtotalWa)}\n`;
            }
            if (codFee > 0) {
                message += `- Biaya COD (3%): ${formatPrice(codFee)}\n`;
            }
            if (shipCost > 0) {
                message += `- Ongkir (${shipCourier.toUpperCase()} ${shipService}): ${formatPrice(shipCost)}\n`;
            } else {
                message += `- Ongkir: (Info via WhatsApp)\n`;
            }

            message += `==============\n`;
            message += `*TOTAL PEMBAYARAN: ${formatPrice(subtotalWa + codFee + shipCost)}*\n`;
            message += `_(Total belum termasuk ongkos kirim)_\n\n`;

            message += `*Metode Pembayaran:* ${paymentMethodText}\n\n`;

            const paymentMethodValue = document.getElementById('payment-method')?.value || 'transfer';
            if (paymentMethodValue === 'cod') {
                message += `Mohon dibantu proses pesanannya ya. Terima kasih`;
            } else {
                message += `Mohon info rekening atau link payment untuk pembayarannya. Terima kasih!`;
            }

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/6285155060816?text=${encodedMessage}`, '_blank');
        });
    }
}


// --- GLOBAL HELPERS ---
const formatPrice = (amount) => `Rp${amount.toLocaleString('id-ID')}`;
const parsePrice = (p) => parseFloat(p?.replace(/[^0-9]/g, '') || 0);
const calculateTotalWeight = () => {
    let totalWeight = 0;
    cart.forEach(item => {
        let weight = 700; // Default A5
        const name = (item.name || "").toLowerCase();
        const cat = (item.category || "").toLowerCase();
        if (cat.includes('besar') || name.includes('a4')) weight = 2000;
        else if (cat.includes('sedang') || name.includes('a5')) weight = 1000;
        else if (cat.includes('iqro')) weight = 500;
        else if (cat.includes('juz amma')) weight = 400;
        totalWeight += weight * item.qty;
    });
    return totalWeight;
};

// --- BITESHIP INTEGRATION (POSTAL CODE BASED) ---
const BITESHIP_API_KEY = 'biteship_live.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFtemFoIiwidXNlcklkIjoiNjljMjY0MDM3NTcwYWQwYmNiOWIzM2Y1IiwiaWF0IjoxNzc0MzQ3MzgyfQ.efoI3DKQ5aWPDE_y7ti__enTAdqo4gmuj9iI0uyyZ_k';
const BITESHIP_ORIGIN_POSTAL_CODE = 15223;

window.selectedShippingCost = 0;
window.selectedShippingService = '';
window.selectedShippingCourier = '';
window.selectedShippingDiscount = 0;
window.selectedCodFee = 0;


function initBiteship() {
    const postalInput = document.getElementById('cust-postal-code');
    if (!postalInput) return;

    postalInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length === 5) {
            calculateShipping(query);
        }
    });

    const paymentSelect = document.getElementById('payment-method');
    if (paymentSelect) {
        paymentSelect.addEventListener('change', () => {
            updateCartTotalUI();
        });
    }

    initRegionalAPI();
}

async function initRegionalAPI() {
    const provinceSelect = document.getElementById('cust-province');
    const citySelect = document.getElementById('cust-city');
    const districtSelect = document.getElementById('cust-district');
    const villageSelect = document.getElementById('cust-subdistrict');

    if (!provinceSelect) return;

    const baseUrl = 'https://api-regional-indonesia.vercel.app/api';

    // Helper to fetch data
    async function fetchData(endpoint) {
        try {
            const res = await fetch(`${baseUrl}${endpoint}`);
            const json = await res.json();
            return json.data || [];
        } catch (err) {
            console.error('API Regional Error:', err);
            return [];
        }
    }

    // Load Provinces
    const provinces = await fetchData('/provinces');
    provinces.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name;
        provinceSelect.appendChild(opt);
    });

    // Province Change -> Load Cities
    provinceSelect.addEventListener('change', async () => {
        citySelect.innerHTML = '<option value="" disabled selected>Memuat...</option>';
        citySelect.disabled = false;
        districtSelect.disabled = true;
        villageSelect.disabled = true;

        const cities = await fetchData(`/cities/${provinceSelect.value}`);
        citySelect.innerHTML = '<option value="" disabled selected>Pilih Kota/Kabupaten</option>';
        cities.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c.id;
            opt.textContent = c.name;
            citySelect.appendChild(opt);
        });
    });

    // City Change -> Load Districts
    citySelect.addEventListener('change', async () => {
        districtSelect.innerHTML = '<option value="" disabled selected>Memuat...</option>';
        districtSelect.disabled = false;
        villageSelect.disabled = true;

        const districts = await fetchData(`/districts/${citySelect.value}`);
        districtSelect.innerHTML = '<option value="" disabled selected>Pilih Kecamatan</option>';
        districts.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d.id;
            opt.textContent = d.name;
            districtSelect.appendChild(opt);
        });
    });

    // District Change -> Load Villages
    districtSelect.addEventListener('change', async () => {
        villageSelect.innerHTML = '<option value="" disabled selected>Memuat...</option>';
        villageSelect.disabled = false;

        const villages = await fetchData(`/villages/${districtSelect.value}`);
        villageSelect.innerHTML = '<option value="" disabled selected>Pilih Kelurahan/Desa</option>';
        villages.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.id;
            opt.textContent = v.name;
            villageSelect.appendChild(opt);
        });
    });
}


function updateCheckoutButtonState() {
    const btnCheckout = document.getElementById('btn-checkout-wa');
    if (!btnCheckout) return;

    const name = document.getElementById('cust-name')?.value.trim();
    const phone = document.getElementById('cust-phone')?.value.trim();
    const address = document.getElementById('cust-address')?.value.trim();
    const province = document.getElementById('cust-province')?.value;
    const city = document.getElementById('cust-city')?.value;
    const district = document.getElementById('cust-district')?.value;
    const subdistrict = document.getElementById('cust-subdistrict')?.value;
    const postalCode = document.getElementById('cust-postal-code')?.value.trim();
    const shipSelected = !!window.selectedShippingService;

    // Checked if everything is filled & cart is not empty & ship selected if postal entered
    const isReady = !!(name && phone && address && province && city && district && subdistrict && (postalCode && postalCode.length === 5) && cart.length > 0 && shipSelected);

    if (isReady) {
        btnCheckout.disabled = false;
        btnCheckout.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        btnCheckout.classList.add('hover:bg-green-700', 'hover:shadow-xl', 'hover:-translate-y-1');
    } else {
        btnCheckout.disabled = true;
        btnCheckout.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
        btnCheckout.classList.remove('hover:bg-green-700', 'hover:shadow-xl', 'hover:-translate-y-1');
    }
}

async function calculateShipping(destinationPostalCode) {
    const container = document.getElementById('shipping-options-container');
    const areaInfo = document.getElementById('selected-area-info');
    const areaName = document.getElementById('area-display-name');

    if (!container || !areaInfo || !areaName) return;

    // Reset previous selection as per backup
    window.selectedShippingCost = 0;
    window.selectedShippingService = '';
    window.selectedShippingCourier = '';
    updateCartTotalUI();

    // Show loading state
    areaInfo.classList.remove('hidden');
    areaName.textContent = 'Menghitung ongkir...';
    container.innerHTML = `
        <div class="col-span-full py-10 flex flex-col items-center justify-center text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
            <div class="w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full animate-spin mb-3"></div>
            <p class="text-sm font-bold">Mencari layanan kurir terbaik...</p>
        </div>
    `;
    container.classList.remove('hidden');

    // Helper to get weight & dims based on product name/category from backup
    const getProductSpecs = (item) => {
        const name = (item.name || "").toLowerCase();
        if (name.includes('a4') || name.includes('besar')) return { w: 2000, l: 30, wd: 21, h: 4 };
        if (name.includes('a5') || name.includes('sedang')) return { w: 800, l: 21, wd: 15, h: 3 };
        if (name.includes('iqro') || name.includes('kecil')) return { w: 400, l: 15, wd: 10, h: 2 };
        return { w: 600, l: 21, wd: 15, h: 3 }; // Default A5
    };

    const requestBody = {
        origin_postal_code: BITESHIP_ORIGIN_POSTAL_CODE,
        destination_postal_code: parseInt(destinationPostalCode),
        couriers: 'jne,lion,anteraja',
        items: cart.map(item => {
            const specs = getProductSpecs(item);
            return {
                name: item.name,
                description: 'Produk Hamzah Quran',
                value: parsePrice(item.priceWa || item.priceCrt),
                quantity: item.qty,
                weight: specs.w,
                length: specs.l,
                width: specs.wd,
                height: specs.h
            };
        })
    };

    try {
        const response = await fetch('https://api.biteship.com/v1/rates/couriers', {
            method: 'POST',
            headers: {
                'Authorization': BITESHIP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (data.pricing && data.pricing.length > 0) {
            // Filter and ensure we have rates
            const activeRates = data.pricing
                .filter(p => p.available)
                .sort((a, b) => a.price - b.price);

            if (activeRates.length === 0) {
                areaName.textContent = 'Hanya tersedia pengiriman manual.';
                container.innerHTML = `
                    <div class="col-span-full p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                        <span class="material-symbols-outlined text-4xl mb-3 text-slate-400">info</span>
                        <p class="text-sm font-bold text-slate-600 dark:text-slate-300">Layanan Kurir Otomatis Tidak Tersedia</p>
                        <p class="text-xs mt-1 text-slate-500">Silakan hubungi admin untuk info ongkir manual via WhatsApp.</p>
                    </div>
                `;
                return;
            }

            areaName.textContent = `Ditemukan ${activeRates.length} rekomendasi pengiriman ke ${destinationPostalCode}`;

            container.innerHTML = activeRates.map(p => {
                const isSelected = window.selectedShippingService === p.service && window.selectedShippingCourier === p.courier_code;
                
                // Get logo or icon based on courier
                let courierIcon = 'shipping';
                if (p.courier_code === 'jne') courierIcon = 'local_shipping';
                if (p.courier_code === 'lion') courierIcon = 'flight';
                if (p.courier_code === 'anteraja') courierIcon = 'electric_moped';

                return `
                    <div onclick="selectRate(${p.price}, '${p.service}', '${p.courier_name}', '${p.courier_code}')"
                         class="group cursor-pointer p-5 rounded-2xl border-2 transition-all flex flex-col justify-between h-full bg-white dark:bg-slate-900 ${isSelected ? 'border-brand-blue ring-4 ring-brand-blue/10 bg-blue-50/5' : 'border-slate-100 dark:border-slate-800 hover:border-brand-blue/30 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 shadow-sm'}">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <div class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-brand-blue dark:text-brand-gold text-sm">${courierIcon}</span>
                                    <span class="text-[11px] uppercase font-black tracking-wider text-slate-500">${p.courier_name}</span>
                                </div>
                                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">${p.type}</span>
                            </div>
                            <h4 class="text-md font-bold text-slate-900 dark:text-white mb-1">${p.service.replace(/_/g, ' ')}</h4>
                            <p class="text-xs text-slate-400">Estimasi: ${p.duration || 'N/A'}</p>
                        </div>
                        <div class="mt-6 flex items-center justify-between">
                            <div class="flex flex-col">
                                <span class="text-[10px] text-slate-400 font-medium leading-none mb-1">Ongkir</span>
                                <span class="text-lg font-black text-brand-blue dark:text-brand-gold">Rp${p.price.toLocaleString('id-ID')}</span>
                            </div>
                            <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-brand-blue border-brand-blue text-white' : 'border-slate-100 dark:border-slate-800 text-transparent group-hover:border-brand-blue/30'}">
                                <span class="material-symbols-outlined text-sm">check</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        } else {
            throw new Error(data.error || 'No rates found');
        }
    } catch (err) {
        console.error('Biteship Error:', err);
        areaName.textContent = 'Gagal memuat ongkir. Cek koneksi atau Kode Pos.';
        container.innerHTML = `
            <div class="col-span-full p-6 text-center text-rose-500 bg-rose-50 dark:bg-rose-900/10 rounded-2xl border-2 border-dashed border-rose-200 dark:border-rose-900/30">
                <span class="material-symbols-outlined text-4xl mb-2">error</span>
                <p class="text-sm font-bold">Layanan Pengiriman Tidak Tersedia</p>
                <p class="text-xs mt-1 text-slate-500">Mungkin terjadi gangguan. Silakan hubungi admin via WhatsApp untuk cek manual.</p>
            </div>
        `;
    }

    updateCartTotalUI();
    updateCheckoutButtonState();
}

function selectRate(price, service, courierName, courierCode) {
    window.selectedShippingCost = price;
    window.selectedShippingService = service;
    window.selectedShippingCourier = courierCode;

    // Trigger UI updates
    updateCartTotalUI();
    updateCheckoutButtonState();

    // Refresh the grid to show checkmark
    const pCode = document.getElementById('cust-postal-code')?.value;
    if (pCode) calculateShipping(pCode);
}

function calculateMaxSubsidy() {
    let hasA4 = false;
    let hasA5 = false;
    let iqroJuzAmmaQty = 0;

    cart.forEach(item => {
        const category = item.category || "";
        const name = (item.name || "").toLowerCase();

        if (category === "Al Quran Besar" || name.includes("a4") || name.includes("besar")) {
            hasA4 = true;
        } else if (category === "Al Quran Sedang" || name.includes("a5") || name.includes("sedang")) {
            hasA5 = true;
        } else if (category === "IQRO" || name.includes("iqro") || category === "Juz Amma" || name.includes("juz amma")) {
            iqroJuzAmmaQty += item.qty;
        }
    });

    if (hasA4) return 25000;
    if (hasA5) return 15000;
    if (iqroJuzAmmaQty >= 2) return 15000;
    return 0;
}

function updateCartTotalUI() {
    if (cart.length === 0) return;

    // Subtotals
    const subtotalCrt = cart.reduce((sum, item) => sum + (parsePrice(item.priceCrt) * item.qty), 0);
    const subtotalWa = cart.reduce((sum, item) => sum + (parsePrice(item.priceWa || item.priceCrt) * item.qty), 0);

    // Shipping logic from Biteship API
    const shippingOrig = window.selectedShippingCost || 0;
    const maxSubsidy = calculateMaxSubsidy();
    const subsidy = shippingOrig <= maxSubsidy ? shippingOrig : maxSubsidy;
    window.selectedShippingDiscount = subsidy;

    const shipEl = document.getElementById('cart-shipping-cost');
    if (shipEl) {
        shipEl.textContent = shippingOrig > 0 ? `Rp${shippingOrig.toLocaleString('id-ID')}` : 'by WA';
    }

    // Update UI Rows
    const subtotalStrEl = document.getElementById('cart-subtotal-original');
    if (subtotalStrEl) subtotalStrEl.textContent = `Rp${subtotalCrt.toLocaleString('id-ID')}`;

    const discountEl = document.getElementById('cart-total-discount');
    if (discountEl) {
        // Product discount + Shipping subsidy
        const productDiscount = subtotalCrt - subtotalWa;
        const totalDiscount = productDiscount + subsidy;
        discountEl.textContent = `-Rp${totalDiscount.toLocaleString('id-ID')}`;
    }

    // Payment/COD logic
    const paymentMethod = document.getElementById('payment-method')?.value || 'transfer';
    let codFee = 0;
    if (paymentMethod === 'cod') {
        // COD fee usually calculated from (Items + Shipping Original)
        codFee = Math.round((subtotalWa + shippingOrig) * 0.03);
    }
    window.selectedCodFee = codFee;

    // Update UI COD Rows
    const codRow = document.getElementById('cod-fee-row');
    const codTextEl = document.getElementById('cod-fee');
    if (codFee > 0 && codRow) {
        codRow.classList.remove('hidden');
        codTextEl.textContent = `Rp${codFee.toLocaleString('id-ID')}`;
    } else if (codRow) {
        codRow.classList.add('hidden');
    }

    // Grand Total: (Items WA Price) + (Shipping Orig - Subsidy) + COD Fee
    const finalShipping = shippingOrig - subsidy;
    const grandTotal = subtotalWa + finalShipping + codFee;
    
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `Rp${grandTotal.toLocaleString('id-ID')}`;

    updateCheckoutButtonState();
}

// --- START ALL ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    initMobileMenu();
    initLenis();
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
