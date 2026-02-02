// Topic of the Day: Prototypes (What Classes really are)

// Explanation: In Java, Classes are blueprints. 

// In JavaScript, there are no real blueprints, only other objects. 

// When you ask for myObj.toString(), JS checks myObj. 

// If it's not there, it checks myObj's Prototype (Parent). 

// If not there, it checks the Parent's Parent. This is the Prototype Chain.

function Animal(name) {
    this.name = name;
}

// Adding a method to the "Prototype" (Shared by all Animals)
Animal.prototype.speak = function() {
    console.log(this.name + " makes a noise.");
};

const dog = new Animal("Rex");
dog.speak(); // Rex makes a noise.

// Proving the chain
console.log(dog.hasOwnProperty('name')); // true (It's on the object)
console.log(dog.hasOwnProperty('speak')); // false (It's on the Prototype!)