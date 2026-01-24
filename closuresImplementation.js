// Topic of the Day: Closures
// Explanation: A Closure is when a function "remembers" the variables around it, even after that outer function has finished running. 
// It is used to create "private" variables.

function createCounter() {
    let count = 0; // This variable is "closed over" (protected)

    return function() {
        count++; // It still has access to 'count'
        return count;
    };
}

const myCounter = createCounter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2

// console.log(count); // Error! 'count' is private and cannot be touched directly.