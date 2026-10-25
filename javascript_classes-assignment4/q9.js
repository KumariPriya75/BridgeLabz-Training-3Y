'use strict';
class Cart {
  constructor() { this.items = []; }
  addItem(name, price, quantity) { this.items.push({ name, price, quantity }); }
  getTotal() { return this.items.reduce((total, item) => total + item.price * item.quantity, 0); }
}
document.getElementById('cartForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('itemName').value.trim();
  const price = Number(document.getElementById('price').value);
  const quantity = Number(document.getElementById('quantity').value);
  const coupon = document.getElementById('coupon').value.trim().toUpperCase();
  const message = document.getElementById('message'), details = document.getElementById('cartDetails');
  if (!name || !Number.isFinite(price) || price <= 0 || !Number.isInteger(quantity) || quantity < 1) {
    message.textContent = 'Enter a valid name, positive price, and quantity of at least 1.'; details.textContent = ''; return;
  }
  const cart = new Cart(); cart.addItem(name, price, quantity);
  const total = cart.getTotal(); let percent = 0;
  if (coupon) {
    const match = /^(SAVE|DISC)(\d{1,2})$/.exec(coupon);
    if (!match || Number(match[2]) < 1 || Number(match[2]) > 99) {
      message.textContent = 'Invalid coupon. Use SAVE20 or DISC10 (1-99%).'; details.textContent = ''; return;
    }
    percent = Number(match[2]);
  }
  const discount = total * percent / 100, finalTotal = total - discount;
  message.textContent = percent ? `Coupon applied: ${percent}% off.` : 'No coupon applied.';
  details.textContent = `Item: ${name}\nPrice: ₹${price.toFixed(2)}\nQuantity: ${quantity}\nSubtotal: ₹${total.toFixed(2)}\nDiscount: ₹${discount.toFixed(2)}\nFinal Total: ₹${finalTotal.toFixed(2)}`;
});
