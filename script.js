async function fetchTemperature() {
    try {
        let response = await fetch('192.168.43.222/sensorData');
        if (response.ok) {
            let data = await response.json();
            document.getElementById('temperature-display').innerText = `Temperature: ${data.temperature} °C`;
        } else {
            document.getElementById('temperature-display').innerText = 'Error fetching temperature';
        }
    } catch (error) {
        document.getElementById('temperature-display').innerText = 'Failed to connect to ESP8266';
    }
}

setInterval(fetchTemperature, 5000);  // Fetch data every 5 seconds
fetchTemperature();  // Initial fetch on page load
