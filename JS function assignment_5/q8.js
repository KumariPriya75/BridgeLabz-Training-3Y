// Q8. Create a custom myMap() method for all arrays.

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Skip empty positions, like the built-in map() method.
        if (index in this) {
            result.push(callback(this[index], index, this));
        }
    }

    return result;
};

const numbers = [1, 2, 3];
const doubledNumbers = numbers.myMap(function (number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6]
