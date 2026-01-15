// Topic of the Day: Destructuring Assignment
// Explanation: Destructuring is a clean syntax to "unpack" values from arrays or properties from objects into distinct variables. 
// It saves you from typing object.property over and over.

const user = {
    id: 42,
    username: "coder_hero",
    email: "hero@code.com",
    stats: {
        level: 10,
        xp: 500
    }
};

// Old Way
// const name = user.username;
// const level = user.stats.level;

// New Way (Destructuring)
// We create variables 'username' and 'email' directly from the object
const { username, email } = user;

// Nested Destructuring (Unpacking deeper levels)
const { level } = user.stats;

console.log(username); // Output: coder_hero
console.log(level);    // Output: 10