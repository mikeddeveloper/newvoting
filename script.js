// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Toggle Navbar
function toggleNavbar() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('show');
}

// Show Vote (for individual contestants)
function showVote(contestantId) {
    alert("Vote for Contestant " + contestantId);
}

// Search Functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const contestantCards = document.querySelectorAll('.contestant-card');

    contestantCards.forEach(card => {
        const contestantName = card.querySelector('h3').innerText.toLowerCase();
        if (contestantName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
