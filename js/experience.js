function calculateExperience(joiningDate) {
    let joinDate = new Date(joiningDate);
    let today = new Date();
    let experience = today.getFullYear() - joinDate.getFullYear();

    // Adjust if the current date is before the anniversary of joining
    if (
        today.getMonth() < joinDate.getMonth() || 
        (today.getMonth() === joinDate.getMonth() && today.getDate() < joinDate.getDate())
    ) {
        experience--;
    }

    return experience;
}

// Run this function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    let joiningDate = "2021-09-01"; // Set your joining date (YYYY-MM-DD)
    document.getElementById("experience").innerText = calculateExperience(joiningDate);
});

function sendMessage() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Check if fields are empty
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Open Gmail compose window
    let emailAddress = "muralip.software.engineer@gmail.com";
    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    
    window.open(gmailLink, "_blank");
}


$(document).ready(function(){
    $('.home-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav: true,
        dots: true,
        touchDrag: true,
        mouseDrag: true,
    });
});