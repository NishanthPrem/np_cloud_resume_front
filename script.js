const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com";

// Function to fetch visitor count
function fetchVisitorCount() {
    fetch(apiGatewayUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Parse the body field which contains the visitor count
        const visitorData = JSON.parse(data.body);  
        const visitorCount = visitorData.visitorCount;
        
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
