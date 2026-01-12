// Topic of the Day: Intro to Promises (Async)
// Explanation: JavaScript is single-threaded (does one thing at a time). 
// If it waits for a file to download, the whole website freezes. Promises represent a value that doesn't exist yet but will in the future.
// States: Pending -> Resolved (Success) OR Rejected (Failed).

// A simulated slow operation (like downloading data)
const downloadData = new Promise((resolve, reject) => {
    let success = true; // Try changing to false
    
    if (success) {
        resolve("Download Complete!");
    } else {
        reject("Download Failed.");
    }
});

// Using the Promise
console.log("1. Starting...");

downloadData
    .then((message) => {
        // Runs ONLY if successful
        console.log("2. Success: " + message);
    })
    .catch((error) => {
        // Runs ONLY if failed
        console.log("2. Error: " + error);
    });

console.log("3. This prints BEFORE the download finishes!");