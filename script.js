const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com";

// Trigger the API Gateway to get the visitor count
fetch(apiGatewayUrl, {
    method: 'POST', // Use GET if you're just retrieving data
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json(); // Assuming the API returns JSON
})
.then(data => {
        // The body contains a string, so we need to parse it
        const bodyString = data.body;
        const visitorCount = bodyString.match(/\d+/)[0];

        // Update the visitor count in the DOM
        document.getElementById('visitorCount').textContent = visitorCount;
})
.catch((error) => {
    console.error('Error fetching visitor count:', error);
    document.getElementById('visitorCount').textContent = 'Error'; // Show an error message in case of failure
});