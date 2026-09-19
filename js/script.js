// ==================== NAVIGATION DOTS ====================
const sections = document.querySelectorAll('.section');
const navDots = document.querySelectorAll('.nav-dot');

// Update active dot on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            navDots.forEach(dot => dot.classList.remove('active'));
            if (navDots[index]) {
                navDots[index].classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Smooth scroll on dot click
navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-heading, .section-text, .portfolio-grid img, .quality-photos img');

    const animObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animObserver.observe(el);
    });
};

animateOnScroll();

// ==================== PARALLAX EFFECT ON HERO ====================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-image img');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ==================== KEYBOARD NAVIGATION ====================
let currentSection = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        currentSection = Math.min(currentSection + 1, sections.length - 1);
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        currentSection = Math.max(currentSection - 1, 0);
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
});

// Update current section on scroll
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach((section, index) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            currentSection = index;
        }
    });
});

console.log('📷 LENZ Photography Portfolio loaded successfully!');
