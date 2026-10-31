// Q3. Arrow function and the value of this.

const user = {
    name: "Priya",
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); // Usually undefined because an arrow function does not have its own this.

// Fix: use a normal function so this refers to the object before the dot.
user.showName = function () {
    console.log(this.name);
};

user.showName(); // Priya
