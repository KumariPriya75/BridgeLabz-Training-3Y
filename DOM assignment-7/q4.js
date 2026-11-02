const themeButtons = document.querySelectorAll("[data-theme-choice]");
const savedTheme = document.body.getAttribute("data-theme");

function applyTheme(theme) {
    document.body.setAttribute("class", theme + "-theme");
    document.body.setAttribute("data-theme", theme);
}

themeButtons.forEach(button => {
    button.addEventListener("click", function () {
        applyTheme(button.getAttribute("data-theme-choice"));
    });
});

applyTheme(savedTheme || "light");
