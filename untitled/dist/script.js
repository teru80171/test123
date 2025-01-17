// script.js
function callAPI() {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = 'Sending request...';

    fetch('https://api.example.com/game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'startGame' }),
    })
        .then(response => response.json())
        .then(data => {
            responseDiv.textContent = `API Response: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            responseDiv.textContent = `Error: ${error.message}`;
        });
}