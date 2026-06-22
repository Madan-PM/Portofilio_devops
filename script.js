/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuBtn.innerHTML = "✕";

        } else {

            menuBtn.innerHTML = "☰";

        }

    });

}

/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        if(menuBtn){

            menuBtn.innerHTML = "☰";

        }

    });

});

/* ==========================================
   TERMINAL TYPING EFFECT
========================================== */

const terminalText =
document.querySelector(".terminal-text");

const typingText =
"Cloud • Linux • AWS • Python • DevOps";

let typingIndex = 0;

function typeEffect() {

    if (!terminalText) return;

    if (typingIndex < typingText.length) {

        terminalText.innerHTML +=
        typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeEffect, 70);

    }

}

window.addEventListener("load", () => {

    if (terminalText) {

        terminalText.innerHTML = "$ ";

        typeEffect();

    }

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealCards =
document.querySelectorAll(
".card, .experience-card, .timeline-item, .stat-card"
);

const revealObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

revealCards.forEach(card => {

    revealObserver.observe(card);

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

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

            window.pageYOffset >=
            sectionTop - 200

        ) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
        "active-link"
        );

        if (

            link
            .getAttribute("href")
            .includes(current)

        ) {

            link.classList.add(
            "active-link"
            );

        }

    });

});

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
        "rgba(13,17,23,.95)";

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.background =
        "rgba(13,17,23,.85)";

        navbar.style.boxShadow =
        "none";

    }

});

/* ==========================================
   PROJECT CARD GLOW
========================================== */

document
.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener(
    "mousemove",
    (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(34,197,94,.12),
            rgba(22,27,34,.9)
        )`;

    });

    card.addEventListener(
    "mouseleave",
    () => {

        card.style.background =
        "rgba(22,27,34,.8)";

    });

});

/* ==========================================
   STATS COUNTER ANIMATION
========================================== */

const statNumbers =
document.querySelectorAll(".stat-card h3");

const statsObserver =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

const stat =
entry.target;

const value =
stat.innerText;

if(value === "5+"){

animateCounter(stat, 5);

}

if(value === "3+"){

animateCounter(stat, 3);

}

}

});

},
{
threshold:0.6
}

);

statNumbers.forEach(stat => {

statsObserver.observe(stat);

});

function animateCounter(
element,
target
){

let count = 0;

const interval =
setInterval(() => {

count++;

element.innerText =
count + "+";

if(count >= target){

clearInterval(interval);

}

},150);

}

/* ==========================================
   SMOOTH LOGO SCROLL
========================================== */

const logo =
document.querySelector(".logo");

if(logo){

logo.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================================
   FOOTER YEAR
========================================== */

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =

`© ${new Date().getFullYear()}
Madan P M | Cloud & DevOps Engineer`;

}

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar =
document.createElement("div");

progressBar.id =
"scroll-progress";

document.body.appendChild(
progressBar
);

window.addEventListener(
"scroll",
() => {

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrollPercent =
(scrollTop / scrollHeight) * 100;

progressBar.style.width =
scrollPercent + "%";

}
);

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if(window.scrollY > 500){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});
