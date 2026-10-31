// Q7. Return a function that remembers the multiplier.

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

const double = makeMultiplier(2);
console.log(double(5)); // 10

// Closure: the returned function remembers the multiplier variable
// from the outer makeMultiplier function, even after it has finished.
