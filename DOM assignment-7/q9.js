const registrationForm = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const emailAddress = document.getElementById("emailAddress");
const userPassword = document.getElementById("userPassword");
const successMessage = document.getElementById("successMessage");

const fields = [
    { input: fullName, error: document.getElementById("nameError"), validate: value => value.trim() !== "", message: "Name is required." },
    { input: emailAddress, error: document.getElementById("emailError"), validate: value => value.includes("@"), message: "Email must contain @." },
    { input: userPassword, error: document.getElementById("passwordError"), validate: value => value.length >= 6, message: "Password must be at least 6 characters." }
];

function validateField(field) {
    const valid = field.validate(field.input.value);
    field.error.textContent = valid ? "" : field.message;
    return valid;
}

fields.forEach(field => {
    field.input.addEventListener("input", function () {
        validateField(field);
        successMessage.textContent = "";
    });
});

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) {
        successMessage.textContent = "";
        return;
    }

    successMessage.textContent = "Form Submitted Successfully";
    registrationForm.reset();
    fields.forEach(field => field.error.textContent = "");
});
