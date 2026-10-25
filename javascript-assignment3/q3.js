"use strict";

// Q3: Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            const error = new Error("Null transaction entry");
            error.name = "NullEntryError";
            throw error;
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            const error = new Error("Missing transaction id or amount");
            error.name = "MissingPropertyError";
            throw error;
        }
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative");
            error.name = "NegativeAmountError";
            throw error;
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalid.push({ index: i + 1, type: error.name, message: error.message });
        console.log(`Transaction at position ${i + 1}: ${error.name} — ${error.message}`);
    }
}

console.log("\n--- TRANSACTION REPORT ---");
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);

// Debugging: set a breakpoint on `const transaction = transactions[i]`.
// Watch `i`, `transaction`, `valid`, and `invalid` as the loop progresses.
