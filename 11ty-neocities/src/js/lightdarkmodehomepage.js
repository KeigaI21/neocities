// Changes between light and dark mode when image is clicked
var lightFlower = document.getElementById("light-mode-flower");
var darkFlower = document.getElementById("dark-mode-flower");
var root = document.querySelector(':root');
if(localStorage.getItem("lightdarkmode") == "light")
{
    lightMode();
}
if(localStorage.getItem("lightdarkmode") == "dark")
{
    darkMode();
}
function lightMode() {
    lightFlower.style.display = "inherit";
    darkFlower.style.display = "none";
    root.classList.remove("dark-mode");
    localStorage.setItem("lightdarkmode", "light")
}
function darkMode() {
    lightFlower.style.display = "none";
    darkFlower.style.display = "inherit";
    root.classList.add("dark-mode");
    localStorage.setItem("lightdarkmode", "dark")
}
