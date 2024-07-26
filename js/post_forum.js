document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        const username = document.getElementById('username');
        if (username.value.trim() === '') {
            isValid = false;
            showError(username, 'Username is required.');
        }

        const title = document.getElementById('title');
        if (title.value.trim() === '') {
            isValid = false;
            showError(title, 'Post title is required.');
        }

        const content = document.getElementById('content');
        if (content.value.trim() === '') {
            isValid = false;
            showError(content, 'Content is required.');
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
        notification.textContent = 'Post submitted successfully!';
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