// Q9. Person -> Student inheritance using ES6 classes.

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls the Person constructor.
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

const student1 = new Student("Priya", "AI and Data Science");

student1.showName();
student1.showBranch();

// The same inheritance using constructor functions is shown in q5.js.
