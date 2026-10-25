'use strict';
class Employee {
  constructor(id, name, department, salary) { Object.assign(this, { id, name, department, salary }); }
  getAnnualSalary() { return this.salary * 12; }
  applyBonus(percent) { this.salary += this.salary * percent / 100; }
}
const employees = [
  new Employee(1, 'Aarav', 'IT', 45000), new Employee(2, 'Meera', 'HR', 38000),
  new Employee(3, 'Kabir', 'Finance', 52000), new Employee(4, 'Anaya', 'Sales', 41000),
  new Employee(5, 'Rohan', 'IT', 48000)
];
employees[0].applyBonus(10);
employees.forEach(employee => console.log(`${employee.name} (${employee.department}) - Annual Salary: ₹${employee.getAnnualSalary()}`));
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Total annual payout: ₹${totalAnnualPayout}`);
