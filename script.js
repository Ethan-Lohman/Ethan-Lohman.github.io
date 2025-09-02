// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function copyEmailToClipboard() {
    const email = "lohmane.contact@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        // Optional: Visual feedback
        const el = document.querySelector('.email-display');
        const originalText = el.textContent;
        el.textContent = "Copied!";
        setTimeout(() => {
            el.textContent = originalText;
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
}