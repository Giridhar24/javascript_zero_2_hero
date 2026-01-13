// Topic of the Day: JSON (stringify & parse)
// Explanation: JSON (JavaScript Object Notation) is the standard format for sending data between servers and browsers.
// JSON.stringify(): Converts a JS Object into a String (for sending).
// JSON.parse(): Converts a String back into a JS Object (for using).

const user = {
    name: "Giridhar",
    role: "Developer",
    id: 101
};

// 1. Preparing to send data (Object -> String)
const jsonString = JSON.stringify(user);
console.log("String for Server:", jsonString);
// Output: '{"name":"Giridhar","role":"Developer","id":101}'

// 2. Receiving data (String -> Object)
const serverResponse = '{"name":"Alice","role":"Admin"}';
const parsedUser = JSON.parse(serverResponse);

console.log("User Name:", parsedUser.name); // Output: Alice