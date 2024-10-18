const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com/"; // Ensure this is the correct endpoint with the correct stage

// Function to trigger API Gateway and get visitor count
function fetchVisitorCount() {
    fetch(apiGatewayUrl, {
        method: 'POST',  // Keep the method as POST since that's how your API expects it
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({}) // Empty body, similar to your working request
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Parse the stringified JSON inside the 'body' field
        const visitorData = JSON.parse(data.body);  // Parse the body to extract visitorCount
        const visitorCount = visitorData.visitorCount; // Extract the count
        
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
