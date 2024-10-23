// Configure the API endpoint
const API_CONFIG = {
    url: 'https://kdyymm92fc.execute-api.us-west-1.amazonaws.com/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

// Function to update the DOM with visitor count
function updateVisitorDisplay(count) {
    const counterElement = document.getElementById('visitorCount');
    if (counterElement) {
        counterElement.textContent = count;
    }
}

// Function to handle errors
function handleError(error) {
    console.error('Error fetching visitor count:', error);
    updateVisitorDisplay('Error loading count');
}

// Main function to fetch and update visitor count
async function fetchVisitorCount() {
    // Check if we've already counted this visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
        // If we've already counted this visit, just display the stored count
        const storedCount = sessionStorage.getItem('visitorCount');
        if (storedCount) {
            updateVisitorDisplay(storedCount);
            return;
        }
    }

    try {
        // Make the API call
        const response = await fetch(API_CONFIG.url, {
            method: API_CONFIG.method,
            headers: API_CONFIG.headers,
            body: JSON.stringify({})
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data && typeof data.visitorCount !== 'undefined') {
            // Store the count and mark this visit
            sessionStorage.setItem('visitorCount', data.visitorCount);
            sessionStorage.setItem('hasVisited', 'true');
            
            // Update the display
            updateVisitorDisplay(data.visitorCount);
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        handleError(error);
    }
}

// Initialize the counter when the page loads
document.addEventListener('DOMContentLoaded', fetchVisitorCount);