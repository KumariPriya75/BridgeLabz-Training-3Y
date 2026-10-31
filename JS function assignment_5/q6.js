// Q6. Prototype chain: Person -> Faculty -> Professor.

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log("Person: " + this.name);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.teach = function () {
    console.log("Subject: " + this.subject);
};

function Professor(name, subject, designation) {
    Faculty.call(this, name, subject);
    this.designation = designation;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showDesignation = function () {
    console.log("Designation: " + this.designation);
};

const professor1 = new Professor("Amit", "JavaScript", "Professor");

professor1.introduce();       // Person method
professor1.teach();           // Faculty method
professor1.showDesignation(); // Professor method
