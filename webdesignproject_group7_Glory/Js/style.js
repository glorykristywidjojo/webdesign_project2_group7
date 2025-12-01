// Dynamic Travel Preferences based on Destination
$(document).ready(function() {
    const preferences = {
        'Amsterdam': [
            'Dam Square - canals - Anne Frank House - Jordaan - Museumplein.',
            'NDSM Wharf - A\'DAM Lookout - Vondelpark - Albert Cuyp Market.'
        ],
        'Hokkaido': [
            'Odori Park - Shiroi Koibito - Otaru Canal - Blue Pond - Shikisai no Oka.',
            'Snow Festival - Maruyama Zoo - Jozankei Onsen - Mount Moiwa - Tanukikoji.'
        ],
        'New York': [
            'Statue of Liberty - Central Park - Times Square - Met Museum - Broadway.',
            'Seaport District- Brooklyn Bridge - High Line - Grand Central - Fifth Ave.'
        ]
    };

    function updatePreferences() {
        const destination = $('#destination').val();
        $('#travel-preferences').empty();
        
        if (preferences[destination]) {
            $.each(preferences[destination], function(i, pref) {
                $('#travel-preferences').append($('<option>', {
                    value: pref,
                    text: pref
                }));
            });
        }
    }

    $('#destination').on('change', updatePreferences);
    updatePreferences();
});

// Form Validation
function validateForm() {
    if (!$('#full-name').val().trim()) {
        alert('Please enter your full name');
        return false;
    }
    
    if (!$('#email').val().trim()) {
        alert('Please enter your email address');
        return false;
    }
    
    const phone = $('#phone').val().trim();
    if (!phone) {
        alert('Please enter your phone number');
        return false;
    }
    
    if (!/^\d+$/.test(phone.replace(/[\s\-\+\(\)]/g, ''))) {
        alert('Phone number must contain only numbers');
        return false;
    }
    
    if (!$('input[name="gender"]:checked').length) {
        alert('Please select your gender');
        return false;
    }
    
    if (!$('#travel-date').val()) {
        alert('Please select a travel date');
        return false;
    }
    
    if (!$('input[name="travel-type"]:checked').length) {
        alert('Please select at least one travel type');
        return false;
    }
    
    return true;
}

 // Step progression - mark step 1 as active on identity page
            document.addEventListener('DOMContentLoaded', function() {
              const steps = document.querySelectorAll('.step');
              if (steps.length > 0) {
                steps[0].classList.add('active');
              }
            });