// ==========================
// Portfolio V2 JavaScript
// ==========================

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ==========================
// Typing Effect
// ==========================

const words = [
    "Future NDA Officer 🇮🇳",
    "Web Developer",
    "Science Student",
    "Yoga Gold Medalist"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".hero-left h2 span");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex--);

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


// ==========================
// Fade Animation
// ==========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// Scroll To Top Button
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ==========================
// Button Click Animation
// ==========================

document.querySelectorAll(".btn,.btn2").forEach(button => {

    button.addEventListener("click", function() {

        this.style.transform = "scale(.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});


// ==========================
// Welcome Message
// ==========================

window.onload = () => {

    console.log("Portfolio V2 Loaded Successfully!");

};
