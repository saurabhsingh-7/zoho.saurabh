// script.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navClose = document.getElementById('nav-close');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu on cross button click
    navClose.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });

    // Close menu when a navigation link is clicked
    navLinks.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('active');
        }
    });
});
