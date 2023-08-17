// top-scroll boxshadow

// Get a reference to the top-container element
const topContainer = document.querySelector('.top-container');

// Add an event listener for the "scroll" event
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down
    if (window.scrollY > 0) {
        // Add the "scrolled" class to the top-container
        topContainer.classList.add('scrolled');
    } else {
        // Remove the "scrolled" class from the top-container
        topContainer.classList.remove('scrolled');
    }
});