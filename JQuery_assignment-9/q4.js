$(document).ready(function () {
    let current = 0;
    let banners = $(".banner");

    $("#hide").click(function () { banners.first().hide(); });
    $("#show").click(function () { banners.show(); });
    $("#up").click(function () { banners.slideUp(); });
    $("#down").click(function () { banners.slideDown(); });
    $("#fadeOut").click(function () { banners.fadeOut(700); });
    $("#fadeIn").click(function () { banners.fadeIn(700); });

    // Rotate the visible offer every five seconds with fade effects.
    banners.hide().eq(0).show();
    setInterval(function () {
        banners.eq(current).fadeOut(500, function () {
            current = (current + 1) % banners.length;
            banners.eq(current).fadeIn(500);
        });
    }, 5000);
});