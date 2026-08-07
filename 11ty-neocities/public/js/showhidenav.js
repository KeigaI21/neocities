const mediaQuery = window.matchMedia('(max-width: 600px)');
var expandingButtons = document.querySelectorAll('.expanding-button');
var navHamburger = document.querySelector('.nav-hamburger');
var navClose = document.querySelector('.nav-close');
var navPopup = document.querySelector('.nav-popup');
var nav = document.querySelector('.nav');

function handleScreenChange(e) {
    if (e.matches) {
        hideNav()

        navPopup.style.backgroundColor = "var(--primary-color)";
        navPopup.style.borderStyle = "solid";
        navPopup.style.borderColor = "var(--secondary-color)";
    } else {
        navPopup.style.display = "flex";
        navHamburger.style.display = "none";

        navClose.style.display = "none";
        navPopup.style.backgroundColor = "transparent";
        navPopup.style.borderStyle = "none";
    }
}
// Dynamically adjusts to narrow screens by showing hamburger menu
handleScreenChange(mediaQuery);
mediaQuery.addListener(handleScreenChange);
function showNav() {
    navPopup.style.display = "flex";
    navHamburger.style.display = "none";
    navClose.style.display = "flex";
}
function hideNav() {
    navPopup.style.display = "none";
    navHamburger.style.display = "flex";
    navClose.style.display = "none";
}