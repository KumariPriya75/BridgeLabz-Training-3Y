"use strict";

// Q5: Hoisting Lab — demonstrate the original sequence safely.
console.log("Original sequence: var is hoisted as undefined.");
var originalScore;
console.log(originalScore);
announceOriginal();
function announceOriginal() {
    console.log("Game started");
}

// `let status` exists in a temporal dead zone until its declaration runs.
// Calling startGame before `status` is initialized would throw ReferenceError.
// So the corrected version declares values before calling functions.
const score = 50;
const gameStatus = "ready";

function announce() {
    console.log("Game started");
}
function startGame() {
    console.log(gameStatus);
}

console.log("\nCorrected sequence:");
console.log(score);
announce();
startGame();

// Arrow functions are expressions assigned to variables; they are not
// available before their assignment the way a function declaration is.
const announceArrow = () => console.log("Game started (arrow function)");
const startGameArrow = () => console.log(gameStatus);
console.log("\nArrow-function version:");
announceArrow();
startGameArrow();

// Hoisting notes:
// - `var` declarations are hoisted and initialized to undefined.
// - Function declarations are hoisted with their function body.
// - `let`/`const` are hoisted but cannot be accessed before initialization.
