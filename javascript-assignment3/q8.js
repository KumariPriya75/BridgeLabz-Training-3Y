"use strict";

// Q8: Strict Mode Showdown
// The original function has duplicate parameter names and an undeclared
// assignment. In strict mode, duplicate parameters are a SyntaxError, so the
// function cannot run at all. `delete total` is also illegal for an identifier
// in strict mode.

// Correct ES6 version:
function demo(first, second) {
    const total = 10;
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Total:", total);
    // Do not use `delete total`; local variables are not properties to delete.
}
demo(5, 10);

console.log("\nExpected comparison:");
console.log("Non-strict classic script: duplicate parameters may be allowed; assigning");
console.log("to undeclared total may create a global. Deleting an identifier is not a");
console.log("valid way to remove a variable and may still be rejected by modern parsers.");
console.log("Strict mode: duplicate parameters and assignment to an undeclared name");
console.log("are errors; deleting an unqualified identifier is explicitly forbidden.");
