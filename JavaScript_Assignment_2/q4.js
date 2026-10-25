// Q4: Array Performance Analyzer

// Generate 8 random whole-number scores from 30 to 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Calculate highest, lowest, average, and passing students
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;

// Use map() to create a readable list of scores
const scoreList = scores.map((score, index) => `Student ${index + 1}: ${score}`).join("\\n");

const summary = `Scores:
${scoreList}

Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed (score ≥ 50): ${passedStudents}`;

console.log(summary);
showOutput(summary);
