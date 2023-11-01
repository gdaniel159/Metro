function toggleForm(formId) {
    var loginForm = document.getElementById('login');
    var registerForm = document.getElementById('register');

    if (formId === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else if (formId === 'register') {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    }
}
function togglePasswordVisibility(fieldId) {
    var passwordField = document.getElementById(fieldId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
