document.addEventListener('DOMContentLoaded', () => {
    const navbarTemplate = `
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <a class="navbar-brand fw-bold" href="index.html" aria-label="Halaman Utama">FALAH</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#hero" aria-label="Beranda">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.html#resume" aria-label="Riwayat">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="projects.html" aria-label="Proyek">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html" aria-label="Kontak">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`;

    // Tambahkan navbar ke setiap halaman jika belum ada
    if (!document.querySelector('header')) {
        const navbarContainer = document.createElement('div');
        navbarContainer.innerHTML = navbarTemplate;
        document.body.insertBefore(navbarContainer.firstChild, document.body.firstChild);
    }

    // Fungsi untuk menandai halaman aktif
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach(link => {
            // Hapus class active sebelumnya
            link.classList.remove('active');

            // Cek URL untuk menentukan halaman aktif
            if (currentPath.includes(link.getAttribute('href').split('#')[0])) {
                link.classList.add('active');
            }
        });
    }

    // Panggil fungsi untuk set active link
    setActiveNavLink();
});