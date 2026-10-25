'use strict';
const rules = {
  name: [/^[A-Za-z]+$/, 'Name must contain alphabets only.'],
  email: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Enter a valid email address.'],
  phone: [/^\d{10}$/, 'Phone must contain exactly 10 digits.'],
  password: [/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, 'Password needs an uppercase letter, number, and special character.']
};
function validate(name) {
  const input = document.getElementById(name), error = document.getElementById(name + 'Error');
  const valid = rules[name][0].test(input.value.trim());
  input.classList.toggle('valid', valid); input.classList.toggle('invalid', !valid);
  error.textContent = valid ? '' : rules[name][1];
  return valid;
}
Object.keys(rules).forEach(name => document.getElementById(name).addEventListener('input', () => validate(name)));
document.getElementById('studentForm').addEventListener('submit', event => {
  event.preventDefault();
  const valid = Object.keys(rules).map(validate).every(Boolean);
  document.getElementById('result').textContent = valid ? 'Registration successful!' : 'Please correct the highlighted fields.';
});
