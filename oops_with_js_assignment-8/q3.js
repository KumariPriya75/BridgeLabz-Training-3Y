function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    return this.price - (this.price * percent / 100);
};

let products = [
    new Product("Laptop", 50000),
    new Product("Phone", 20000),
    new Product("Headphones", 3000)
];

let discounts = [10, 15, 20];

products.forEach((product, index) => {
    let newPrice = product.applyDiscount(discounts[index]);
    show(product.name + ": Original price Rs. " + product.price +
        ", Discount " + discounts[index] + "%, New price Rs. " + newPrice);
});

show("Abstraction: applyDiscount() hides the discount calculation. We only call the method with a percentage.");
