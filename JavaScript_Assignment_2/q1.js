// Q1: Scope Conflict Resolver

// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable inside the function
    let salary = 40000;

    // Add the global bonus only for permanent employees
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ${salary}`);
    console.log(`Global bonus remains: ${bonus}`);
    showOutput(`Permanent employee: ${isPermanent}\nTotal salary: ${salary}\nGlobal bonus remains: ${bonus}`);
}

// Test both outcomes
calculateSalary(true);
calculateSalary(false);
