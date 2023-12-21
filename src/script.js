function showDetails(achievementId) {
    var details = document.getElementById('details-' + achievementId);
    details.style.display = (details.style.display === 'block' || details.style.display === '') ? 'none' : 'block';
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