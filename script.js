function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
// Add this to your existing JavaScript
const title = "Deepayan Sinha";
let titleIndex = 0;

function typeTitle() {
    const logoHeader = document.querySelector(".logo-header");
    if (titleIndex < title.length) {
        logoHeader.innerHTML += title.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 200);
    }
}

window.onload = function() {
    typeTitle();
};

/******************* */
