// Topic of the Day: The Fetch API
// Explanation: This is how modern JS talks to the outside world (APIs). fetch() returns a Promise. 
// It is usually a 2-step process:
// Fetch the response.
// Convert the response to JSON.

// Function to get user data
async function getUser() {
    try {
        // 1. Send Request
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // 2. Check if successful
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        // 3. Parse JSON
        const data = await response.json();
        
        console.log("User Name:", data.name);
        
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

getUser();