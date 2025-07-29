
// script.js - Handles desktop and mobile navigation dropdowns and toggles
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const body = document.body;

  // Toggle Mobile Menu
  toggleButton?.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Close Mobile Menu on Outside Click
  overlay?.addEventListener("click", () => {
    toggleButton.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
  });

  // Dropdown Toggle for both desktop and mobile
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const dropdownMenu = this.nextElementSibling;

      if (window.innerWidth >= 992) {
        // Desktop view toggle
        this.classList.toggle("active");
        dropdownMenu.classList.toggle("show");

        // Close others
        dropdownToggles.forEach((other) => {
          if (other !== this) {
            other.classList.remove("active");
            other.nextElementSibling?.classList.remove("show");
          }
        });
      } else {
        // Mobile view toggle
        this.classList.toggle("active");
        dropdownMenu.classList.toggle("show");
      }
    });
  });

  // Close dropdown on outside click (desktop only)
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-item") && window.innerWidth >= 992) {
      dropdownToggles.forEach((toggle) => {
        toggle.classList.remove("active");
        toggle.nextElementSibling?.classList.remove("show");
      });
    }
  });
});
// Close mobile menu when a nav-link is clicked (mobile only)
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      toggleButton.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });
});
// Close mobile menu if clicked outside nav-menu
document.addEventListener("click", function (e) {
  const isClickInsideMenu = navMenu.contains(e.target) || toggleButton.contains(e.target);

  if (!isClickInsideMenu && window.innerWidth < 992) {
    toggleButton.classList.remove("active");
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
  }
});