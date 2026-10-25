'use strict';
const user = { name: 'John', email: 'john@mail.com', age: 21 };
const form = document.getElementById('userForm');
const nameInput = document.getElementById('name'), emailInput = document.getElementById('email'), ageInput = document.getElementById('age');
const details = document.getElementById('userDetails');
nameInput.value = user.name; emailInput.value = user.email; ageInput.value = user.age;
function displayUser() { details.textContent = JSON.stringify(user, null, 2); }
form.addEventListener('submit', event => {
  event.preventDefault();
  user.name = nameInput.value.trim(); user.email = emailInput.value.trim(); user.age = Number(ageInput.value);
  displayUser();
});
displayUser();
