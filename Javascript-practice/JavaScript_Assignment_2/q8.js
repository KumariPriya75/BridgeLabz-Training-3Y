// Q8: Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let subtotal = 0;
let discountedTotal = 0;
const itemLines = [];

// Apply category discounts to each item
for (const product of cart) {
    subtotal += product.price;
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalPrice = product.price - discount;
    discountedTotal += finalPrice;
    itemLines.push(`${product.item}: ₹${product.price} - ₹${discount.toFixed(2)} discount = ₹${finalPrice.toFixed(2)}`);
}

// Apply an extra 5% discount if the original cart value is above ₹50,000
const extraDiscount = subtotal > 50000 ? discountedTotal * 0.05 : 0;
const finalTotal = discountedTotal - extraDiscount;

// Use reduce() to calculate the original cart value
const reduceSubtotal = cart.reduce((total, product) => total + product.price, 0);

const summary = `Items:
${itemLines.join("\\n")}

Cart subtotal: ₹${reduceSubtotal.toFixed(2)}
Extra overall discount: ₹${extraDiscount.toFixed(2)}
Final total: ₹${finalTotal.toFixed(2)}`;

console.log(summary);
showOutput(summary);
