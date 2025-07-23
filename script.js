// Custom JavaScript for Singrauli Municipal Corporation Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize animations
    initializeAnimations();
    
    // Handle smooth scrolling for navigation links
    handleSmoothScrolling();
    
    // Handle mobile menu interactions
    handleMobileMenu();
    
    // Add loading effects
    addLoadingEffects();
    
    // Handle department dropdown interactions
    handleDepartmentDropdown();
});

/**
 * Initialize fade-in animations for elements
 */
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.official-card, .main-banner, .updates-section, .mobile-official-card, .mobile-updates-section');
    
    // Add fade-in class to elements
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 200);
    });
}

/**
 * Handle smooth scrolling for anchor links
 */
function handleSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Handle mobile menu interactions
 */
function handleMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
}

/**
 * Add loading effects and hover interactions
 */
function addLoadingEffects() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.official-card, .mobile-official-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to update items
    const updateItems = document.querySelectorAll('.update-item');
    updateItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.backgroundColor = '#e3f2fd';
            setTimeout(() => {
                this.style.backgroundColor = '#f8f9fa';
            }, 300);
        });
    });
}

/**
 * Handle department dropdown interactions
 */
function handleDepartmentDropdown() {
    const departmentLinks = document.querySelectorAll('.dropdown-item');
    
    departmentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add loading effect
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>' + this.textContent;
            
            // Simulate loading delay
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 500);
        });
    });
}

/**
 * Handle window resize events for responsive behavior
 */
window.addEventListener('resize', function() {
    // Adjust layout based on screen size
    const mobileLayout = document.querySelector('.mobile-layout');
    const desktopLayout = document.querySelector('.d-none.d-md-block');
    
    if (window.innerWidth < 768) {
        // Mobile view adjustments
        if (mobileLayout) {
            mobileLayout.style.display = 'block';
        }
    } else {
        // Desktop view adjustments
        if (desktopLayout) {
            desktopLayout.style.display = 'block';
        }
    }
});

/**
 * Add scroll effects for header
 */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-section');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 123, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '';
        header.style.backdropFilter = '';
    }
});

/**
 * Utility function to show loading spinner
 */
function showLoading(element) {
    const spinner = document.createElement('div');
    spinner.className = 'spinner-border spinner-border-sm me-2';
    spinner.setAttribute('role', 'status');
    element.prepend(spinner);
}

/**
 * Utility function to hide loading spinner
 */
function hideLoading(element) {
    const spinner = element.querySelector('.spinner-border');
    if (spinner) {
        spinner.remove();
    }
}

/**
 * Handle form submissions (if any forms are added later)
 */
function handleFormSubmissions() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            showLoading(submitBtn);
            
            // Simulate form processing
            setTimeout(() => {
                hideLoading(submitBtn);
                alert('Form submitted successfully!');
            }, 2000);
        });
    });
}

/**
 * Initialize tooltips and popovers (Bootstrap components)
 */
function initializeBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Call initialization functions
initializeBootstrapComponents();
