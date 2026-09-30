// =========================================
// PREDEFINED LOGIN DETAILS
// =========================================

const validUsername = "Admin";
const validPassword = "12345";

// =========================================
// GET HTML ELEMENTS
// =========================================

const username = document.getElementById("username");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const resetBtn = document.getElementById("resetBtn");

const showPassword = document.getElementById("showPassword");

const message = document.getElementById("message");

// =========================================
// LOGIN BUTTON
// =========================================

loginBtn.addEventListener("click", login);

// Function to validate login
function login() {

    // Remove previous message
    message.innerHTML = "";
    message.className = "";

    // Get user input
    const user = username.value.trim();
    const pass = password.value.trim();

    // Validate empty username
    if (user === "") {

        message.innerHTML = "Username is required.";
        message.classList.add("error");

        username.focus();
        return;
    }

    // Validate empty password
    if (pass === "") {

        message.innerHTML = "Password is required.";
        message.classList.add("error");

        password.focus();
        return;
    }

    // Check login details
    if (user === validUsername && pass === validPassword) {

        message.innerHTML = "Login Successful! Redirecting...";
        message.classList.add("success");

        // Redirect after 2 seconds
        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 2000);

    } else {

        message.innerHTML = "Invalid username or password.";
        message.classList.add("error");

    }

}

// =========================================
// SHOW / HIDE PASSWORD
// =========================================

showPassword.addEventListener("change", function () {

    if (showPassword.checked) {

        password.type = "text";

    } else {

        password.type = "password";

    }

});

// =========================================
// RESET BUTTON
// =========================================

resetBtn.addEventListener("click", resetForm);

function resetForm() {

    // Clear message
    message.innerHTML = "";
    message.className = "";

    // Hide password again
    password.type = "password";

    // Uncheck checkbox
    showPassword.checked = false;

    // Return cursor to username
    setTimeout(function () {

        username.focus();

    }, 0);

}

// =========================================
// PRESS ENTER TO LOGIN
// =========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        login();

    }

});