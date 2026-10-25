"use strict";

// Q10: Nested Hoisting and Closures
function outer() {
    console.log("outer count before assignment:", count);
    var count = 5;

    function inner() {
        console.log("inner count before assignment:", count);
        var count = 10;
        console.log("inner count after assignment:", count);
    }

    inner();
    console.log("outer count after inner():", count);
}
outer();

// Output:
// outer count before assignment: undefined
// inner count before assignment: undefined
// inner count after assignment: 10
// outer count after inner(): 5
//
// Each function call has its own local execution context. `inner` declares
// its own `var count`, so it shadows the outer count; its hoisted variable is
// undefined until assigned. The arrow function below does not create its own
// `this`, `arguments`, or super binding, but its `var` declarations still
// belong to the surrounding function scope.

function outerWithArrow() {
    console.log("arrow example outer count before assignment:", count);
    var count = 5;

    const innerArrow = () => {
        console.log("arrow reads outer count:", count);
        // No inner `var count` here, so lexical lookup finds outer's count.
    };

    innerArrow();
}
outerWithArrow();

// Debugging: set breakpoints at both `console.log` lines inside outer and
// innerArrow. The Call Stack shows outer → inner (or outerWithArrow →
// innerArrow) while execution is paused. Step Into enters a function; Step Out
// returns to its caller.
