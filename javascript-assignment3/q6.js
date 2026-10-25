"use strict";

// Q6: Pyramid Pattern Generator
const enteredLimit = prompt("Enter pyramid height (default is 5):");
let limit = enteredLimit === null || enteredLimit.trim() === ""
    ? 5
    : Number(enteredLimit);

if (!Number.isInteger(limit) || limit < 1) {
    console.log("Invalid height. Using default height 5.");
    limit = 5;
}
if (limit > 50) {
    console.log("Height is limited to 50 rows.");
    limit = 50;
}

console.log("Pyramid using let:");
for (let row = 1; row <= limit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line.trimEnd());
}

// With `var`, row and column are function-scoped rather than block-scoped.
// This pattern still prints the same rows, but the loop variables remain
// accessible after the loop and are reused. In strict mode, assigning to an
// undeclared variable (for example, `lineText = ""`) would throw ReferenceError.
console.log("\nPyramid using var:");
for (var oldRow = 1; oldRow <= limit; oldRow++) {
    var oldLine = "";
    for (var oldColumn = 1; oldColumn <= oldRow; oldColumn++) {
        oldLine += "* ";
    }
    console.log(oldLine.trimEnd());
}
console.log("After loops, var oldRow =", oldRow, "and var oldColumn =", oldColumn);

// Debugging: place a breakpoint inside the inner loop and watch row/column
// (or oldRow/oldColumn). Step Over to see the counter increase.
