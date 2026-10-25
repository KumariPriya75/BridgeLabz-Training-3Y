// Q2: String Manipulation Report

// Product name with extra spaces
const productName = " wireless headphones PRO ";

// Remove extra spaces and convert the title to lowercase
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first letter of each word
const words = trimmedName.split(" ");
const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
let cleanedTitle = capitalizedWords.join(" ");

// Replace "Pro" with "Pro Edition"
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
showOutput(`Cleaned title: ${cleanedTitle}\nTitle length: ${cleanedTitle.length}`);
