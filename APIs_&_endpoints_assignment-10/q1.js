$(document).ready(function () {
    let timer;

    function loadProducts(value) {
        // Show the loading indicator while the AJAX request is in progress.
        $("#loading").show();
        $("#results").empty();

        $.ajax({
            url: "http://localhost:3001/products",
            method: "GET",
            data: { q: value },
            success: function (products) {
                $("#loading").hide();

                if (products.length === 0) {
                    $("#results").html("<p>No products found</p>");
                    return;
                }

                // Build product cards from the JSON Server response.
                products.forEach(function (product) {
                    let card = $("<article>").addClass("product");
                    $("<img>").attr("src", product.image).attr("alt", product.name).appendTo(card);
                    $("<h3>").text(product.name).appendTo(card);
                    $("<p>").addClass("price").text("₹" + product.price).appendTo(card);
                    $("#results").append(card);
                });
            },
            error: function () {
                $("#loading").hide();
                $("#results").html("<p>Could not load products. Check that JSON Server is running on port 3001.</p>");
            }
        });
    }

    // Delay requests slightly so a request is not sent for every fast keystroke.
    $("#search").on("keyup", function () {
        clearTimeout(timer);
        let value = $(this).val().trim();
        timer = setTimeout(function () {
            loadProducts(value);
        }, 250);
    });

    loadProducts("");
});
