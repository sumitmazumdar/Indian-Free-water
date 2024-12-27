// Google Apps Script web app URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxKyhb05hlJ5JmzC1lK0gv-kAb_1QIDRPz0wuEiY0nh5DSwn2gEPdlew3NIlT78t7k27A/exec';

// Get IP address when page loads
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ipAddress').value = data.ip;
    })
    .catch(error => {
        console.error('Error getting IP address:', error);
        document.getElementById('ipAddress').value = 'IP not available';
    });

// Get user's location when page loads
window.addEventListener('load', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            document.getElementById('latitude').value = latitude;
            document.getElementById('longitude').value = longitude;
            
            // Convert coordinates to readable location using reverse geocoding
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                .then(response => response.json())
                .then(data => {
                    const location = data.address.city || data.address.state || data.address.country;
                    document.getElementById('location').value = location;
                })
                .catch(error => {
                    console.error('Error getting location:', error);
                    document.getElementById('location').value = 'Location not found';
                });
        }, function(error) {
            console.error('Error getting location:', error);
            document.getElementById('location').value = 'Location access denied';
        });
    } else {
        document.getElementById('location').value = 'Geolocation not supported';
    }
});

function handleSubmit(event) {
    event.preventDefault();
    
    const statusDiv = document.getElementById('status');
    statusDiv.className = 'status-message';
    statusDiv.style.display = 'block';
    statusDiv.textContent = "Submitting...";
    
    const formData = {
        phone: document.getElementById('phone').value,
        batch: document.getElementById('batch').value,
        upi: document.getElementById('upi').value,
        location: document.getElementById('location').value,
        latitude: document.getElementById('latitude').value,
        longitude: document.getElementById('longitude').value,
        ipAddress: document.getElementById('ipAddress').value,
        timestamp: new Date().toISOString()
    };

    // Create a form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_APPS_SCRIPT_URL;

    // Create a hidden input for the JSON data
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = 'data';
    hiddenField.value = JSON.stringify(formData);
    form.appendChild(hiddenField);

    // Add the form to the document and submit it
    document.body.appendChild(form);
    form.submit();

    // Show success message
    statusDiv.textContent = "Information submitted successfully!";
    statusDiv.className = 'status-message success';
    document.getElementById('waterForm').reset();
}
