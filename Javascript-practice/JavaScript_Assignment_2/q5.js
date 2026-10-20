// Q5: Boolean Logic Access System

// Security condition values
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all required security conditions
function checkSecurity() {
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use ! and || to identify an unsafe condition
    const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;
    const result = isSecure && !isUnsafe ? "Secure" : "Unsafe";

    console.log(`Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`);
    console.log(`Status: ${result}`);
    return `Door locked: ${isDoorLocked}\nWindow closed: ${isWindowClosed}\nAlarm on: ${isAlarmOn}\nOwner inside: ${isOwnerInside}\nStatus: ${result}`;
}

// Test a secure outcome
const firstResult = checkSecurity();

// Change a value and test an unsafe outcome
isWindowClosed = false;
const secondResult = checkSecurity();

showOutput(`Test 1:\n${firstResult}\n\nTest 2 (window opened):\n${secondResult}`);
