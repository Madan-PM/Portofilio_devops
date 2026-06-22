// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = "✕";

    } else {

        menuBtn.innerHTML = "☰";
    }

});

// =========================================
// CLOSE MOBILE MENU AFTER CLICK
// =========================================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});

// =========================================
// TYPING EFFECT
// =========================================

const terminalText =
document.querySelector(".terminal-text");

const text =
"$ Cloud • Linux • AWS • Python • DevOps";

let index = 0;

function typeText() {

    if (!terminalText) return;

    if (index < text.length) {

        terminalText.innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typeText, 70);

    }

}

window.addEventListener("load", () => {

    terminalText.innerHTML = "";

    typeText();

});

// =========================================
// CARD REVEAL ANIMATION
// =========================================

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

cards.forEach(card => {

    observer.observe(card);

});

// =========================================
// ACTIVE NAV LINK
// =========================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        const sectionHeight =
        section.clientHeight;

        if (

            pageYOffset >=
            sectionTop - 200

        ) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (

            link
            .getAttribute("href")
            .includes(current)

        ) {

            link.classList.add("active-link");

        }

    });

});

// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
        "rgba(13,17,23,.95)";

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,.2)";

    }

    else {

        navbar.style.background =
        "rgba(13,17,23,.85)";

        navbar.style.boxShadow =
        "none";

    }

});

// =========================================
// FOOTER YEAR AUTO UPDATE
// =========================================

const footer =
document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
    `© ${new Date().getFullYear()} Madan P M | Cloud & DevOps Engineer`;

}

// =========================================
// SMOOTH PROJECT HOVER GLOW
// =========================================

document
.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(34,197,94,.15),
            rgba(22,27,34,.9)
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(22,27,34,.75)";

    });

});

// =========================================
// SCROLL TO TOP ON LOGO CLICK
// =========================================

const logo =
document.querySelector(".logo");

logo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
