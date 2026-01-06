// Topic of the Day: Functions (Traditional vs. Arrow)
// Explanation: Functions are reusable blocks of code. 
// Instead of copying and pasting code, you wrap it in a function. 
// Modern JS (ES6) introduced Arrow Functions (=>), which are shorter and cleaner, especially for one-liners.

// 1. Traditional Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// 2. Modern Arrow Function (ES6)
// Syntax: const functionName = (parameters) => { logic }
const multiply = (a, b) => {
    return a * b;
};

// 3. Calling the functions
let greeting = greet("Developer");
let product = multiply(5, 10);

console.log(greeting); // Output: Hello, Developer!
console.log(product);  // Output: 50

// 4. Arrow function shorthand (Implicit return)
// If it's one line, you don't even need 'return' or curly braces!
const square = x => x * x;
console.log(square(4)); // Output: 16