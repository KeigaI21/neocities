/* Light/dark mode */
if (localStorage.getItem("lightdarkmode") == null)
{
    localStorage.setItem("lightdarkmode", "light")
}
function getLightDarkMode() {
    return localStorage.getItem("lightdarkmode");
}