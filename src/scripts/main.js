// This file contains JavaScript code for interactive features of the gym website.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            alert('Thank you for contacting us! We will get back to you soon.');
            form.reset();
        });
    }

    const toggleMenu = () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('active');
    };

    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});