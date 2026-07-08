
// Portfolio V2 JavaScript

// Smooth scrolling for navigation links

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});



// Simple reveal animation on scroll

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});



// Initial section animation setup

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s ease";

});



// Current year update in footer

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if(footerText){

    footerText.innerHTML =
    `© ${year} Vinay Saini. All Rights Reserved.`;

}
