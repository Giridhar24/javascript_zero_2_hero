// Topic of the Day: let vs const and Console Logging
// Explanation: Modern JavaScript (ES6+) moved away from var. 
// We now use let for variables that will change, and const for variables that will remain constant. 
// We use console.log() to see output in the browser's developer tools.

// 1. const: Cannot be reassigned
const courseName = "JS Zero to Hero";

// 2. let: Can be changed later
let currentDay = 1;

console.log("Welcome to " + courseName);
console.log("Day: " + currentDay);

// Updating the variable
currentDay = 2; // This is allowed
// courseName = "New Name"; // This would cause a crash (Error)

console.log("Next up is Day: " + currentDay);