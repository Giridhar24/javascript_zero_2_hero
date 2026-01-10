// Topic of the Day: DOM Manipulation (QuerySelector)
// Explanation: The DOM (Document Object Model) is how JS sees HTML. To change a webpage, you first have to "grab" the element you want to change.
// document.querySelector(): The Swiss Army Knife. You pass it a CSS selector (like "#id" or ".class"), and it grabs the first match it finds.
// Imagine HTML: <h1 id="main-title">Old Title</h1>

// 1. Select the element
const titleElement = document.querySelector("#main-title");

// 2. Modify it
titleElement.textContent = "New Title Updated by JS!";
titleElement.style.color = "blue"; // Change CSS style

// 3. Select by Class
// Imagine HTML: <p class="text">Para 1</p> <p class="text">Para 2</p>
const firstPara = document.querySelector(".text"); 
// Note: This only grabs the FIRST paragraph.

