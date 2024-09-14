console.log("burger.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById("burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    burgerMenu.addEventListener("click", function() {
        mobileMenu.classList.toggle("open");
        console.log("burger clicked");
    });
});