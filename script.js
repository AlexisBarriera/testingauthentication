// ===== Mobile Menu Toggle =====
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Contact Form Submission =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: contactForm.querySelector('[name="name"]').value,
            email: contactForm.querySelector('[name="email"]').value,
            phone: contactForm.querySelector('[name="phone"]').value,
            service: contactForm.querySelector('[name="service"]').value,
            message: contactForm.querySelector('[name="message"]').value
        };
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('¡Gracias por su consulta! Nos pondremos en contacto con usted pronto.\n\nThank you for your inquiry! We will contact you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Smooth Scroll with Offset for Fixed Navbar =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Fade-in Animation on Scroll =====
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply fade-in to cards and sections
const fadeElements = document.querySelectorAll('.service-card, .process-step, .benefit-card, .contact-item');
fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - navbar.offsetHeight - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== WhatsApp Button Click Tracking =====
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
    });
});

// ===== Phone Link Click Tracking =====
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone link clicked');
    });
});

// ===== Instagram Link Click Tracking =====
document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Instagram link clicked');
    });
});

// ===== Scroll to Top on Page Load =====
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===== Add loading class to body =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Service Card Hover Effect Enhancement =====
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderTopWidth = '6px';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderTopWidth = '4px';
    });
});

// ===== Lazy Loading for Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Form Validation Enhancement =====
const formInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
formInputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.classList.add('error');
    });

    input.addEventListener('input', () => {
        input.classList.remove('error');
    });
});

// ===== Add smooth hover effect to buttons =====
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});


// ===== Console Welcome Message =====
console.log('%c Tree Professional Emporium ', 'background: #4a7c59; color: white; font-size: 20px; padding: 10px;');
console.log('%c Servicios Profesionales en Ponce, PR ', 'background: #2d5a3d; color: white; font-size: 14px; padding: 5px;');
console.log('Website powered by professional design and development.');
