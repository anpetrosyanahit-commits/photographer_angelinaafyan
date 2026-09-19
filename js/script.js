// ==================== LANGUAGE SWITCHER LOGIC ====================
const langOptions = document.querySelectorAll('.lang-opt');
const translatableElements = document.querySelectorAll('[data-en]');

let currentLang = 'en';

langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        // Update active state
        langOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');

        // Get selected language
        const lang = opt.getAttribute('data-lang');
        currentLang = lang;

        // Update text content
        translatableElements.forEach(el => {
            if (el.hasAttribute(`data-${lang}`)) {
                el.textContent = el.getAttribute(`data-${lang}`);
            }
        });
    });
});

// ==================== NAVIGATION CAMERA ICON ====================
const sections = document.querySelectorAll('.section, .fleur-section');
const navIcon = document.querySelector('.nav-camera-icon');

const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Highlight camera icon when any section is visible
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
