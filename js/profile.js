window.addEventListener("DOMContentLoaded", DOMLoaded);

function DOMLoaded() {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", login);

    function showNotification() {
        const notification = document.createElement('div');
        notification.textContent = 'Profile loaded!';
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
}


function login(event) {
    event.preventDefault();
    let isValid = true;
    const form = document.querySelector('form');
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const name  = document.getElementById("name");
    const fieldsets = document.querySelectorAll("fieldset");

    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    password.style.borderColor = 'green';
    
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        isValid = false;
        showError(password, 'Incorrect password.');
    }

    name.innerHTML = username.value;

    if (isValid) {
    fieldsets[0].hidden = "true";
    fieldsets[1].removeAttribute("hidden");
    fieldsets[2].removeAttribute("hidden");
    fieldsets[3].removeAttribute("hidden");
    }
}

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