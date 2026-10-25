let marks = [85, 90, 78, 88, 92];

let total = 0;
let isFailed = false;

for (let mark of marks) {
    total += mark;

    if (mark < 35) {
        isFailed = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);

if (isFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}