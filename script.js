// script.js - Cleaned version
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const navLinks = document.querySelectorAll(".nav-link");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const body = document.body;

  //  Toggle Mobile Menu
  toggleButton?.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close mobile menu on overlay click
  overlay?.addEventListener("click", closeMobileMenu);

  // Close mobile menu on nav link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        closeMobileMenu();
      }
    });
  });

  //  Close mobile menu if clicked outside
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth < 992 &&
      !navMenu.contains(e.target) &&
      !toggleButton.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  //  Dropdown toggle for both views
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;

      if (window.innerWidth >= 992) {
        // Desktop: Toggle current + close others
        this.classList.toggle("active");
        dropdownMenu.classList.toggle("show");

        dropdownToggles.forEach((other) => {
          if (other !== this) {
            other.classList.remove("active");
            other.nextElementSibling?.classList.remove("show");
          }
        });
      } else {
        // Mobile: Just toggle this one
        this.classList.toggle("active");
        dropdownMenu.classList.toggle("show");
      }
    });
  });

  // Close all dropdowns on outside click (desktop only)
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-item") && window.innerWidth >= 992) {
      dropdownToggles.forEach((toggle) => {
        toggle.classList.remove("active");
        toggle.nextElementSibling?.classList.remove("show");
      });
    }
  });

  // ✅ Reusable function to close menu
  function closeMobileMenu() {
    toggleButton.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
  }
});
