var expandingButtons = document.querySelectorAll('.expanding-button');
var showButton = document.querySelector('#show-button');
var hideButton = document.querySelector('#hide-button');
var nav = document.querySelector('.nav');
console.log(expandingButtons)
function showNav() {
    expandingButtons.forEach((element) => {
        element.classList.add("showing");
    });
    showButton.style.display = "none";
    hideButton.style.display = "flex";
    nav.style.backgroundColor = "var(--primary-color)";
    nav.style.borderStyle = "none solid solid none";
}
function hideNav() {
    expandingButtons.forEach((element) => {
        element.classList.remove("showing");
    });
    showButton.style.display = "flex";
    hideButton.style.display = "none";
    nav.style.backgroundColor = "var(--transparent)";
    nav.style.borderStyle = "none";
}