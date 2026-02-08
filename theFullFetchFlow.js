// Topic of the Day: The Full Fetch Flow

// Explanation: This script connects the user's browser to the Python API we just built. 

// It handles the "Loading" state, the "Success" state, and the "Error" state.

async function getPrediction() {
    const display = document.getElementById("result");
    display.innerText = "Calculating..."; // Loading State

    try {
        const response = await fetch("http://localhost:8000/predict_price", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                rooms: 3,
                location_score: 8.5
            })
        });

        if (!response.ok) {
            throw new Error("Server Error: " + response.status);
        }

        const data = await response.json();
        
        // Success State
        display.innerText = `Estimated Value: $${data.prediction}`;
        console.log("Full Response:", data);

    } catch (error) {
        // Error State
        display.innerText = "Failed to get prediction.";
        console.error(error);
    }
}