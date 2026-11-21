function show(message) {
    document.getElementById("output").textContent += message + "\n";
}

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance < 0) {
            throw new Error("Distance must be provided and cannot be negative.");
        }
        return this.distance * 12;
    }
}

let driver = new Driver("Rahul", 4.8, "Car", "UP80AB1234");
show("Driver: " + driver.name + ", " + driver.vehicle + ", " + driver.vehicleNumber);

try {
    let trip = new Trip("Mathura", "Agra", 60);
    show("Trip: " + trip.fromLocation + " to " + trip.toLocation);
    show("Fare: Rs. " + trip.calculateFare());
} catch (error) {
    show("Unable to calculate fare: " + error.message);
}

try {
    let trip = new Trip("Mathura", "Agra", -5);
    show("Fare: Rs. " + trip.calculateFare());
} catch (error) {
    show("Unable to calculate fare: " + error.message);
}
