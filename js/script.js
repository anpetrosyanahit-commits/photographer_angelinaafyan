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

// ==================== PORTFOLIO STRIP NAVIGATION ====================
const stripImages = [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", info: "Wedding Collection • f/2.8" },
    { src: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?w=1200&q=80", info: "Golden Hour • f/1.8" },
    { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1200&q=80", info: "Portrait Session • f/4.0" },
    { src: "https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=1200&q=80", info: "Love Story • f/2.0" },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80", info: "Editorial • f/5.6" }
];

let currentIndex = 0;
const stripImg = document.getElementById('stripImg');
const stripInfo = document.getElementById('stripInfo');
const heroFrame = document.getElementById('heroFrame');

function updateStrip(direction) {
    // Animate Hero Frame Sprockets too for consistency
    if(heroFrame) {
        heroFrame.classList.add('advance');
        setTimeout(() => heroFrame.classList.remove('advance'), 400);
    }

    // Fade out
    stripImg.style.opacity = '0';
    
    setTimeout(() => {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % stripImages.length;
        } else {
            currentIndex = (currentIndex - 1 + stripImages.length) % stripImages.length;
        }
        
        stripImg.src = stripImages[currentIndex].src;
        stripInfo.textContent = stripImages[currentIndex].info;
        
        // Fade in
        stripImg.onload = () => { stripImg.style.opacity = '1'; };
    }, 300);
}

document.getElementById('nextBtn').addEventListener('click', () => updateStrip('next'));
document.getElementById('prevBtn').addEventListener('click', () => updateStrip('prev'));

// Auto advance every 5 seconds
setInterval(() => updateStrip('next'), 5000);

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
