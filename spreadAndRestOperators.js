// Topic of the Day: Spread & Rest Operators (...)
// Explanation: The ... syntax is used in two ways:
// Spread: "Unpacks" an array/object into individual items. (Great for copying).
// Rest: "Gathers" multiple items into an array. (Great for function arguments).

// 1. Spread (Copying/Merging)
const groupA = [1, 2, 3];
const groupB = [4, 5, 6];

// Combine them into a new array
const combined = [...groupA, ...groupB]; 
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 2. Rest (Function Arguments)
// "Take the first arg as 'first', and gather the REST into an array"
function raceResults(winner, ...others) {
    console.log("Winner:", winner);
    console.log("Others:", others);
}

raceResults("Alice", "Bob", "Charlie", "Dave");
// Winner: Alice
// Others: ["Bob", "Charlie", "Dave"]