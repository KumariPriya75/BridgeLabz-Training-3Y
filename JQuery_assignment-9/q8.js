$(document).ready(function () {
    let number = 6;

    // append() places a new post at the end of the list.
    $("#add").click(function () {
        $("#posts").append('<article class="post"><h2>New Blog Post ' + number + '</h2><p>This is a newly added blog post.</p></article>');
        number++;
    });

    // prepend() inserts the featured post at the beginning.
    $("#featured").click(function () {
        $("#posts").prepend('<article class="post featured"><h2>Featured: Welcome to Our Blog</h2><p>Read our latest featured article.</p></article>');
    });

    $("#remove").click(function () {
        $("#posts .post").last().remove();
    });

    // before() and after() insert tags around the selected post.
    $("#tag").click(function () {
        $("#posts .post").first().before('<p class="tag">BLOG START</p>');
        $("#posts .post").first().after('<p class="tag">Popular Post</p>');
    });

    $("#highlight").click(function () {
        $("#posts .post").filter(function () {
            return $(this).text().toLowerCase().includes("javascript");
        }).css({ "background": "#d9f3df", "border": "2px solid green" });
    });
});