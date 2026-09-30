document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)';
        }
    });

    const navContactBtn = document.getElementById('nav-contact-btn');
    const contactSection = document.getElementById('contact');

    navContactBtn.addEventListener('click', () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});