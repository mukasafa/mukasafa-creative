document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Cek apakah cookies sudah pernah disetujui
    if (localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'none';
    }

    acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
        // Aktifkan cookies tracking di sini jika diperlukan
        console.log('Cookies diterima');
    });

    rejectButton.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieConsent.style.display = 'none';
        // Nonaktifkan cookies tracking di sini
        console.log('Cookies ditolak');
    });
});


// form email 
// Ganti dengan Service ID Anda
const SERVICE_ID = 'service_ixkuktm';

// Fungsi kirim email
// Inisialisasi EmailJS
emailjs.init('kGxsbMLba6OdZ9Csx'); // Public Key Anda

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        await emailjs.sendForm(
            'service_ixkuktm3', // Service ID
            'template_zij3kkm', // Template ID
            e.target // Form element
        );

        alert('Pesan terkirim!');
        e.target.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal mengirim pesan');
    }
});