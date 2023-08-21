const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_items_entire");

// Hamburger js
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
window.addEventListener('scroll', () => {
    if (navMenu.classList.toggle("active") == true) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        // hamburger.classList.remove("active");
        // navMenu.classList.remove("active");
    }
})
// js to ensure menu closes when links close
document.querySelectorAll("#nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))