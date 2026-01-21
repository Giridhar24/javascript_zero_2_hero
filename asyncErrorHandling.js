// Topic of the Day: Async Error Handling
// Explanation: When using async/await, if the API fails (e.g., 404 Not Found), the code crashes unless you catch it. 
// We wrap the code in a try...catch block.


async function getData(url) {
    try {
        const response = await fetch(url);
        
        // Custom check: fetch doesn't "throw" on 404, so we check manually
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Success:", data);
        
    } catch (error) {
        // This runs if network fails OR if we threw an error above
        console.error("Something went wrong:", error.message);
    }
}

// Test with a broken URL
getData("https://jsonplaceholder.typicode.com/broken-url");