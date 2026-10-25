"use strict";

// Q9: JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age must be a valid number");
        }

        const entry = { user: parsed.user, age: age };
        clean.push(entry);

        if (age < 18) {
            under18.push(entry);
        }

        console.log(`Line ${i + 1}: VALID`, entry);
    } catch (error) {
        errors.push({ line: i + 1, message: error.message });
        console.log(`Line ${i + 1}: ERROR — ${error.message}`);
    }
}

console.log("\n--- JSON AUDIT REPORT ---");
console.log("Clean entries:", clean);
console.log("Errors:", errors);
console.log("Users under 18:", under18);

// Debugging: set a breakpoint at JSON.parse. When an error is thrown, the
// catch block runs, records the line number, and the loop continues.
