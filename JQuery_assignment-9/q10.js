$(document).ready(function () {
    // Demo list of already registered email addresses.
    let existingEmails = ["user@example.com", "student@gmail.com"];

    $("#register").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;

        // Reset old borders before checking the fields again.
        $("input").css("border", "1px solid #aaa");

        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        if (!emailPattern.test(email) || existingEmails.includes(email.toLowerCase())) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        if (valid) {
            $("#message").css("color", "green").text("Registration successful!");
            existingEmails.push(email.toLowerCase());
            $("#register")[0].reset();
        } else {
            $("#message").css("color", "red").text("Please correct the highlighted fields.");
        }
    });
});