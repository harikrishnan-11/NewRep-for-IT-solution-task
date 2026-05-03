document.addEventListener("DOMContentLoaded", () => {
const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");
const body = document.body;

// Open menu
if (menuOpenBtn) {
    menuOpenBtn.addEventListener("click", () => {
        body.classList.add("show-mobile-menu");
    });
}

// Close menu
if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", () => {
        body.classList.remove("show-mobile-menu");
    });
}

});
