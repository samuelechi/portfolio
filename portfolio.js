document.addEventListener("DOMContentLoaded", () => {
    // ScrollReveal animations
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      reset: true
    });
  
    sr.reveal('.home-content', { origin: 'top' });
    sr.reveal('.about-content', { origin: 'top' });
    sr.reveal('.skills-content', { origin: 'top' });
    sr.reveal('.home-texts', { delay: 500 });
    sr.reveal('.nav-link', {orrigin: 'right', delay: 200, interval: 200});
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
    const navLinks2 = document.querySelectorAll(".nav-link");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
  
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks2.forEach(link => {
            link.classList.remove("active");
            if (link.href.includes(`${id}`)) {
              link.classList.add("active");
            }
          });
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
  
    // Menu toggle
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
        });
      });
    }
  });
  
