// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target) || menuToggle.contains(event.target);
    
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.textContent = '☰';
    }
});

// Smooth scroll for CTA button
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Active navigation highlight
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Image hover effect enhancement
const profileImg = document.querySelector('.profile-img');
if (profileImg) {
    profileImg.addEventListener('mouseenter', function() {
        this.style.borderColor = '#60a5fa';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        this.style.borderColor = '#3b82f6';
    });
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button functionality if exists
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', scrollToTop);
}

// Form validation (for contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields!');
            return false;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address!');
            return false;
        }
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Gallery image click functionality
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('.gallery-img');
        if (img) {
            // Create fullscreen overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.alt = img.alt;
            fullImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 10px;
            `;
            
            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);
            
            // Close on click
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            console.log('Gallery image opened:', img.alt);
        }
    });
});

// Video play tracking
const familyVideo = document.getElementById('familyVideo');
if (familyVideo) {
    familyVideo.addEventListener('play', function() {
        console.log('Video started playing');
    });
    
    familyVideo.addEventListener('pause', function() {
        console.log('Video paused');
    });
}