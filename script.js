// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Vinay Saini's Portfolio!");
});

// Highlight navigation while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "white";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#38bdf8";
        }
    });
});