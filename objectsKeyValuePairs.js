// Topic of the Day: Objects (Key-Value Pairs)
// Explanation: In JS, Objects are collections of properties. 
// They look very similar to Python Dictionaries (which we will cover in DSA below). 
// They are the foundation of JSON (JavaScript Object Notation), which is how data is sent over the internet.

// 1. Creating an Object Literal
const student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    isEnrolled: true
};

// 2. Accessing Data
// Dot notation (Preferred)
console.log(student.firstName); 

// Bracket notation (Useful if key has spaces or is dynamic)
console.log(student["age"]);

// 3. Modifying Data
student.age = 22; // Birthday!
student.major = "Computer Science"; // Adding a new property dynamically

console.log(student);