
/* =====================================
   NEXORA - INTERACTIVE FUNCTIONALITY
===================================== */


/* 1. MOBILE NAVIGATION */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Change menu icon

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";

        menuBtn.setAttribute("aria-label", "Close navigation");

    } else {

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-label", "Open navigation");

    }

});


/* 2. CLOSE MENU AFTER CLICKING A LINK */

const navigationLinks = document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-label", "Open navigation");

    });

});


/* 3. SCROLL REVEAL ANIMATIONS */

// Select sections and cards

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .service-card, .project-card, .contact-box"
);


// Create observer

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});


// Observe each element

revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});


/* 4. CONTACT FORM */

const contactForm = document.getElementById("contactForm");

const formResponse = document.getElementById("formResponse");


contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing

    event.preventDefault();


    // Get user input

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check for empty fields

    if (!name || !email || !message) {

        formResponse.textContent =
            "ERROR: Please complete all fields.";

        return;

    }


    // Basic email validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formResponse.textContent =
            "ERROR: Please enter a valid email address.";

        return;

    }


    // Display successful demo response

    formResponse.textContent =
        "TRANSMISSION SIMULATED. Thank you, " + name + "!";


    // Reset the form

    contactForm.reset();

});


/* 5. CURRENT YEAR IN FOOTER */

const footerText = document.querySelector(".footer > span");

if (footerText) {

    footerText.textContent =
        "© " + new Date().getFullYear() +
        " NEXORA. ALL RIGHTS RESERVED.";

}
