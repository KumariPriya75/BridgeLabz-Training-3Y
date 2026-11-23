const baseUrl = "http://localhost:3004";

// Fetch all three endpoints at the same time using Promise.all.
Promise.all([
    fetch(baseUrl + "/users"),
    fetch(baseUrl + "/orders"),
    fetch(baseUrl + "/products")
])
.then(function (responses) {
    // Treat any non-success HTTP response as an API failure.
    responses.forEach(function (response) {
        if (!response.ok) throw new Error("An API request failed");
    });
    return Promise.all(responses.map(function (response) {
        return response.json();
    }));
})
.then(function (data) {
    document.getElementById("users").className = "number";
    document.getElementById("orders").className = "number";
    document.getElementById("products").className = "number";

    document.getElementById("users").textContent = data[0].length;
    document.getElementById("orders").textContent = data[1].length;
    document.getElementById("products").textContent = data[2].length;
})
.catch(function () {
    // If any request fails, show the required warning and indicate unavailable counts.
    document.getElementById("warning").textContent = "Some data could not be loaded.";
    ["users", "orders", "products"].forEach(function (id) {
        document.getElementById(id).className = "number";
        document.getElementById(id).textContent = "—";
    });
});
