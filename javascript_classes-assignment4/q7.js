'use strict';
document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errors = [];
  if (!/^.{5,}$/.test(username)) errors.push('Username must be at least 5 characters long.');
  if (password.length < 8) errors.push('Password must be at least 8 characters long.');
  if (!/[0-9]/.test(password)) errors.push('Password must include a number.');
  if (!/[A-Z]/.test(password)) errors.push('Password must include an uppercase letter.');
  if (!/[a-z]/.test(password)) errors.push('Password must include a lowercase letter.');
  if (!/[^A-Za-z0-9]/.test(password)) errors.push('Password must include a special character.');
  const message = document.getElementById('message');
  message.textContent = errors.length ? errors.join(' ') : 'Login validation successful!';
  message.style.color = errors.length ? 'red' : 'green';
});
