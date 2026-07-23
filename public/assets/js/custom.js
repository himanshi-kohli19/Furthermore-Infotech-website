(function () {
  const body = document.body;
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const contactForm = document.querySelector(".contact-form");

  function syncHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const isOpen = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let message = contactForm.querySelector(".form-message");
      if (!message) {
        message = document.createElement("p");
        message.className = "form-message";
        contactForm.appendChild(message);
      }
      message.textContent = "Thank you for reaching out. Your project brief has been received, and our team will contact you shortly.";
      contactForm.reset();
    });
  }

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
})();
