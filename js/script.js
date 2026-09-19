// ==================== NAVIGATION DOTS ====================
const sections = document.querySelectorAll('section');
const navDots = document.querySelectorAll('.nav-dot');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navDots.forEach(dot => {
                dot.classList.remove('active');
                if (dot.getAttribute('href') === `#${id}`) {
                    dot.classList.add('active');
                }
            });
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

console.log('✨ Angelina Afyan Portfolio loaded successfully!');
