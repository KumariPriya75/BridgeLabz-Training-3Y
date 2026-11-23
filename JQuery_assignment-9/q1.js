$(document).ready(function () {
    // Display a greeting according to the visitor's local time.
    let hour = new Date().getHours();
    let message = "Good Evening";
    if (hour < 12) message = "Good Morning";
    else if (hour < 17) message = "Good Afternoon";

    $("#greeting").text(message + ", Welcome to Our Website!");

    $("#change").click(function () {
        $("#greeting").text("Believe in yourself. Every day is a new opportunity!");
    });

    $("#toggle").click(function () {
        $("#welcome").toggle();
    });

    $("#greeting").click(function () {
        alert("Thank you for visiting our website!");
    });
});