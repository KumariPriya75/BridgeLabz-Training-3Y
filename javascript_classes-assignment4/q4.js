'use strict';
class FormBuilder {
  constructor(fields, containerId) { this.fields = fields; this.container = document.getElementById(containerId); }
  buildForm() {
    const fieldsHTML = this.fields.map(field => {
      if (field.type === 'select') return `<label>${field.label}<select name="${field.name}">${field.options.map(option => `<option value="${option}">${option}</option>`).join('')}</select></label>`;
      return `<label>${field.label}<input type="${field.type}" name="${field.name}" required></label>`;
    }).join('');
    this.container.innerHTML = `<form id="customForm">${fieldsHTML}<button type="submit">Submit</button></form>`;
    document.getElementById('customForm').addEventListener('submit', event => {
      event.preventDefault(); document.getElementById('output').textContent = JSON.stringify(this.getFormData(), null, 2);
    });
  }
  getFormData() {
    const data = {};
    this.fields.forEach(field => data[field.name] = this.container.querySelector(`[name="${field.name}"]`).value);
    return data;
  }
}
const fields = [
  { type: 'text', label: 'Username', name: 'username' },
  { type: 'email', label: 'Email', name: 'email' },
  { type: 'select', label: 'Course', name: 'course', options: ['JavaScript', 'Java', 'Python'] }
];
new FormBuilder(fields, 'formContainer').buildForm();
