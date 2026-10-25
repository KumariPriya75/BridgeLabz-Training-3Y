// Q9: Odd–Even Number Analyzer

const numbers = [];
const results = [];

// Store numbers from 1 to 30 using a loop
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number
for (const number of numbers) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push(`${number}: ${classification}`);
}

const summary = results.join("\\n");
console.log(summary);
showOutput(summary);
