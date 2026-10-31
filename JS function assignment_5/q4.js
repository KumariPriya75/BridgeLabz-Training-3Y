// Q4. Share a method through the Car prototype.

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log("Brand: " + this.brand + ", Model: " + this.model);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

car1.getDetails();
car2.getDetails();

// Both objects use the same method stored on Car.prototype.
console.log(car1.getDetails === car2.getDetails); // true
