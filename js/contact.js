document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            isValid = false;
            showError(name, 'Name is required.');
        }

        const email = document.getElementById('email');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            showError(email, 'Invalid email address.');
        }

        const content = document.getElementById('content');
        if (content.value.trim() === '') {
            isValid = false;
            showError(content, 'Message is required.');
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            showNotification();
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

        element.style.borderColor = 'red'; 
    }

    function showNotification() {
        const notification = document.createElement('div');
        notification.textContent = 'Form submitted successfully!';
        notification.style.position = 'fixed';
        notification.style.bottom = '10px';
        notification.style.right = '10px';
        notification.style.backgroundColor = 'green';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            console.log('Link clicked:', event.target);
        });
    });

    document.addEventListener('mouseover', function(event) {
        if (event.target.tagName === 'A') {
            event.target.style.color = 'blue';
            console.log('Mouseover on:', event.target);
        }
    });

    document.addEventListener('mouseout', function(event) {
        if (event.target.tagName === 'A') {
            event.target.style.color = '';
            console.log('Mouseout from:', event.target);
        }
    });

    document.addEventListener('keypress', function(event) {
        console.log('Key pressed:', event.key);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('Enter key pressed and default prevented');
        }
    });
});