window.addEventListener("DOMContentLoaded", DOMLoaded);


// Function that creates button listener on page load and shows popup
function DOMLoaded() {
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", login);
    showNotification();
}

// JS Popup that appears when page loads
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

// Event for when login button is clicked
function login(event) {
    event.preventDefault();
    let isValid = true;

    // Selectors for login form
    const form = document.querySelector('form');
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    // Selectors for the profile page that appears
    const name  = document.getElementById("name");
    const fieldsets = document.querySelectorAll("fieldset");

    // Reset error messages for password validation
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    password.style.borderColor = '';
    
    // Password validation pattern
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        isValid = false;
        showError(password, 'Incorrect password.');
    }

    // Make name on profile page the username
    name.innerHTML = username.value;

    // If valid password, unhide the profile page and hide the login page
    if (isValid) {
    fieldsets[0].hidden = "true";
    fieldsets[1].removeAttribute("hidden");
    fieldsets[2].removeAttribute("hidden");
    fieldsets[3].removeAttribute("hidden");
    }
}

// Error messages for form validation
function showError(element, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
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