document.addEventListener("DOMContentLoaded", () => {
  // ScrollReveal animations
  const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: false
  });

  sr.reveal('.home-content', { origin: 'top' });
  sr.reveal('.about-content', { origin: 'top' });
  sr.reveal('.skills-content', { origin: 'top' });
  sr.reveal('.home-texts', { delay: 500 });
  // Removed initial reveal on '.menu-ul'
 sr.reveal('.home-social-link', { origin: 'right', interval: 100, delay: 200 });
  sr.reveal('.home-img', { origin: 'right' });
  sr.reveal('.skills-img', { origin: 'left' });
  sr.reveal('.skills-text', { origin: 'right' });
  sr.reveal('.about-text', { origin: 'right' });
  sr.reveal('.section-title', { origin: 'left', interval: 100 });

  sr.reveal('.portfolio-img', { origin: 'bottom' });
  sr.reveal('.education-item', { origin: 'left' });
  sr.reveal('.contact-item', { origin: 'left' });
  sr.reveal('.contact-form', { origin: 'right' });
  sr.reveal('.contact-text-div', { origin: 'left' });
  sr.reveal('.contact-img', { origin: 'right' });
  sr.reveal('.contact-infor', { origin: 'left' });
  sr.reveal('.ql-con', { origin: 'top' });
  sr.reveal('.contact-social', { origin: 'right' });
 
  sr.reveal('.about-img', { origin: 'left' });
  sr.reveal('.scroll-up', { origin: 'right', delay: 200 });

  // Typed text
  if (document.querySelector(".texts")) {
    new Typed(".texts", {
      strings: ["A Frontend Website Developer", "An Aspiring Game Developer", "A Tech Enthusiast..."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });
  }

  // Scroll to top on click
  const scrollUpBtn = document.querySelector(".scroll-up");
  if (scrollUpBtn) {
    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show/hide button on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollUpBtn.style.display = "block";
      } else {
        scrollUpBtn.style.display = "none";
      }
    });
  }

  // Intersection observer for nav link highlight
const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });



  const menubtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu-ul");
  const icon = document.querySelector(".menu-btn i");
if (menubtn && menu && icon) {
  menubtn.addEventListener("click", () => {
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
    menu.classList.toggle("active");
    menubtn.classList.toggle("active");
  });


  document.querySelectorAll(".menu-ul li a").forEach(item => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      icon.classList.add("bx-menu");
      icon.classList.remove("bx-x");

      // Clear styles immediately when menu closes by clicking a link
      document.querySelectorAll('.menu-ul li').forEach(item => {
        item.style.opacity = '';
        item.style.transform = '';
        item.style.transition = '';
      });
    });
  });
  }
});


  
