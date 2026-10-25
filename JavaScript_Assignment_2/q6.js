// Q6: Event-Based Counter Simulation

let count = 0;

// Increase the counter
function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
    showOutput(`Count after increment: ${count}`);
}

// Decrease the counter
function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
    showOutput(`Count after decrement: ${count}`);
}

// Nested function demonstrates access to the outer function's count
function nestedCounterDemo() {
    let nestedCount = count;

    function updateNestedCount() {
        nestedCount++;
        console.log(`Nested function count: ${nestedCount}`);
        showOutput(`Nested function count: ${nestedCount}`);
    }

    updateNestedCount();
}

// Simulate click events by calling the functions
increment();
increment();
decrement();
nestedCounterDemo();

console.log(`Final main count: ${count}`);
showOutput(`Final main count: ${count}`);
