// Login Handler
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value
        })
    });

    const data = await response.json();
    if (data.token) {
        localStorage.setItem('adminToken', data.token);
        window.location.href = 'admin-dashboard.html';
    }
});

// Logout Handler
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    localStorage.removeItem('adminToken');
    window.location.href = 'admin-login.html';
});

// Project Upload Handler
document.getElementById('projectForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const files = e.target.media.files;

    Array.from(files).forEach(file => {
        formData.append('media', file);
    });

    formData.append('title', e.target.title.value);
    formData.append('description', e.target.description.value);
    formData.append('category', e.target.category.value);

    await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: formData
    });

    alert('Project uploaded!');
});

// Load Contact Messages
async function loadContacts() {
    const response = await fetch('/api/contact');
    const contacts = await response.json();

    const contactList = document.getElementById('contactList');
    contactList.innerHTML = contacts.map(contact => `
        <div class="contact-item">
            <h4>${contact.name}</h4>
            <p>${contact.email}</p>
            <p>${contact.message}</p>
        </div>
    `).join('');
}

// Panggil saat halaman dashboard dimuat
window.onload = () => {
    if (window.location.pathname.includes('admin-dashboard.html')) {
        loadContacts();
    }
};