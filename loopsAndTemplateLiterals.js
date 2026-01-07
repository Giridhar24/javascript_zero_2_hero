// Topic of the Day: Loops and Template Literals
// Explanation: JavaScript has a standard for loop like Java. 
// We also introduce Template Literals (using backticks `). 
// This is the modern way to combine strings and variables, much cleaner than using +.

// 1. Template Literals (Modern String Formatting)
let user = "Dev";
let day = 3;
// Notice the backticks ` ` instead of quotes " "
console.log(`Hello ${user}, welcome to Day ${day}!`);

// 2. The Loop
const tasks = ["Learn Logic", "Learn Loops", "Practice"];

console.log("--- Daily Tasks ---");

for (let i = 0; i < tasks.length; i++) {
    // We use [i] to access the item at that index
    console.log(`Task ${i + 1}: ${tasks[i]}`);
}