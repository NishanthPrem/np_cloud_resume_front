const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com/";

// Function to trigger API Gateway and get visitor count
function fetchVisitorCount() {
    
    // Check if the visitor count has already been fetched
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
        fetch(apiGatewayUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const visitorCount = data.visitorCount; /

            // Update the visitor count in the DOM
            document.getElementById('visitorCount').textContent = visitorCount;

            // Set the flag in local storage to indicate that the visitor count has been fetched
            localStorage.setItem('hasVisited', 'true');
        })
        .catch((error) => {
            console.error('Error fetching visitor count:', error);
            document.getElementById('visitorCount').textContent = 'Error';
        });
    } else {
        // If the count has already been fetched, just display a message or the last known count
        document.getElementById('visitorCount').textContent = "Visitor count has already been fetched.";
    }
}

// Invoke the fetchVisitorCount function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    fetchVisitorCount();
});
