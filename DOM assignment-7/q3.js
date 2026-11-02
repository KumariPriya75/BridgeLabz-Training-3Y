const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const error = document.getElementById("error");
const summary = document.getElementById("summary");
let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => step.hidden = index !== currentStep);
    backButton.hidden = currentStep === 0;
    nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
    error.textContent = "";
}

function isValid(input) {
    if (input.type === "email") return input.checkValidity();
    if (input.type === "password") return input.value.length >= 6;
    return input.value.trim() !== "";
}

nextButton.addEventListener("click", function () {
    const currentInput = steps[currentStep].querySelector("input");
    if (!isValid(currentInput)) {
        error.textContent = currentInput.type === "password"
            ? "Password must contain at least 6 characters."
            : "Please enter a valid " + currentInput.type + ".";
        currentInput.focus();
        return;
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        summary.innerHTML = `<h3>Registration Summary</h3>
            <p>Name: ${escapeHTML(document.getElementById("name").value)}</p>
            <p>Email: ${escapeHTML(document.getElementById("email").value)}</p>
            <p>Password: Completed</p>`;
        document.getElementById("multiStepForm").hidden = true;
        summary.hidden = false;
    }
});

backButton.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[character]);
}

showStep();
