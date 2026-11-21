function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 4 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000, stock: 15 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 800, stock: 3 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 10 },
    { id: 5, name: "Book", category: "Stationery", price: 300, stock: 2 }
];

function getLowStockProducts() {
    return products.filter(product => product.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }
        groups[product.category].push(product.name);
        return groups;
    }, {});
}

show("Low stock products: " + JSON.stringify(getLowStockProducts(), null, 2));
show("Products sorted by price: " + JSON.stringify(sortProductsByPrice(), null, 2));
show("Total inventory value: Rs. " + calculateTotalInventoryValue());
show("Products grouped by category: " + JSON.stringify(groupByCategory(), null, 2));
