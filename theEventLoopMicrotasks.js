// Topic of the Day: The Event Loop (Microtasks)

// Explanation: JS is single-threaded, but it handles async tasks using queues.

// Call Stack: Runs sync code immediately.

// Microtask Queue (Promises): High priority. Runs right after the stack clears.

// Macrotask Queue (SetTimeout): Low priority. Runs only when Microtasks are empty.

console.log("1. Start");

// Macrotask (Low Priority)
setTimeout(() => {
    console.log("2. Timeout");
}, 0);

// Microtask (High Priority)
Promise.resolve().then(() => {
    console.log("3. Promise");
});

console.log("4. End");

// Output Order:
// 1. Start
// 4. End       (Stack clears)
// 3. Promise   (Microtasks run first)
// 2. Timeout   (Macrotasks run last)