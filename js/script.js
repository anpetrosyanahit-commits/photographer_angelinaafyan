// ==================== LANGUAGE SWITCHER ====================
const btnEn = document.getElementById('btn-en');
const btnAm = document.getElementById('btn-am');
const translatableElements = document.querySelectorAll('[data-en]');

function setLanguage(lang) {
    if (lang === 'en') {
        btnEn.classList.add('active');
        btnAm.classList.remove('active');
    } else {
        btnAm.classList.add('active');
        btnEn.classList.remove('active');
    }

    translatableElements.forEach(el => {
        const newText = el.getAttribute(`data-${lang}`);
        if (newText) el.textContent = newText;
    });
}

btnEn.addEventListener('click', () => setLanguage('en'));
btnAm.addEventListener('click', () => setLanguage('am'));

// ==================== CHAT TOGGLE ====================
const chatToggle = document.getElementById('chatToggle');
const contactCard = document.getElementById('contactCard');

chatToggle.addEventListener('click', () => {
    contactCard.classList.toggle('open');
    const icon = chatToggle.querySelector('i');
    if (contactCard.classList.contains('open')) {
        icon.classList.remove('fa-comment-dots');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-comment-dots');
    }
});

document.addEventListener('click', (e) => {
    if (!contactCard.contains(e.target) && !chatToggle.contains(e.target)) {
        contactCard.classList.remove('open');
        chatToggle.querySelector('i').classList.remove('fa-times');
        chatToggle.querySelector('i').classList.add('fa-comment-dots');
    }
});

// ==================== NAVIGATION ACTIVE STATE ====================
const sections = document.querySelectorAll('section');
const navIcon = document.querySelector('.nav-camera-icon');

const observerOptions = { root: null, rootMargin: '-50% 0px', threshold: 0 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navIcon.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ==================== SMOOTH SCROLL ====================
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
