'use strict';
document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const seats = Number(document.getElementById('seats').value);
  const errors = [];
  if (!/^[A-Za-z ]+$/.test(name)) errors.push('Name must contain alphabets only.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email address.');
  if (!Number.isInteger(seats) || seats < 1 || seats > 10) errors.push('Seats must be a number from 1 to 10.');
  document.getElementById('message').textContent = errors.join(' ');
  const ticket = document.getElementById('ticket');
  if (errors.length) { ticket.textContent = ''; return; }
  const booking = { name, email, seats };
  document.getElementById('message').textContent = 'Booking successful!';
  ticket.textContent = `Name: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
  console.log(booking);
});
