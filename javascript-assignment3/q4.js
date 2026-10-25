"use strict";

// Q4: Debugging Mystery — fixed version
function showMessage() {
    const greeting = "Welcome";
    console.log(greeting);
}
showMessage();

// Original code failed because `greeting` was assigned without declaration.
// In strict mode, JavaScript throws ReferenceError instead of creating an
// accidental global variable. The local const declaration fixes the problem.

// Debugging: place a breakpoint on the console.log line.
// Add `greeting` to Watch. The Call Stack should show showMessage, then the
// global/script frame. Step Over to execute the log statement.
