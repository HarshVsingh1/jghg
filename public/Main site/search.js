// Define doctorsData globally
const doctorsData = [
    // Ghaziabad Doctors
    {
        id: 1,
        name: 'डॉ. अमित शर्मा',
        specialization: 'general',
        experience: '12 वर्ष',
        location: 'वसुंधरा, गाज़ियाबाद',
        coordinates: { lat: 28.6692, lng: 77.3824 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543210',
        rating: 4.8,
        available: true,
        pincode: '201012'
    },
    {
        id: 2,
        name: 'डॉ. प्रिया गुप्ता',
        specialization: 'surgery',
        experience: '10 वर्ष',
        location: 'इंदिरापुरम, गाज़ियाबाद',
        coordinates: { lat: 28.6389, lng: 77.3776 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543211',
        rating: 4.6,
        available: true,
        pincode: '201014'
    },
    {
        id: 16,
        name: 'डॉ. रोहित गुप्ता',
        specialization: 'surgery',
        experience: '12 वर्ष',
        location: 'मथुरा',
        coordinates: { lat: 27.4924, lng: 77.6737 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543217',
        rating: 4.7,
        available: true,
        pincode: '281001'
    },
    {
        id: 17,
        name: 'डॉ. आरती शुक्ला',
        specialization: 'general',
        experience: '9 वर्ष',
        location: 'मथुरा',
        coordinates: { lat: 27.4930, lng: 77.6720 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543230',
        rating: 4.5,
        available: true,
        pincode: '281002'
    },
    {
        id: 18,
        name: 'डॉ. मनोज सिंह',
        specialization: 'dental',
        experience: '10 वर्ष',
        location: 'मथुरा',
        coordinates: { lat: 27.4950, lng: 77.6710 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543231',
        rating: 4.6,
        available: true,
        pincode: '281003'
    },
    {
        id: 19,
        name: 'डॉ. नेहा चौधरी',
        specialization: 'surgery',
        experience: '7 वर्ष',
        location: 'मथुरा',
        coordinates: { lat: 27.4960, lng: 77.6700 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543232',
        rating: 4.4,
        available: true,
        pincode: '281004'
    },
    {
        id: 20,
        name: 'डॉ. राकेश वर्मा',
        specialization: 'general',
        experience: '15 वर्ष',
        location: 'मथुरा',
        coordinates: { lat: 27.4970, lng: 77.6690 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543233',
        rating: 4.8,
        available: true,
        pincode: '281005'
    },

    // Hapur Doctors
    {
        id: 21,
        name: 'डॉ. मोनिका जैन',
        specialization: 'general',
        experience: '10 वर्ष',
        location: 'हापुड़',
        coordinates: { lat: 28.7437, lng: 77.7667 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543218',
        rating: 4.6,
        available: true,
        pincode: '245101'
    },
    {
        id: 22,
        name: 'डॉ. दीपक शर्मा',
        specialization: 'surgery',
        experience: '11 वर्ष',
        location: 'हापुड़',
        coordinates: { lat: 28.7440, lng: 77.7650 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543234',
        rating: 4.7,
        available: true,
        pincode: '245102'
    },
    {
        id: 23,
        name: 'डॉ. संगीता वर्मा',
        specialization: 'dental',
        experience: '8 वर्ष',
        location: 'हापुड़',
        coordinates: { lat: 28.7450, lng: 77.7640 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543235',
        rating: 4.5,
        available: true,
        pincode: '245103'
    },
    {
        id: 24,
        name: 'डॉ. अजय सिंह',
        specialization: 'general',
        experience: '13 वर्ष',
        location: 'हापुड़',
        coordinates: { lat: 28.7460, lng: 77.7630 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543236',
        rating: 4.6,
        available: true,
        pincode: '245104'
    },
    {
        id: 25,
        name: 'डॉ. प्रिया अग्रवाल',
        specialization: 'dental',
        experience: '6 वर्ष',
        location: 'हापुड़',
        coordinates: { lat: 28.7470, lng: 77.7620 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543237',
        rating: 4.4,
        available: true,
        pincode: '245105'
    },
    {
        id: 3,
        name: 'डॉ. राजेश कुमार',
        specialization: 'dental',
        experience: '15 वर्ष',
        location: 'वैशाली, गाज़ियाबाद',
        coordinates: { lat: 28.6422, lng: 77.3419 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543212',
        rating: 4.7,
        available: true,
        pincode: '201010'
    },
    {
        id: 4,
        name: 'डॉ. सुनीता वर्मा',
        specialization: 'general',
        experience: '8 वर्ष',
        location: 'क्रॉसिंग रिपब्लिक, गाज़ियाबाद',
        coordinates: { lat: 28.6183, lng: 77.3889 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543213',
        rating: 4.5,
        available: true,
        pincode: '201016'
    },
    {
        id: 5,
        name: 'डॉ. विकास सिंह',
        specialization: 'surgery',
        experience: '11 वर्ष',
        location: 'राजनगर एक्सटेंशन, गाज़ियाबाद',
        coordinates: { lat: 28.6447, lng: 77.3955 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543214',
        rating: 4.9,
        available: true,
        pincode: '201007'
    },

    // Bulandshahr Doctors
    {
        id: 6,
        name: 'डॉ. अनिल वर्मा',
        specialization: 'general',
        experience: '9 वर्ष',
        location: 'बुलंदशहर',
        coordinates: { lat: 28.4069, lng: 77.8498 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543215',
        rating: 4.4,
        available: true,
        pincode: '203001'
    },
    {
        id: 7,
        name: 'डॉ. रेखा गुप्ता',
        specialization: 'dental',
        experience: '8 वर्ष',
        location: 'बुलंदशहर',
        coordinates: { lat: 28.4039, lng: 77.8510 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543220',
        rating: 4.2,
        available: true,
        pincode: '203002'
    },
    {
        id: 8,
        name: 'डॉ. सुभाष त्यागी',
        specialization: 'surgery',
        experience: '12 वर्ष',
        location: 'बुलंदशहर',
        coordinates: { lat: 28.4090, lng: 77.8470 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543221',
        rating: 4.6,
        available: true,
        pincode: '203003'
    },
    {
        id: 9,
        name: 'डॉ. मनीष चौधरी',
        specialization: 'general',
        experience: '15 वर्ष',
        location: 'बुलंदशहर',
        coordinates: { lat: 28.4070, lng: 77.8500 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543222',
        rating: 4.5,
        available: true,
        pincode: '203004'
    },
    {
        id: 10,
        name: 'डॉ. कुसुम वर्मा',
        specialization: 'dental',
        experience: '6 वर्ष',
        location: 'बुलंदशहर',
        coordinates: { lat: 28.4050, lng: 77.8520 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543223',
        rating: 4.3,
        available: true,
        pincode: '203005'
    },

    // Aligarh Doctors
    {
        id: 11,
        name: 'डॉ. सीमा चौधरी',
        specialization: 'dental',
        experience: '7 वर्ष',
        location: 'अलीगढ़',
        coordinates: { lat: 27.8974, lng: 78.0880 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543216',
        rating: 4.5,
        available: true,
        pincode: '202001'
    },
    {
        id: 12,
        name: 'डॉ. नवीन कुमार',
        specialization: 'surgery',
        experience: '10 वर्ष',
        location: 'अलीगढ़',
        coordinates: { lat: 27.8960, lng: 78.0895 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543224',
        rating: 4.7,
        available: true,
        pincode: '202002'
    },
    {
        id: 13,
        name: 'डॉ. राधा रानी',
        specialization: 'general',
        experience: '14 वर्ष',
        location: 'अलीगढ़',
        coordinates: { lat: 27.8985, lng: 78.0870 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543225',
        rating: 4.6,
        available: true,
        pincode: '202003'
    },
    {
        id: 14,
        name: 'डॉ. अजय वर्मा',
        specialization: 'general',
        experience: '11 वर्ष',
        location: 'अलीगढ़',
        coordinates: { lat: 27.8990, lng: 78.0860 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543226',
        rating: 4.5,
        available: true,
        pincode: '202004'
    },
    {
        id: 15,
        name: 'डॉ. नीलम जैन',
        specialization: 'dental',
        experience: '9 वर्ष',
        location: 'अलीगढ़',
        coordinates: { lat: 27.8950, lng: 78.0880 },
        image: 'assests/doctor2.jpg',
        phone: '+91-9876543227',
        rating: 4.4,
        available: true,
        pincode: '202005'
    }
    // Add more doctors here...
];
// Function to search doctors
// Define the city names in both English and Hindi and their respective pincode
const cityMapping = {
    "Ghaziabad": ['गाज़ियाबाद', '201012', '201014', '201010', '201016', '201007'],
    "Hapur": ['हापुड़', '245101', '245102', '245103', '245104', '245105'],
    "Lucknow": ['लखनऊ', '226001', '226002', '226010', '226014', '226015'],
    "Mathura": ['मथुरा', '281001', '281002', '281003', '281004', '281005'],
    "Aligarh": ['अलीगढ़', '202001', '202002', '202003', '202004', '202005']
};

// Function to search doctors
function searchDoctors() {
    const locationInput = document.getElementById('location-input').value.trim();
    const specializationSelect = document.getElementById('specialization-select').value;
    const doctorsGrid = document.getElementById('doctors-grid');
    
    // Clear previous results
    doctorsGrid.innerHTML = '';

    // If no location is entered
    if (!locationInput) {
        showError("कृपया स्थान दर्ज करें");
        return;
    }

    // Filter doctors based on search criteria
    let filteredDoctors = doctorsData.filter(doctor => {
        // Check if the location is a valid city or pincode
        const cityMatch = isValidCityOrPincode(locationInput, doctor.location, doctor.pincode);
        const specializationMatch = specializationSelect === '' || doctor.specialization === specializationSelect;
        
        return cityMatch && specializationMatch;
    });

    // Display results
    if (filteredDoctors.length === 0) {
        doctorsGrid.innerHTML = `
            <div class="no-results">
                <p>इस स्थान पर कोई डॉक्टर नहीं मिला</p>
            </div>`;
        return;
    }

    // Sort doctors by rating
    filteredDoctors.sort((a, b) => b.rating - a.rating);

    // Create and append doctor cards
    filteredDoctors.forEach(doctor => {
        const doctorCard = createDoctorCard(doctor);
        doctorsGrid.appendChild(doctorCard);
    });
}

// Function to check if the city or pincode matches
function isValidCityOrPincode(input, doctorLocation, doctorPincode) {
    // Normalize the input (case insensitive)
    const inputLower = input.toLowerCase();
    return Object.values(cityMapping).some(city => {
        return city.some(value => value.toLowerCase().includes(inputLower)) || doctorPincode.includes(inputLower);
    });
}

// Function to create doctor card
function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    
    card.innerHTML = `
        <div class="doctor-image">
            <img src="${doctor.image}" alt="${doctor.name}">
        </div>
        <div class="doctor-info">
            <h3>${doctor.name}</h3>
            <p class="specialization">${doctor.specialization === 'general' ? 'सामान्य पशु चिकित्सक' : 
                                      doctor.specialization === 'surgery' ? 'पशु सर्जन' : 
                                      'पशु दंत चिकित्सक'}</p>
            <p class="experience">अनुभव: ${doctor.experience}</p>
            <p class="location">लोकेशन: ${doctor.location}</p>
            <div class="contact-buttons">
                <button class="appointment-btn" onclick="bookAppointment('${doctor.id}')">
                    अपॉइंटमेंट बुक करें
                </button>
                <button class="call-btn" onclick="callDoctor('${doctor.phone}')">
                    कॉल करें
                </button>
            </div>
        </div>
    `;

    return card;
}

// Function to handle appointment booking
function bookAppointment(doctorId) {
    // Implement appointment booking logic here
    alert('अपॉइंटमेंट बुकिंग सुविधा जल्द ही उपलब्ध होगी');
}

// Function to handle doctor calling
function callDoctor(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Listen for Enter key in location input
    const locationInput = document.getElementById('location-input');
    if (locationInput) {
        locationInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchDoctors();
            }
        });
    }

    // Listen for specialization changes
    const specializationSelect = document.getElementById('specialization-select');
    if (specializationSelect) {
        specializationSelect.addEventListener('change', function() {
            searchDoctors();
        });
    }
});
