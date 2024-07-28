function showSpecial() {
    let special = document.getElementById("special");

    special.style.opacity = 1;
    special.style.display = "block";

    setTimeout(() => {
        special.style.opacity = 0;
    }, 2000);
}

function onSubmit(event) {
event.preventDefault();

const username = document.getElementById('username').value.trim();
const title = document.getElementById('title').value.trim();
const content = document.getElementById('content').value.trim();

const postDiv = document.createElement('div');
postDiv.className = 'post';
postDiv.innerHTML = `
    <strong>Username:</strong> ${username}<br>
    <strong>Title:</strong> ${title}<br>
    <strong>Content:</strong> ${content}`;

const noPostElement = document.getElementById('no-post');
if (noPostElement) {
    noPostElement.remove();
}    

const resultsContainer = document.getElementById('resultsContainer');

resultsContainer.appendChild(postDiv);

document.getElementById('username').value = '';
document.getElementById('title').value = '';
document.getElementById('content').value = '';

showSpecial();
}


const createPost = document.getElementById('create-post');
createPost.addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');

    formContainer.style.display = 'block';
    createPost.style.display = "none";

    formContainer.innerHTML = '';

    const form = document.createElement('form');
    form.action = 'submit_post.html';
    form.method = 'post';

    const usernameLabel = document.createElement('label');
    usernameLabel.htmlFor = 'username';
    usernameLabel.textContent = 'Username:';
    form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.name = 'username';
    usernameInput.required = true;
    form.appendChild(usernameInput);

    form.appendChild(document.createElement('br'));

    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.textContent = 'Post Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.required = true;
    form.appendChild(titleInput);

    form.appendChild(document.createElement('br'));

    const contentLabel = document.createElement('label');
    contentLabel.htmlFor = 'content';
    contentLabel.textContent = 'Content:';
    form.appendChild(contentLabel);

    const contentTextarea = document.createElement('textarea');
    contentTextarea.id = 'content';
    contentTextarea.name = 'content';
    contentTextarea.rows = 10;
    contentTextarea.required = true;
    form.appendChild(contentTextarea);

    form.appendChild(document.createElement('br'));

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit Post';
    submitButton.id = 'submit-button';
    buttonContainer.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'cancel-button';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', function() {
        formContainer.innerHTML = '';
        formContainer.style.display = 'none';
        createPost.style.display = "block"
    });
    buttonContainer.appendChild(cancelButton);

    form.appendChild(buttonContainer);

    formContainer.appendChild(form);

    let submitClicked = document.getElementById('submit-button');
    submitClicked.addEventListener("click", onSubmit);
});