// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const hamburger = this.querySelector('.hamburger');
    if (navMenu.classList.contains('active')) {
        hamburger.style.background = 'transparent';
    } else {
        hamburger.style.background = 'var(--color-text)';
    }
});

// Mobile Dropdown Toggle
document.querySelectorAll('.nav-dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link:not(.nav-dropdown > .nav-link), .dropdown-link').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            document.querySelector('.hamburger').style.background = 'var(--color-text)';
        }
    });
});

// Highlight active nav link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--color-wine-light)';
                } else {
                    link.style.color = '';
                }
            });
        }
    });
});

// Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    
    parallaxBgs.forEach((bg, index) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        bg.style.transform = `translateY(${yPos}px)`;
    });
});

// Accordion Functionality
function toggleAccordion(button) {
    const accordionItem = button.parentElement;
    const content = accordionItem.querySelector('.accordion-content');
    const allItems = document.querySelectorAll('.accordion-item');
    
    // Close other accordions in the same card
    const currentCard = button.closest('.residencia-card');
    const itemsInCard = currentCard.querySelectorAll('.accordion-item');
    
    itemsInCard.forEach(item => {
        if (item !== accordionItem) {
            const otherContent = item.querySelector('.accordion-content');
            const otherButton = item.querySelector('.accordion-header');
            otherContent.classList.remove('active');
            otherButton.classList.remove('active');
        }
    });
    
    // Toggle current accordion
    button.classList.toggle('active');
    content.classList.toggle('active');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 20;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fade In Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.residencia-card, .service-item, .info-card');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form Submission Handler - WhatsApp Integration
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const nombre = document.getElementById('nombre').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const tipoResidencia = document.getElementById('tipo-residencia').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Get current language for labels
    const lang = currentLang || 'es';
    const t = translations[lang];
    
    // Build WhatsApp message
    let whatsappMessage = `*${t?.contact_title || 'Nueva Consulta - Legal Unity'}*\n\n`;
    whatsappMessage += `👤 *${t?.contact_name || 'Nombre'}:* ${nombre}\n`;
    whatsappMessage += `🌍 *${t?.contact_nationality || 'Nacionalidad'}:* ${nacionalidad}\n`;
    whatsappMessage += `📧 *${t?.contact_email || 'Email'}:* ${email}\n`;
    whatsappMessage += `📱 *${t?.contact_phone || 'Teléfono'}:* ${telefono}\n`;
    whatsappMessage += `🏠 *${t?.contact_type || 'Tipo de Residencia'}:* ${tipoResidencia}\n`;
    
    if (mensaje) {
        whatsappMessage += `\n💬 *${t?.contact_message || 'Mensaje'}:*\n${mensaje}`;
    }
    
    // WhatsApp phone number (Costa Rica format)
    const whatsappNumber = '50689125481'; // +506 89125481
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Build WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    const successMessage = lang === 'es' 
        ? '¡Redirigiendo a WhatsApp! El mensaje se abrirá automáticamente.' 
        : 'Redirecting to WhatsApp! The message will open automatically.';
    
    alert(successMessage);
    
    // Optionally reset form after a delay
    setTimeout(() => {
        this.reset();
    }, 1000);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add smooth parallax to all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.parallax-section');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const parallaxBg = section.querySelector('.parallax-bg');
            
            if (parallaxBg && scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                const speed = 0.3 + (index * 0.05);
                const yPos = (scrolled - sectionTop) * speed;
                parallaxBg.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
});

// Highlight active section on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.footer-links a').forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--color-wine-light)';
                }
            });
        }
    });
});

// Animated counter for numbers (if needed in the future)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Add hover effect to cards
document.querySelectorAll('.residencia-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--color-wine)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--color-light-gray)';
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Counter Animation for Statistics with easing
function animateCounter(element, target, duration = 2000) {
    const startTime = Date.now();
    const originalText = element.textContent;
    let suffix = '';
    
    // Detect suffix (%, +, etc)
    if (originalText.includes('%')) {
        suffix = '%';
    } else if (originalText.includes('+')) {
        suffix = '+';
    }
    
    // Add counting class for animation
    element.classList.add('counting');
    
    // Easing function (ease-out)
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
    
    const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Apply easing
        const easedProgress = easeOutQuart(progress);
        const current = Math.floor(easedProgress * target);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.classList.remove('counting');
        }
    };
    
    requestAnimationFrame(animate);
}

// Observe statistics section for animation trigger
function initStatsAnimation() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;
    
    const statsNumbers = statsSection.querySelectorAll('.stat-number');
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                
                // Add visible class to stat items for fade-in effect
                const statItems = statsSection.querySelectorAll('.stat-item');
                statItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
                
                // Animate each stat number with staggered delay
                statsNumbers.forEach((stat, index) => {
                    const text = stat.textContent;
                    let targetNumber;
                    
                    // Extract number from text (500+, 15+, 98%, 45+)
                    if (text.includes('%')) {
                        targetNumber = parseInt(text.replace('%', ''));
                    } else if (text.includes('+')) {
                        targetNumber = parseInt(text.replace('+', ''));
                    } else {
                        targetNumber = parseInt(text);
                    }
                    
                    // Start animation with staggered delay (150ms per item)
                    setTimeout(() => {
                        animateCounter(stat, targetNumber, 2000);
                    }, index * 150);
                });
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of section is visible
    });
    
    observer.observe(statsSection);
}

// Initialize Lucide icons on page load
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Lucide library to load
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize language
    initLanguage();
    
    // Initialize stats animation
    initStatsAnimation();
    
    // Initialize hero slider
    initHeroSlider();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize parallax effect
    initParallaxEffect();
});

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .stagger-animation');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Parallax Effect
function initParallaxEffect() {
    let ticking = false;
    
    // Hero parallax
    const heroSlider = document.querySelector('.hero-slider');
    
    // Section backgrounds parallax
    const parallaxSections = document.querySelectorAll('.about-section-modern, .stats-section');
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                // Hero parallax - slow scroll
                if (heroSlider) {
                    const heroOffset = scrolled * 0.5;
                    heroSlider.style.transform = `translateY(${heroOffset}px)`;
                }
                
                // Section parallax - subtle movement
                parallaxSections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top;
                    const windowHeight = window.innerHeight;
                    
                    if (sectionTop < windowHeight && sectionTop > -rect.height) {
                        const scrollPercent = (windowHeight - sectionTop) / (windowHeight + rect.height);
                        const translateY = scrollPercent * 50 - 25; // Range: -25 to 25
                        section.style.backgroundPosition = `center ${translateY}px`;
                    }
                });
                
                // Image collage parallax
                const collageMain = document.querySelector('.collage-main');
                if (collageMain) {
                    const rect = collageMain.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                        const translateY = (scrollPercent - 0.5) * 30;
                        collageMain.style.transform = `translateY(${translateY}px)`;
                    }
                }
                
                // Stats items subtle scale
                const statItems = document.querySelectorAll('.stat-item.visible');
                statItems.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const itemCenter = rect.top + rect.height / 2;
                        const windowCenter = window.innerHeight / 2;
                        const distance = Math.abs(itemCenter - windowCenter);
                        const maxDistance = window.innerHeight / 2;
                        const scale = 1 - (distance / maxDistance) * 0.05; // Max 5% scale difference
                        item.style.transform = `scale(${scale})`;
                    }
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}


// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let autoPlayInterval;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function goToSlide(n) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        
        currentSlide = n;
        
        // Reset auto-play
        resetAutoPlay();
    }
    
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        goToSlide(next);
    }
    
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        goToSlide(prev);
    }
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Pause on hover
    const heroSection = document.querySelector('.hero-modern');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoPlay);
        heroSection.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Start auto-play
    startAutoPlay();
}

// Language Switcher
let currentLang = localStorage.getItem('language') || 'es';

function initLanguage() {
    // Set initial language
    setLanguage(currentLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
        
        // Set active state
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    updateContent(lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updateContent(lang) {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update specific elements that need special handling
    updateAccordionHeaders(lang);
    
    // Update complex content (from i18n-content.js)
    if (typeof updateComplexContent === 'function') {
        updateComplexContent(lang);
    }
}

function updateAccordionHeaders(lang) {
    // Rentista accordion
    const rentistAccordions = document.querySelectorAll('#rentista .accordion-header span:first-child');
    if (rentistAccordions[0] && translations[lang]) {
        rentistAccordions[0].textContent = '✔ ' + translations[lang].rentista_requirements_general;
    }
    if (rentistAccordions[1] && translations[lang]) {
        rentistAccordions[1].textContent = '✔ ' + translations[lang].rentista_requirements_specific;
    }
    if (rentistAccordions[2] && translations[lang]) {
        rentistAccordions[2].textContent = '✔ ' + translations[lang].rentista_services;
    }
    
    // Pensionado accordion
    const pensionadoAccordions = document.querySelectorAll('#pensionado .accordion-header span:first-child');
    if (pensionadoAccordions[0] && translations[lang]) {
        pensionadoAccordions[0].textContent = '✔ ' + translations[lang].pensionado_requirements_specific;
    }
    if (pensionadoAccordions[1] && translations[lang]) {
        pensionadoAccordions[1].textContent = '✔ ' + translations[lang].rentista_requirements_general;
    }
    if (pensionadoAccordions[2] && translations[lang]) {
        pensionadoAccordions[2].textContent = '✔ ' + translations[lang].rentista_services;
    }
    
    // Inversionista accordion
    const inversionistaAccordions = document.querySelectorAll('#inversionista .accordion-header span:first-child');
    if (inversionistaAccordions[0] && translations[lang]) {
        inversionistaAccordions[0].textContent = '✔ ' + translations[lang].inversionista_requirements_specific;
    }
    if (inversionistaAccordions[1] && translations[lang]) {
        inversionistaAccordions[1].textContent = '✔ ' + translations[lang].inversionista_documentation;
    }
    if (inversionistaAccordions[2] && translations[lang]) {
        inversionistaAccordions[2].textContent = '✔ ' + translations[lang].rentista_requirements_general;
    }
    if (inversionistaAccordions[3] && translations[lang]) {
        inversionistaAccordions[3].textContent = '✔ ' + translations[lang].rentista_services;
    }
}

function updateRequirementsList(lang) {
    // This function updates the requirements lists
    // You can add specific updates for list items here if needed
}

function updateServicesList(lang) {
    // Update services in accordions
    document.querySelectorAll('.accordion-content ol li').forEach((li, index) => {
        const key = 'service_' + (index + 1);
        if (translations[lang] && translations[lang][key]) {
            li.textContent = translations[lang][key];
        }
    });
}
