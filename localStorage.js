// Topic of the Day: LocalStorage
// Explanation: Variables die when you refresh the page. 
// LocalStorage saves data in the user's browser permanently (until cleared). It works like a simple Hash Map (Key-Value).

// 1. Save Data (Must be strings)
localStorage.setItem("username", "HeroUser");
localStorage.setItem("theme", "Dark");

// 2. Retrieve Data
const user = localStorage.getItem("username");
console.log("Welcome back, " + user);

// 3. Remove Data
localStorage.removeItem("theme");

// 4. Clear Everything
// localStorage.clear();