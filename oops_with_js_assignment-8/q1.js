function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        let average = total / this.marks.length;
        let grade;

        if (average >= 80) grade = "A";
        else if (average >= 60) grade = "B";
        else if (average >= 40) grade = "C";
        else grade = "F";

        return "Name: " + this.name + ", Average: " + average.toFixed(2) + ", Grade: " + grade;
    }
}

let students = [
    new Student("Aman", [85, 90, 80]),
    new Student("Riya", [65, 70, 60]),
    new Student("Karan", [30, 35, 40])
];

students.forEach(student => show(student.calculateAverage()));
