// Topic of the Day: ES6 Classes
// Explanation: JavaScript was originally "Prototype-based." 
// ES6 added the class keyword to make it look more like Java/Python. 
// Under the hood, it's still prototypes, but the syntax is much cleaner.

class Car {
    constructor(brand) {
        this.brand = brand;
    }
    
    drive() {
        return `${this.brand} is moving.`;
    }
}

// Inheritance in JS
class SportsCar extends Car {
    constructor(brand, topSpeed) {
        super(brand); // Call parent constructor
        this.topSpeed = topSpeed;
    }
    
    drive() {
        return `${super.drive()} Fast!`;
    }
}

const ferrari = new SportsCar("Ferrari", 200);
console.log(ferrari.drive()); 
// Output: Ferrari is moving. Fast!