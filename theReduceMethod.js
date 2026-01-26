// Topic of the Day: The reduce() Method
// Explanation: We learned map and filter. 
// reduce is the hardest but most powerful. It takes an array and "reduces" it to a single value (like a sum, or a combined object).
// Syntax: array.reduce((accumulator, current) => logic, initialValue)

const numbers = [10, 20, 30, 40];

// Goal: Sum all numbers
// 'acc' is the running total. 'curr' is the current number.
const total = numbers.reduce((acc, curr) => {
    console.log(`Acc: ${acc}, Curr: ${curr}`);
    return acc + curr;
}, 0); // 0 is the starting value

console.log("Total:", total); // 100

// Logic Trace:
// 1. 0 + 10 = 10
// 2. 10 + 20 = 30
// 3. 30 + 30 = 60
// 4. 60 + 40 = 100

