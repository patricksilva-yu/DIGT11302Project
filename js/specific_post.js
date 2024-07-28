// Function to handle form submission
function onSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    if (username === '' || title === '' || content === '') {
        return; 
    }

    // Create new post with user input
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <strong>Username:</strong> ${username}<br>
        <strong>Title:</strong> ${title}<br>
        <strong>Content:</strong> ${content}`;

    const noPostElement = document.getElementById('no-post');
    if (noPostElement) {
        noPostElement.remove(); // Remove "no posts" message if present
    }

    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.appendChild(postDiv); // add post to results

    // clear input fields after submission
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';

    showSpecial(); 
}

// Function to display error messages
function showError(element, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = "red"; 
    element.parentNode.insertBefore(error, element.nextSibling);
    element.style.borderColor = 'red'; 
}

// Function to show 'post submitted' notification
function showSpecial() {
    const special = document.getElementById("special");
    special.style.opacity = 1; 
    special.style.display = "block"; 

    // Hide after 2 seconds
    setTimeout(() => {
        special.style.opacity = 0;
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const createPost = document.getElementById('create-post');
    
    // Event listener for 'create post' button
    createPost.addEventListener('click', function() {
        const formContainer = document.getElementById('formContainer');

        formContainer.style.display = 'block'; // Show form container
        createPost.style.display = "none"; // Hide the create post button
        formContainer.innerHTML = ''; // Clear existing form content

        const form = document.createElement('form');

        // Create username input
        const usernameLabel = document.createElement('label');
        usernameLabel.htmlFor = 'username';
        usernameLabel.textContent = 'Username:';
        form.appendChild(usernameLabel);

        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.id = 'username';
        usernameInput.name = 'username';
        form.appendChild(usernameInput);
        form.appendChild(document.createElement('br'));

        // Create title input
        const titleLabel = document.createElement('label');
        titleLabel.htmlFor = 'title';
        titleLabel.textContent = 'Post Title:';
        form.appendChild(titleLabel);

        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.id = 'title';
        titleInput.name = 'title';
        form.appendChild(titleInput);
        form.appendChild(document.createElement('br'));

        // Create content textarea
        const contentLabel = document.createElement('label');
        contentLabel.htmlFor = 'content';
        contentLabel.textContent = 'Content:';
        form.appendChild(contentLabel);

        const contentTextarea = document.createElement('textarea');
        contentTextarea.id = 'content';
        contentTextarea.name = 'content';
        contentTextarea.rows = 10;
        form.appendChild(contentTextarea);
        form.appendChild(document.createElement('br'));

        // Create submit/cancel button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        // Create submit button
        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = 'Submit Post';
        buttonContainer.appendChild(submitButton);

        // Create cancel button
        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.id = 'cancel-button';
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', function() {
            formContainer.innerHTML = ''; 
            formContainer.style.display = 'none'; 
            createPost.style.display = "block"; 
        });
        buttonContainer.appendChild(cancelButton);

        form.appendChild(buttonContainer);
        formContainer.appendChild(form);

        // Form validation and submission handling
        form.addEventListener("submit", function(event) {
            let isValid = true;
            const errorMessages = form.querySelectorAll('.error-message');
            errorMessages.forEach(error => error.remove());

            // Validate username
            if (usernameInput.value.trim() === '') {
                isValid = false;
                showError(usernameInput, 'Username is required.');
            }

            // Validate title
            if (titleInput.value.trim() === '') {
                isValid = false;
                showError(titleInput, 'Post title is required.');
            }

            // Validate content
            if (contentTextarea.value.trim() === '') {
                isValid = false;
                showError(contentTextarea, 'Content is required.');
            }

            if (isValid) {
                onSubmit(event); // Submit form if valid
            } else {
                event.preventDefault(); // Prevent submission if invalid
            }
        });
    });
});
