// Topic of the Day: Event Bubbling

// Explanation: When you click a button inside a <div>, did you click the button or the div? Answer: Both.

// Bubbling: The event fires on the Target (Button) first, then bubbles UP to the Parent (Div), then the Body, etc.

// HTML: <div id="parent"><button id="child">Click Me</button></div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
    console.log("Parent Clicked!");
});

child.addEventListener("click", (event) => {
    console.log("Child Clicked!");
    
    // Stop the bubble!
    // Without this, clicking the child would print BOTH messages.
    event.stopPropagation(); 
});