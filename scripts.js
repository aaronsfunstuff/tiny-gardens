// scripts.js
const tips = [
    "Water your plants regularly, but don't overdo it. Most indoor plants prefer to dry out a bit between waterings.",
    "Place your plants where they can get plenty of natural light, but be careful of direct sunlight, which can scorch some plants.",
    "Dust your plants' leaves regularly to keep them clean and free from pests.",
    "Rotate your plants every few weeks to ensure even growth.",
    "Use pots with drainage holes to prevent water from pooling at the bottom, which can lead to root rot."
];

function newTip() {
    const tipElement = document.getElementById('tip');
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipElement.textContent = tips[randomIndex];
}

// Initialize with a random tip on page load
document.addEventListener('DOMContentLoaded', newTip);

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    });
});
