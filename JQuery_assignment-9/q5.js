$(document).ready(function () {
    // A manager click highlights all direct reports in the same section.
    $(".manager").click(function () {
        $(this).next(".reports").children(".employee").toggleClass("highlight");
    });

    // .next() selects the contact information beside the hovered employee.
    $(".reports .employee").hover(
        function () { $(this).find(".contact").show(); },
        function () { $(this).find(".contact").hide(); }
    );

    // .children() selects all direct team members in the chosen department.
    $(".deptTitle").click(function () {
        $(this).parent().children(".reports").children(".employee").css("background", "#d8f0df");
    });

    $("#random").click(function () {
        let employees = $(".reports .employee");
        let chosen = Math.floor(Math.random() * employees.length);
        employees.removeClass("highlight");
        employees.eq(chosen).siblings().addClass("highlight");
    });

    // .parent() and .find() are used to collapse or expand the complete team.
    $("#collapse").click(function () {
        $(this).parent().find("#team").slideToggle();
    });
});