// This file uses jQuery version 2's $ alias (version 3.7.1).
$(document).ready(function () {
    // Version 2 handles notification modal events.
    $("#notify").click(function () { $("#modal").fadeIn(); });
    $("#close").click(function () { $("#modal").fadeOut(); });

    // Version 2 adds simple tooltips when the pointer enters a widget.
    $(".widget").hover(
        function () { $(this).attr("title", "You are viewing: " + $(this).text()); },
        function () { $(this).attr("title", "Dashboard widget"); }
    );
});