"use strict";

// Q2: Employee Bonus Calculator
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (const employee of employees) {
        if (!employee || employee.name === undefined ||
            employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee data is missing a required property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error(`Invalid salary or years for ${employee.name}.`);
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const total = salary + bonus;

        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Years of service: ${years}`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log(`Total with bonus: ₹${total.toFixed(2)}\n`);
    }
} catch (error) {
    console.log("Employee calculation error:", error.message);
}

// Strict mode prevents accidental implicit globals. Declare variables with
// const, let, or var instead of assigning to an undeclared name.
