// Topic of the Day: map and filter
// Explanation: These are the two most powerful array methods in modern JS.
// map(): Transforms every item in an array and returns a new array. (e.g., doubling every number).
// filter(): Checks every item and keeps only those that return true. (e.g., keeping only passing grades).

const numbers = [10, 20, 30, 40, 50];

// 1. Map: Multiply every number by 2
// Reads as: "Take 'num', return 'num * 2'"
const doubled = numbers.map(num => num * 2);

console.log("Doubled:", doubled); 
// Output: [20, 40, 60, 80, 100]

// 2. Filter: Keep numbers greater than 25
const bigNumbers = numbers.filter(num => num > 25);

console.log("Filtered:", bigNumbers); 
// Output: [30, 40, 50]