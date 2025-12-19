/*
    Hope for Paws - Main JavaScript File
    -----------------------------------
    This file contains the minimal JavaScript needed for UI interactions.
    - Mobile navigation toggle (hamburger menu)
*/

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Mobile Navigation Toggle
     * ------------------------
     * Toggles the 'active' class on both the hamburger icon and the nav menu
     * to show/hide the mobile menu and animate the hamburger icon.
     */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Check if both elements exist before adding the event listener
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    /**
     * Pet Filtering Logic
     * -------------------
     * Handles the filtering of pets on the adoption page.
     */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const petCards = document.querySelectorAll('#pets-grid .pet-card');

    if (filterButtons.length > 0 && petCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Set active class on button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Get filter value
                const filter = button.dataset.filter;

                // Show/hide pet cards
                petCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    } // <-- Added this closing brace
    /**
     * Contact Form Validation
     * -----------------------
     * Performs basic client-side validation for the contact form.
     */
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            let isValid = true;
            
            // Get all required fields within the form
            const requiredFields = contactForm.querySelectorAll('[required]');

            requiredFields.forEach(input => {
                const formGroup = input.parentElement;
                const errorElement = formGroup.querySelector('.error-message');
                
                if (input.value.trim() === '') {
                    isValid = false;
                    errorElement.textContent = `${input.previousElementSibling.textContent} is required.`;
                    errorElement.style.display = 'block';
                } else {
                    errorElement.textContent = '';
                    errorElement.style.display = 'none';
                }
            });

            if (isValid) {
                // If the form is valid, you would typically send the data to a server.
                // For this project, we'll just show a success message.
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
});
