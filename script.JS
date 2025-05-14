// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your recovery booking has been submitted successfully!');
    bookingForm.reset();
});

// Driver Hiring Form Submission
const hireForm = document.getElementById('hire-form');
hireForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your driver application has been submitted successfully!');
    hireForm.reset();
});

// Toggle mobile navigation menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Google Maps Integration
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.509865, lng: -0.118092 }, // Default center (London)
        zoom: 10
    });

    const geocoder = new google.maps.Geocoder();

    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const address = document.getElementById('location').value;
        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
});
