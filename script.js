// ========================
// Contact Form Handling
// ========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            showToast('Please fill in all fields!');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:poojajadhav550777@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message
        showToast('Opening your email client...');
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

// ========================
// Download CV Button
// ========================
const downloadCVBtn = document.getElementById('downloadCVBtn');

if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Local resume PDF download
        const cvDownloadLink = 'Pooja_Jadhav_Resume.pdf';
        
        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = cvDownloadLink;
        link.download = 'Pooja_Jadhav_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Downloading CV...');
    });
}

// ========================
// Dark Mode Toggle
// ========================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ========================
// Smooth Scrolling Navigation
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navbar = document.querySelector('.navbar-collapse');
            if (navbar.classList.contains('show')) {
                const toggleButton = document.querySelector('.navbar-toggler');
                toggleButton.click();
            }
        }
    });
});

// ========================
// Navbar Scroll Effect
// ========================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '1rem 0';
    }
});

// ========================
// Active Navigation Link
// ========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
            link.style.color = '#ff6f00';
        } else {
            link.style.color = '';
        }
    });
});

// ========================
// Intersection Observer for Animations
// ========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards, experience cards, and certification cards
document.querySelectorAll('.skill-card, .experience-card, .education-card, .cert-card').forEach(element => {
    observer.observe(element);
});

// ========================
// Add Copy to Clipboard for Contact Info
// ========================
document.querySelectorAll('.contact-item a, .contact-item p').forEach(element => {
    element.style.cursor = 'pointer';
    element.addEventListener('click', function(e) {
        if (this.textContent.includes('@') || this.textContent.includes('91')) {
            const text = this.textContent.trim();
            copyToClipboard(text);
        }
    });
});

function copyToClipboard(text) {
    // Remove any whitespace and formatting
    const cleanText = text.trim();
    
    navigator.clipboard.writeText(cleanText).then(() => {
        // Show toast notification
        showToast('Copied to clipboard: ' + cleanText);
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = cleanText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard: ' + cleanText);
    });
}

// ========================
// Toast Notification
// ========================
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #0d47a1, #ff6f00);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// ========================
// Add CSS for Toast Animations
// ========================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================
// Form Validation (if you add a contact form)
// ========================
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#ff6f00';
            isValid = false;
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
    
    return isValid;
}

// ========================
// Parallax Effect (optional)
// ========================
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.hero-section::before, .hero-section::after');
    if (window.innerWidth > 768) {
        document.querySelector('.hero-section').style.backgroundPosition = `center ${window.scrollY * 0.5}px`;
    }
});

// ========================
// Print Resume Function
// ========================
function printResume() {
    window.print();
}

// ========================
// Download Resume Function (optional - requires PDF)
// ========================
function downloadResume() {
    showToast('Resume download feature coming soon!');
}

// ========================
// Initialize Bootstrap Components
// ========================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize tooltips (if any are added)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

// ========================
// Add scroll-to-top button (optional)
// ========================
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopButton.id = 'scrollTopBtn';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    background: linear-gradient(135deg, #0d47a1, #ff6f00);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    z-index: 99;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseover', () => {
    scrollTopButton.style.transform = 'scale(1.1)';
});

scrollTopButton.addEventListener('mouseout', () => {
    scrollTopButton.style.transform = 'scale(1)';
});

// ========================
// Add Loading Animation
// ========================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    // Trigger any initial animations
    document.querySelectorAll('.hero-section h1, .hero-section h2, .hero-section p').forEach(element => {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = '';
        }, 100);
    });
});

// ========================
// Mobile Menu Close on Click
// ========================
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks2 = document.querySelectorAll('.navbar-nav .nav-link');

navLinks2.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});

// ========================
// Typing Effect (Optional - for dynamic text)
// ========================
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

console.log('Portfolio JS loaded successfully!');
