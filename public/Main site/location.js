let currentLocation = null;

function getLocation() {
    const loadingSpinner = document.getElementById('loading-spinner');
    const errorDisplay = document.getElementById('location-error');
    const successDisplay = document.getElementById('location-success');
    const coordinatesDisplay = document.getElementById('coordinates-display');
    const locationInput = document.getElementById('location-input');

    // Reset displays
    errorDisplay.style.display = 'none';
    successDisplay.style.display = 'none';
    coordinatesDisplay.style.display = 'none';
    loadingSpinner.style.display = 'block';
    locationInput.value = '';

    if (!navigator.geolocation) {
        showError("आपका ब्राउज़र लोकेशन का समर्थन नहीं करता है");
        return;
    }

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
        showPosition,
        showError,
        options
    );
}

// Replace the existing showPosition function with this new one
async function showPosition(position) {
    const loadingSpinner = document.getElementById('loading-spinner');
    const successDisplay = document.getElementById('location-success');
    const coordinatesDisplay = document.getElementById('coordinates-display');
    const locationInput = document.getElementById('location-input');
    
    currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
    };

    try {
        // Show loading state while fetching address
        loadingSpinner.style.display = 'block';
        
        // Fetch address details using reverse geocoding
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
        const data = await response.json();
        
        const address = data.address;
        const cityName = address.city || address.town || address.village || address.suburb || 'Unknown City';
        const postalCode = address.postcode || 'Unknown Pincode';
        
        // Enable and update location input with city and pincode
        locationInput.disabled = false;
        locationInput.value = `${cityName}, ${postalCode}`;
        
        loadingSpinner.style.display = 'none';
        successDisplay.style.display = 'block';
        coordinatesDisplay.style.display = 'block';
        
        // Update accuracy display
        document.getElementById('accuracy').textContent = 
            `सटीकता: ${Math.round(position.coords.accuracy)} मीटर`;
        
        successDisplay.textContent = "स्थान सफलतापूर्वक प्राप्त किया गया";
    } catch (error) {
        showError("Unable to fetch address details");
        console.error('Error fetching address:', error);
    }
}

function showError(error) {
    const loadingSpinner = document.getElementById('loading-spinner');
    const errorDisplay = document.getElementById('location-error');
    const locationInput = document.getElementById('location-input');
    
    loadingSpinner.style.display = 'none';
    errorDisplay.style.display = 'block';
    locationInput.disabled = false;

    let errorMessage;
    if (error.code) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "लोकेशन की अनुमति नहीं दी गई";
                break;
            case error.POSITION_UNAVAILABLE:
                errorMessage = "लोकेशन की जानकारी उपलब्ध नहीं है";
                break;
            case error.TIMEOUT:
                errorMessage = "लोकेशन प्राप्त करने का समय समाप्त हो गया";
                break;
            default:
                errorMessage = "कोई त्रुटि हुई";
        }
    } else {
        errorMessage = error;
    }
    
    errorDisplay.textContent = errorMessage;
}

// Add event listener for manual location input
document.addEventListener('DOMContentLoaded', function() {
    const locationInput = document.getElementById('location-input');
    if (locationInput) {
        locationInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                const location = event.target.value;
                if (location.trim()) {
                    document.getElementById('location-success').textContent = 
                        `स्थान दर्ज किया गया: ${location}`;
                    document.getElementById('location-success').style.display = 'block';
                }
            }
        });
    }
});
