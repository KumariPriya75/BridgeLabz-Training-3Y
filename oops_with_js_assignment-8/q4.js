function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return this.name + " is doing regular " + this.department + " work.";
    }
}

class Manager extends Employee {
    work() {
        return this.name + " is managing the " + this.department + " team.";
    }
}

let employee = new Employee("Aman", "Sales");
let manager = new Manager("Riya", "IT");

let staff = [employee, manager];

staff.forEach(person => show(person.work()));
show("Runtime polymorphism: the same work() method gives different results for Employee and Manager objects.");
