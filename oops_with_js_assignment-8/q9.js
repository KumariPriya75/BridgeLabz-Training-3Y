function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(person => person.steps > 7000);
    }

    getAverageCalories() {
        let total = this.data.reduce((sum, person) => sum + person.calories, 0);
        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(person =>
            person.user + " walked " + person.steps + " steps and burned " +
            person.calories + " calories."
        );
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    let fitness = new FitnessAnalytics(workoutData);
    show("Active users: " + JSON.stringify(fitness.getActiveUsers()));
    show("Average calories: " + fitness.getAverageCalories());
    show("User summary:");
    fitness.getUserSummary().forEach(message => show(message));
} catch (error) {
    show("Error: " + error.message);
}

try {
    let emptyFitness = new FitnessAnalytics([]);
} catch (error) {
    show("Empty dataset error: " + error.message);
}
