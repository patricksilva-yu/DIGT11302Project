// this DOM manipulation creates HTML content for the forum list page using JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.querySelector('.sub-header h1');
    const gridContainer = document.getElementById('grid-container');

    mainTitle.textContent = 'Welcome to York University Forums';

    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = 'housing.html';
    newLink.innerHTML = '<h3>Housing & Accommodations</h3><p>Discuss housing options & find roommates.</p>';
    newListItem.appendChild(newLink);
    gridContainer.appendChild(newListItem);

    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    gridContainer.style.gap = '20px';

    //event listeners for clicking, mouse actions, and key actions

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