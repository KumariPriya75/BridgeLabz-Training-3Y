$(document).ready(function () {
    // Click a question to show or hide only its answer.
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    $(".question").hover(
        function () { $(this).css("color", "red"); },
        function () { $(this).css("color", "#174a8b"); }
    );

    // Double-click any question to close all answers.
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // Highlight the question while an answer input is focused.
    $(".answer input").focus(function () {
        $(this).closest(".faq").find(".question").css("background", "#fff0b3");
    });

    $(".answer input").blur(function () {
        $(this).closest(".faq").find(".question").css("background", "white");
    });
});