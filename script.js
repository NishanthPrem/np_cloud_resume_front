const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com/";

// Function to trigger API Gateway and get visitor count
function fetchVisitorCount() {
    fetch(apiGatewayUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // Sending an empty body as no input is needed
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // No need to parse 'data.body' again; it should already be an object
        const visitorCount = data.visitorCount; // Extract the count directly

        // Update the visitor count in the DOM
        document.getElementById('visitorCount').textContent = visitorCount;
    })
    .catch((error) => {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitorCount').textContent = 'Error';
    });
}

// Invoke the fetchVisitorCount function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    fetchVisitorCount();
});
