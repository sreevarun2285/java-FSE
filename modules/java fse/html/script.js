document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const feedback = document.getElementById('feedback');
    const promoVideo = document.getElementById('promoVideo');
    const findEventsButton = document.getElementById('findEvents');
    const locationDiv = document.getElementById('location');

    // Event Registration Form Submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        confirmationMessage.textContent = "Registration successful!";
    });

    // Feedback Character Count
    feedback.addEventListener('input', () => {
        const charCount = feedback.value.length;
        console.log(`Character count: ${charCount}`);
    });

    // Video Ready to Play
    promoVideo.oncanplay = () => {
        console.log("Video ready to play");
    };

    // Find Nearby Events
    findEventsButton.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError, { enableHighAccuracy: true });
        } else {
            locationDiv.textContent = "Geolocation is not supported by this browser.";
        }
    });

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        locationDiv.textContent = `Latitude: ${lat}, Longitude: ${lon}`;
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                locationDiv.textContent = "User  denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                locationDiv.textContent = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                locationDiv.textContent = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                locationDiv.textContent = "An unknown error occurred.";
                break;
        }
    }
});
