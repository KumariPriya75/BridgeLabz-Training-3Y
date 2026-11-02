const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownOptions.hidden = !dropdownOptions.hidden;
});

dropdownOptions.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;
    dropdownButton.textContent = event.target.textContent;
    dropdownOptions.hidden = true;
});

// Capturing phase: close the dropdown before events reach inner elements.
document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) dropdownOptions.hidden = true;
}, true);
