// Topic of the Day: Sending Data (POST Request)

// Explanation: We used fetch to GET data. Now we POST (send) data. 

// You must specify the method, headers (to say "I am sending JSON"), and the body.

async function sendData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    
    const data = {
        title: "My New Post",
        body: "This is the content.",
        userId: 1
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // Convert JS Object to String
    });

    const result = await response.json();
    console.log("Server Response:", result);
}

sendData();