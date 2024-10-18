const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com/visitor-count";

    // Function to fetch visitor count
    function fetchVisitorCount() {
        fetch(apiGatewayUrl, {
            method: 'GET',
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
            const bodyString = data.body; // "visitorCount: 15"
            const visitorCount = bodyString.match(/\d+/)[0]; // Extract the number
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