const usersUrl = "http://localhost:3006/users";
const registrationForm = document.getElementById("registration");
const registrationMessage = document.getElementById("message");

registrationForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (name === "" || password.length < 8) {
        registrationMessage.style.color = "red";
        registrationMessage.textContent = "Enter a name and a password of at least 8 characters.";
        return;
    }

    registrationMessage.style.color = "#245b9e";
    registrationMessage.textContent = "Checking email...";

    try {
        // First check whether the email already exists in this question's database.
        const checkResponse = await axios.get(usersUrl, {
            params: { email: email }
        });

        if (checkResponse.data.length > 0) {
            registrationMessage.style.color = "red";
            registrationMessage.textContent = "Email already registered.";
            return;
        }

        // Create the user only when the email is not already registered.
        await axios.post(usersUrl, {
            name: name,
            email: email,
            password: password
        });

        registrationMessage.style.color = "green";
        registrationMessage.textContent = "Registration successful!";
        registrationForm.reset();
    } catch (error) {
        registrationMessage.style.color = "red";
        registrationMessage.textContent = "Registration failed. Check JSON Server on port 3006.";
    }
});
