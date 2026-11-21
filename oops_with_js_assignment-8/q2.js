function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

let menu = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 }
];

function calculateBill(orderItems) {
    let prices = orderItems.map(item => {
        let food = menu.find(menuItem => menuItem.name === item);
        if (!food) {
            throw new Error(item + " is not available on the menu.");
        }
        return food.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    let total = calculateBill(["Pizza", "Burger"]);
    show("Your total bill is Rs. " + total);
} catch (error) {
    show("Order failed: " + error.message);
}

try {
    let total = calculateBill(["Pizza", "Sushi"]);
    show("Your total bill is Rs. " + total);
} catch (error) {
    show("Order failed: " + error.message);
}
