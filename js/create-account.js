document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        // Validate Full Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            isValid = false;
            showError(name, 'Full name is required.');
        }

        // Validate Username
        const username = document.getElementById('username');
        if (username.value.trim() === '') {
            isValid = false;
            showError(username, 'Username is required.');
        }

        // Validate Password
        const password = document.getElementById('password');
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(password.value)) {
            isValid = false;
            showError(password, 'Password must be at least 8 characters long and include at least one letter and one number.');
        }

        // Validate Degree Major
        const major = document.getElementById('major');
        if (major.value.trim() === '') {
            isValid = false;
            showError(major, 'Degree major is required.');
        }

        // Validate Expected Graduation Date
        const graduation = document.getElementById('graduation');
        if (graduation.value === '') {
            isValid = false;
            showError(graduation, 'Expected graduation date is required.');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(element, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;

        if (element.nextSibling) {
            element.parentNode.insertBefore(error, element.nextSibling);
        } else {
            element.parentNode.appendChild(error);
        }

        element.style.borderColor = 'red'; // Highlight the input field
    }
});
