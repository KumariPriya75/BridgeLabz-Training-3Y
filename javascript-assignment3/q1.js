"use strict";

// Q1: Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nItem ${i + 1}:`, value);
    console.log(`Number: ${numberValue}, Boolean: ${booleanValue}, String: "${stringValue}"`);

    // Number(" ") and Number(null) become 0, but the assignment asks to treat
    // blank text, "NaN", and "100px" as invalid numeric data.
    const isMarkedInvalid = value === "NaN" ||
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "string" && value.trim() === "100px");

    if (!isMarkedInvalid && value !== undefined && !Number.isNaN(numberValue)) {
        validNumbers.push(numberValue);
        console.log("Status: VALID number");
    } else {
        invalidNumbers.push(value);
        console.log("Status: INVALID number");
    }
}

console.log("\n--- FINAL REPORT ---");
console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
console.log(`Valid count: ${validNumbers.length}`);
console.log(`Invalid count: ${invalidNumbers.length}`);
