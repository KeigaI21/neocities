// Changes between light and dark mode when image is clicked
var lightFlower = document.getElementById("light-mode-flower");
var darkFlower = document.getElementById("dark-mode-flower");
var body = document.body;

function lightMode() {
    lightFlower.style.display = "inherit";
    darkFlower.style.display = "none";
    body.classList.toggle("dark-mode");
}
function darkMode() {
    lightFlower.style.display = "none";
    darkFlower.style.display = "inherit";
    body.classList.toggle("dark-mode");
}
