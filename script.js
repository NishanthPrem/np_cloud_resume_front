const apiGatewayUrl = "https://kdyymm92fc.execute-api.us-west-1.amazonaws.com/";
// Trigger the API Gateway with a POST request when the page loads
fetch(apiGatewayUrl, {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
})
.then(response => response.json())
.then(data => {
    console.log('Visitor count updated:', data);
})
.catch((error) => {
    console.error('Error triggering API Gateway:', error);
});

document.addEventListener('DOMContentLoaded', function () {
    // Placeholder visitor count value
    const visitorCount = 123; // Replace this with the actual count from the backend
    document.getElementById('visitorCount').textContent = visitorCount;
});
