document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            isValid = false;
            showError(name, 'Full name is required.');
        }

        const username = document.getElementById('username');
        if (username.value.trim() === '') {
            isValid = false;
            showError(username, 'Username is required.');
        }

        const password = document.getElementById('password');
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordPattern.test(password.value)) {
            isValid = false;
            showError(password, 'Password must be at least 8 characters long and include at least one letter and one number.');
        }

        const major = document.getElementById('major');
        if (major.value.trim() === '') {
            isValid = false;
            showError(major, 'Degree major is required.');
        }

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

        // Add styling to the error message
        error.style.color = 'red';
        error.style.fontSize = '12px';
        error.style.marginTop = '5px';

        if (element.nextSibling) {
            element.parentNode.insertBefore(error, element.nextSibling);
        } else {
            element.parentNode.appendChild(error);
        }

        element.style.borderColor = 'red';
    }
    
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
    }

    showNotification();
});
