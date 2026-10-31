// Q2. Use a callback to perform operations on array elements.

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

const squaredNumbers = applyOperation(numbers, function (number) {
    return number * number;
});

console.log("Doubled:", doubledNumbers);
console.log("Squared:", squaredNumbers);
