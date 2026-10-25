// Q3: Math Utility Dashboard

const x = 16.75;

// Calculate the required math values
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display the summary using a template literal
const summary = `Number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot}
Power (x³): ${cube}
Random number (10–50): ${randomNumber}`;

console.log(summary);
showOutput(summary);
