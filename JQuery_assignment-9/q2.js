$(document).ready(function () {
    // Clicking a product highlights it and checks its stock status.
    $(".product").click(function (event) {
        if ($(event.target).hasClass("favorite")) return;
        $(this).toggleClass("selected");
        if ($(this).attr("data-stock") === "no") {
            alert("Sorry, this product is out of stock.");
        }
    });

    // Show extra details while the pointer is over a product.
    $(".product").hover(
        function () { $(this).find(".details").show(); },
        function () { $(this).find(".details").hide(); }
    );

    $(".favorite").click(function () {
        $(this).toggleClass("selected");
        $(this).text($(this).hasClass("selected") ? "♥" : "♡");
    });
});