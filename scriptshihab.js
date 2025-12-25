// -----------------Dark Mode Toggle------------------
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}

//this is event driven once you click
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("darkMode", "enabled");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("darkMode", "disabled");
    }
});


// Burger menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Skills animation
const progressBars = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (rect < screenHeight) {
            bar.style.width = bar.dataset.width;
        }
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true
});