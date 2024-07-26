document.addEventListener('DOMContentLoaded', function() {
    const aboutTitle = document.querySelector('h2');

    aboutTitle.textContent = 'About York University Forums';

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
    function showNotification() {
        const notification = document.createElement('div');
        notification.textContent = 'Welcome to the About page!';
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

    showNotification();
});