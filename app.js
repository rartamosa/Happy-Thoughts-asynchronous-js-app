// Buttons
const themeButton = document.querySelector(".theme_switch");

// Containers
const body = document.querySelector("body");
// Theme switch
themeButton.addEventListener("click", () => body.classList.toggle("darktheme"));
