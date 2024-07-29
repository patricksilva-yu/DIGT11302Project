document.addEventListener('DOMContentLoaded', () => {
    // This ensures the code runs only after the entire DOM is loaded
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Remove any existing error messages before validating
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        // Check if the name field is empty
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            isValid = false;
            showError(name, 'Full name is required.');
        } else {
            name.style.borderColor = ''; // Reset border color if valid
        }

        // Check if the username field is empty
        const username = document.getElementById('username');
        if (username.value.trim() === '') {
            isValid = false;
            showError(username, 'Username is required.');
        } else {
            username.style.borderColor = ''; // Reset border color if valid
        }

        // Validate the password against a pattern (min 8 chars, 1 letter, 1 number)
        const password = document.getElementById('password');
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(password.value)) {
            isValid = false;
            showError(password, 'Password must be at least 8 characters long and include at least one letter and one number.');
        } else {
            password.style.borderColor = ''; // Reset border color if valid
        }

        // Check if the major field is empty
        const major = document.getElementById('major');
        if (major.value.trim() === '') {
            isValid = false;
            showError(major, 'Degree major is required.');
        } else {
            major.style.borderColor = ''; // Reset border color if valid
        }

        // Check if the graduation date is selected
        const graduation = document.getElementById('graduation');
        if (graduation.value === '') {
            isValid = false;
            showError(graduation, 'Expected graduation date is required.');
        } else {
            graduation.style.borderColor = ''; // Reset border color if valid
        }

        // If the form is not valid, prevent submission
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Function to display error messages
    function showError(element, message) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;

        // Add styling to the error message
        error.style.color = 'red';
        error.style.fontSize = '12px';
        error.style.marginTop = '5px';

        // Insert the error message right after the input field
        if (element.nextSibling) {
            element.parentNode.insertBefore(error, element.nextSibling);
        } else {
            element.parentNode.appendChild(error);
        }

        // Highlight the input field with a red border
        element.style.borderColor = 'red';
    }
    
    // Function to show a notification when the form loads
    function showNotification() {
        const notification = document.createElement('div');
        notification.textContent = 'Account creation form loaded!';
        notification.style.position = 'fixed';
        notification.style.bottom = '10px';
        notification.style.right = '10px';
        notification.style.backgroundColor = 'green';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        document.body.appendChild(notification);

        // Remove the notification after 2 seconds
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // Show the notification when the page loads
    showNotification();
});
