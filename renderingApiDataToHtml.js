// Topic of the Day: Rendering API Data to HTML
// Explanation: Yesterday we fetched data. 
// Today we put it on the screen. 
// We will use the Open-Meteo API (Free, no key needed) to show live weather.

// HTML assumed: <div id="weather-card">Loading...</div>

async function loadWeather() {
    const card = document.getElementById("weather-card");
    
    try {
        // Fetch weather for New York (Lat 40.71, Long -74.01)
        const url = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true";
        const response = await fetch(url);
        const data = await response.json();
        
        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;
        
        // Dynamic HTML injection
        card.innerHTML = `
            <h2>New York Weather</h2>
            <p>Temperature: <strong>${temp}°C</strong></p>
            <p>Wind Speed: ${wind} km/h</p>
        `;
        
    } catch (err) {
        card.textContent = "Failed to load weather.";
    }
}

loadWeather();