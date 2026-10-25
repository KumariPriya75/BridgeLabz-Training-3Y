'use strict';
class Product {
  constructor(id, name, price, category) { Object.assign(this, { id, name, price, category }); }
  applyDiscount(percent) { this.price -= this.price * percent / 100; }
  displayDetails() { return `ID: ${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`; }
}
const products = [
  new Product(1, 'Keyboard', 1500, 'Electronics'),
  new Product(2, 'Notebook', 120, 'Stationery'),
  new Product(3, 'Headphones', 2200, 'Electronics')
];
products[0].applyDiscount(10);
console.log('All products:');
products.forEach(product => console.log(product.displayDetails()));
console.log('Products priced above ₹1000:');
products.filter(product => product.price > 1000).forEach(product => console.log(product.displayDetails()));
