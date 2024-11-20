const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link

// Add event listener to prevent form submission on enter key
function preventFormSubmission() {
    const locationInput = document.getElementById("location-input");
    locationInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            return false;
        }
    });
}

// Update enableAutocomplete function to prevent default form submission
function enableAutocomplete() {
    const locationInput = document.getElementById("location-input");
    const autocomplete = new google.maps.places.Autocomplete(locationInput);
    autocomplete.setFields(["geometry", "name"]);
    
    // Prevent form submission
    preventFormSubmission();
    
    // Get selected location details from autocomplete
    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            showManualPosition(place.name);
        }
    });
}

let mode = "auto"; // Default mode


// Toggle between auto and manual mode
function setMode(selectedMode) {
    mode = selectedMode;
    const locationInput = document.getElementById("location-input");

    if (mode === "auto") {
        locationInput.placeholder = "स्वचालित स्थान का उपयोग कर रहे हैं...";
        locationInput.disabled = true;
    } else {
        locationInput.placeholder = "अपना स्थान दर्ज करें...";
        locationInput.disabled = false;
        enableAutocomplete();
    }
}

// Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Find nearby vets based on the selected mode
function findNearbyVets() {
    if (mode === "auto") {
        // Automatic location detection using Geolocation API
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    } else {
        // Manual location - use entered location data
        const location = document.getElementById("location-input").value;
        if (location) {
            showManualPosition(location);
        } else {
            alert("कृपया स्थान दर्ज करें।");
        }
    }
}

// Initialize autocomplete for manual location entry
function enableAutocomplete() {
    const locationInput = document.getElementById("location-input");
    const autocomplete = new google.maps.places.Autocomplete(locationInput);
    autocomplete.setFields(["geometry", "name"]);
    
    // Get selected location details from autocomplete
    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
            showManualPosition(place.name);
        }
    });
}

// Show position when location is detected automatically
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    displayResults(latitude, longitude);
}

// Show position based on manual location input
function showManualPosition(location) {
    // Simulate latitude and longitude for demonstration (normally this would use an API lookup)
    const latitude = 27.1767; // Example: Latitude for Agra
    const longitude = 78.0081; // Example: Longitude for Agra
    console.log(`Location: ${location}, Latitude: ${latitude}, Longitude: ${longitude}`);
    displayResults(latitude, longitude);
}

// Display results for nearby veterinarians
function displayResults(latitude, longitude) {
    // Mocked nearby veterinarians data based on latitude and longitude
    const vets = [
        { name: "डॉ. अशोक कुमार", address: "गाँव - फतेहपुर, जिला - आगरा", distance: "2 किमी" },
        { name: "डॉ. सीमा गुप्ता", address: "गाँव - राधानगर, जिला - आगरा", distance: "5 किमी" },
        { name: "डॉ. राजेश यादव", address: "गाँव - भोगपुर, जिला - आगरा", distance: "8 किमी" }
    ];

    const resultsSection = document.getElementById("results");
    const doctorList = document.getElementById("doctor-list");
    doctorList.innerHTML = "";  // Clear previous results

    vets.forEach(vet => {
        const vetElement = document.createElement("div");
        vetElement.classList.add("vet-info");
        vetElement.innerHTML = `<h3>${vet.name}</h3><p>पता: ${vet.address}</p><p>दूरी: ${vet.distance}</p>`;
        doctorList.appendChild(vetElement);
    });

    resultsSection.style.display = "block";
}

// Error handling for geolocation
function showError(error) {
    let errorMessage = "";

    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "स्थान की अनुमति नहीं दी गई। कृपया स्थान सेवा सक्षम करें।";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "स्थान की जानकारी उपलब्ध नहीं है।";
            break;
        case error.TIMEOUT:
            errorMessage = "स्थान अनुरोध समय समाप्त। कृपया पुनः प्रयास करें।";
            break;
        default:
            errorMessage = "अज्ञात त्रुटि।";
            break;
    }
    alert(errorMessage);
}
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


// Add this at the beginning of your script.js file
let currentLanguage = 'hi'; // Default language is Hindi

// Translation dictionary
const translations = {
    hi: {
        // Hindi translations
        'searchTitle': 'डॉक्टर खोजें',
        'locationPlaceholder': 'अपना स्थान दर्ज करें',
        'specializationLabel': 'विशेषज्ञता चुनें',
        'searchButton': 'खोजें',
        'experience': 'अनुभव',
        'available': 'उपलब्ध',
        'unavailable': 'अनुपलब्ध',
        'bookAppointment': 'अपॉइंटमेंट बुक करें',
        'callDoctor': 'कॉल करें',
        'noResults': 'कोई डॉक्टर नहीं मिला',
        'years': 'वर्ष',
        'fee': 'फीस',
        'timing': 'समय',
        'languages': 'भाषाएं',
        'general': 'सामान्य पशु चिकित्सक',
        'surgery': 'पशु सर्जन',
        'dental': 'पशु दंत चिकित्सक'
    },
    en: {
        // English translations
        'searchTitle': 'Find Doctor',
        'locationPlaceholder': 'Enter your location',
        'specializationLabel': 'Select Specialization',
        'searchButton': 'Search',
        'experience': 'Experience',
        'available': 'Available',
        'unavailable': 'Unavailable',
        'bookAppointment': 'Book Appointment',
        'callDoctor': 'Call Doctor',
        'noResults': 'No doctors found',
        'years': 'years',
        'fee': 'Fee',
        'timing': 'Timing',
        'languages': 'Languages',
        'general': 'General Veterinarian',
        'surgery': 'Veterinary Surgeon',
        'dental': 'Veterinary Dentist'
    }
};

// Add language toggle button to HTML
function addLanguageToggle() {
    const header = document.querySelector('.find-doctor-header');
    const languageButton = document.createElement('button');
    languageButton.className = 'language-toggle';
    languageButton.innerHTML = `
        <i class="fas fa-language"></i>
        <span>${currentLanguage === 'hi' ? 'English' : 'हिंदी'}
    `;
    languageButton.onclick = toggleLanguage;
    header.appendChild(languageButton);
}

// Toggle language function
function toggleLanguage() {
    currentLanguage = currentLanguage === 'hi' ? 'en' : 'hi';
    updatePageLanguage();
    // Update button text
    const langButton = document.querySelector('.language-toggle span');
    if (langButton) {
        langButton.textContent = currentLanguage === 'hi' ? 'English' : 'हिंदी';
    }
}

// Update page content based on selected language
function updatePageLanguage() {
    // Update static content
    document.querySelector('.find-doctor-title').textContent = translations[currentLanguage].searchTitle;
    document.querySelector('#location-input').placeholder = translations[currentLanguage].locationPlaceholder;
    document.querySelector('.search-button').textContent = translations[currentLanguage].searchButton;

    // Update specialization select options
    const specializationSelect = document.getElementById('specialization-select');
    if (specializationSelect) {
        specializationSelect.options[0].text = translations[currentLanguage].specializationLabel;
        // Update other options
        const specializations = {
            'general': translations[currentLanguage].general,
            'surgery': translations[currentLanguage].surgery,
            'dental': translations[currentLanguage].dental
        };
        Array.from(specializationSelect.options).forEach(option => {
            if (option.value in specializations) {
                option.text = specializations[option.value];
            }
        });
    }

    // Refresh doctor cards if any are displayed
    if (filteredDoctors.length > 0) {
        displayResults(filteredDoctors);
    }
}

// Update the displayResults function to use translations
function displayResults(doctors) {
    const doctorsGrid = document.getElementById('doctors-grid');
    
    if (!doctors.length) {
        return;
    }

    doctorsGrid.innerHTML = doctors.map(doctor => `
        <div class="doctor-card" data-id="${doctor.id}">
            <div class="doctor-image">
                <img src="${doctor.image}" alt="${doctor.name}">
                <span class="availability-badge ${doctor.available ? 'available' : 'unavailable'}">
                    ${doctor.available ? 
                        translations[currentLanguage].available : 
                        translations[currentLanguage].unavailable}
                
            </div>
            <div class="doctor-info">
                <h3>${currentLanguage === 'en' ? translateName(doctor.name) : doctor.name}</h3>
                <p class="specialization">${translations[currentLanguage][doctor.specialization]}</p>
                <p class="experience">
                    <i class="fas fa-user-md"></i> 
                    ${translations[currentLanguage].experience}: 
                    ${translateExperience(doctor.experience)}
                </p>
                <p class="location">
                    <i class="fas fa-map-marker-alt"></i> 
                    ${currentLanguage === 'en' ? translateAddress(doctor.address) : doctor.address}
                </p>
                <p class="languages">
                    <i class="fas fa-language"></i> 
                    ${translations[currentLanguage].languages}: 
                    ${doctor.languages.join(', ')}
                </p>
                <p class="consultation-fee">
                    <i class="fas fa-rupee-sign"></i> 
                    ${translations[currentLanguage].fee}: ${doctor.consultationFee}
                </p>
                <p class="timings">
                    <i class="far fa-clock"></i> 
                    ${translations[currentLanguage].timing}: ${doctor.timings}
                </p>
                <div class="rating">
                    ${generateRatingStars(doctor.rating)}
                    <span class="rating-value">${doctor.rating}
                </div>
                <div class="contact-buttons">
                    <button class="appointment-btn" onclick="bookAppointment(${doctor.id})">
                        <i class="far fa-calendar-alt"></i> 
                        ${translations[currentLanguage].bookAppointment}
                    </button>
                    <button class="call-btn" onclick="callDoctor('${doctor.phone}')">
                        <i class="fas fa-phone"></i> 
                        ${translations[currentLanguage].callDoctor}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Helper function to translate names (basic example)
function translateName(name) {
    // Add more sophisticated name translation logic if needed
    const nameTranslations = {
        'डॉ. राजेश शर्मा': 'Dr. Rajesh Sharma',
        'डॉ. प्रिया पटेल': 'Dr. Priya Patel',
        'डॉ. अमित वर्मा': 'Dr. Amit Verma'
    };
    return nameTranslations[name] || name;
}

// Helper function to translate experience
function translateExperience(experience) {
    if (currentLanguage === 'en') {
        return experience.replace('वर्ष', 'years');
    }
    return experience;
}

// Helper function to translate address (basic example)
function translateAddress(address) {
    // Add more sophisticated address translation logic if needed
    const addressTranslations = {
        'सेक्टर 12, द्वारका, नई दिल्ली': 'Sector 12, Dwarka, New Delhi',
        'अंधेरी वेस्ट, मुंबई': 'Andheri West, Mumbai',
        'इंदिरानगर, बैंगलोर': 'Indiranagar, Bangalore'
    };
    return addressTranslations[address] || address;
}

// Add CSS for language toggle button
const style = document.createElement('style');
style.textContent = `
    .language-toggle {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        transition: background-color 0.3s ease;
    }

    .language-toggle:hover {
        background-color: #45a049;
    }

    .language-toggle i {
        font-size: 16px;
    }
`;
document.head.appendChild(style);

// Initialize language toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addLanguageToggle();
    updatePageLanguage();
});




//transitions
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
});


