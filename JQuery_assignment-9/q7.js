$(document).ready(function () {
    // keyup filters the course list as the user types.
    $("#search").keyup(function () {
        let searchText = $(this).val().toLowerCase();
        let count = 0;

        $(".course").each(function () {
            let original = $(this).text();
            let courseName = original.toLowerCase();

            if (courseName.includes(searchText)) {
                $(this).show();
                count++;

                // Highlight the matched text using CSS.
                if (searchText !== "") {
                    let start = courseName.indexOf(searchText);
                    let end = start + searchText.length;
                    $(this).html(
                        $("<span>").text(original.substring(0, start)).prop("outerHTML") +
                        '<span class="match">' + $("<span>").text(original.substring(start, end)).html() + '</span>' +
                        $("<span>").text(original.substring(end)).prop("outerHTML")
                    );
                } else {
                    $(this).text(original);
                }
            } else {
                $(this).hide();
                $(this).text(original);
            }
        });

        $("#count").text("Matched courses: " + count);
    });

    $("#clear").click(function () {
        $("#search").val("");
        $(".course").show().removeClass("match");
        $(".course").each(function () { $(this).text($(this).text()); });
        $("#count").text("Showing 5 courses");
    });
});