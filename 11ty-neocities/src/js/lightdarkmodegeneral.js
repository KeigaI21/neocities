// Sets light dark mode based on user settings
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
    root.classList.remove("dark-mode");
    localStorage.setItem("lightdarkmode", "light")
}
function darkMode() {
    root.classList.add("dark-mode");
    localStorage.setItem("lightdarkmode", "dark")
}
