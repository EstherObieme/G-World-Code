// Select the Sign-Up button by its ID
const signupButton = document.getElementById('signup-btn');
const loginButton = document.getElementById('login-btn')


// Add an event listener to the button
signupButton.addEventListener('click', () => {
    // Redirect to the signup page
    window.location.href = 'signup.html';
});

loginButton.addEventListener('click', () => {
    // Redirect to the signup page
    window.location.href = 'login.html';
});
