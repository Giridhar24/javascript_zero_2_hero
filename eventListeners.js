// Topic of the Day: Event Listeners
// Explanation: Yesterday we selected an element. 
// Today we make it interactive. 
// addEventListener waits for a user action (click, keypress, hover) and runs a function when it happens.

// HTML assumed: <button id="myBtn">Click Me</button>

// 1. Select the button
const btn = document.querySelector("#myBtn");

// 2. Define what happens
function handleClick() {
    alert("Button was clicked!");
    btn.style.backgroundColor = "green"; // Change color on click
}

// 3. Attach the "Ear" (Listener)
// Syntax: element.addEventListener("event_type", function_to_run)
btn.addEventListener("click", handleClick);

// Note: You can also use an anonymous arrow function directly:
// btn.addEventListener("click", () => console.log("Clicked!"));