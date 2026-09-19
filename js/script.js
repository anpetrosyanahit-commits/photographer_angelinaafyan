// ==================== LANGUAGE SWITCHER LOGIC ====================
const btnEn = document.getElementById('btn-en');
const btnAm = document.getElementById('btn-am');
const translatableElements = document.querySelectorAll('[data-en]');

function setLanguage(lang) {
    // Update button styles
    if (lang === 'en') {
        btnEn.classList.add('active');
        btnAm.classList.remove('active');
    } else {
        btnAm.classList.add('active');
        btnEn.classList.remove('active');
    }

    // Update text content
    translatableElements.forEach(el => {
        const newText = el.getAttribute(`data-${lang}`);
        if (newText) {
            el.textContent = newText;
        }
    });
}

// Event Listeners for Buttons
btnEn.addEventListener('click', () => setLanguage('en'));
btnAm.addEventListener('click', () => setLanguage('am'));

// ==================== NAVIGATION CAMERA ICON ====================
const sections = document.querySelectorAll('.section, .fleur-section');
const navIcon = document.querySelector('.nav-camera-icon');

const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navIcon.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Smooth scroll for "Services" link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('✨ Angelina Afyan Portfolio loaded successfully!');
