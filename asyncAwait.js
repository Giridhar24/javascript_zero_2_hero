// Topic of the Day: Async / Await
// Explanation: On Day 8, we learned "Promises" (using .then()). 
// Async/Await is the modern, cleaner syntax for Promises. 
// It makes asynchronous code look like synchronous (step-by-step) code, which is much easier to read.

// A simulated delay function
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function processData() {
    console.log("1. Requesting Data...");
    
    // The code literally PAUSES here until 'wait' is finished
    // No callbacks, no .then() needed!
    await wait(2000); 
    
    console.log("2. Data Received!");
    
    await wait(1000);
    console.log("3. Processing Complete.");
}

processData();