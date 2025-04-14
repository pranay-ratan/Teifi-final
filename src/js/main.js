// main.js

// Function to toggle the mobile navigation menu
const toggleMenu = () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
};

// Function to handle smooth scrolling to sections
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
};

// Event listener for menu toggle
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Event listeners for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Dynamic content update example
const updateContent = () => {
    const contentArea = document.querySelector('.dynamic-content');
    contentArea.innerHTML = '<p>This content was updated dynamically!</p>';
};

// Call the function to update content on page load
window.onload = updateContent;