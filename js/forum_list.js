document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.querySelector('.sub-header h1');
    const gridContainer = document.getElementById('grid-container');

    mainTitle.textContent = 'Welcome to York University Forums';

    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = 'specific_post.html';
    newLink.innerHTML = '<h3>Up to Date</h3><p>Discuss the latest topics here.</p>';
    newListItem.appendChild(newLink);
    gridContainer.appendChild(newListItem);

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