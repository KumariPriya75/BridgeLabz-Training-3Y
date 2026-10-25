// Q7: Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Split the feedback into words and count them
const words = feedback.trim().split(/\\s+/);
const wordCount = words.length;

// Check for negative words
const lowerFeedback = feedback.toLowerCase();
const hasNegativeWords = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

const result = hasNegativeWords ? "Needs Improvement" : "Positive Feedback";

const summary = `Feedback: ${feedback}
Word count: ${wordCount}
Contains "bad" or "poor": ${hasNegativeWords}
Result: ${result}`;

console.log(summary);
showOutput(summary);
