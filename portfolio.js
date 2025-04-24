const sections = document.querySelectorAll("section"); // Select all sections
const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 50) { // Check if the section is in view
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove 'active' class from all links
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active"); // Add 'active' class to the current section's link
        }
    });
});

var typed = new Typed("typing-text",{
    Strings: ["Frontend Website Developer", "Aspiring Game Developer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true

});

const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-ul");
const icon = document.querySelector("i");

menubtn.addEventListener("click", () => {
    
    if(icon.classList.contains("bx-menu")) {
        icon.classList.replace("bx-menu", "bx-x");
    } 
    else {
        icon.classList.replace("bx-x", "bx-menu");
    }
    menu.classList.toggle("active");
    menubtn.classList.toggle("active");

});
document.querySelectorAll(".menu-ul li a").forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        icon.classList.replace("bx-x", "bx-menu");
    });
}
);
