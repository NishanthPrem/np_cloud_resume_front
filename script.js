const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com/"; // Your API Gateway URL

// Trigger the API Gateway with a POST request to get and update the visitor count
fetch(apiGatewayUrl, {
    method: 'POST',  // Use POST if your Lambda expects a POST request
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ action: 'getVisitorCount' }) // You can send an action or an empty object, depending on the setup
})
.then(response => response.json())
.then(data => {
    // Extract the visitor count from the response body (ensure your Lambda returns the count correctly)
    const visitorCount = data.body.match(/\d+/)[0]; // Assuming the response contains "Visitor count updated: [number]"

    // Update the visitor count in the DOM
    document.getElementById('visitorCount').textContent = visitorCount;
})
.catch((error) => {
    console.error('Error fetching visitor count:', error);
    document.getElementById('visitorCount').textContent = 'Error'; // Show an error message in case of failure
});
