// Q5. Inheritance using Person and Student constructor functions.

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name: " + this.name);
};

function Student(name, branch) {
    Person.call(this, name); // Set the Person property for this Student.
    this.branch = branch;
}

// Link Student.prototype to Person.prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log("Branch: " + this.branch);
};

const student1 = new Student("Priya", "AI and Data Science");

student1.showName();
student1.showBranch();
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
