function showDetails(projectNumber) {
    var details = document.getElementById('details' + projectNumber);

    // Toggle the display property directly
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});