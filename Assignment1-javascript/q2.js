let userName = "Priya";
let age = 20;
let isStudent = true;
let subjects = ["HTML", "CSS", "JavaScript"];
let user = { name: "Priya", city: "Mathura" };
let address = null;
let phone;

console.table([
    { label: "User Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "User", value: JSON.stringify(user), type: typeof user },
    { label: "Address", value: address, type: typeof address },
    { label: "Phone", value: phone, type: typeof phone }
]);