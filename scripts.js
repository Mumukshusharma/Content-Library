// Existing functionalities of your content library
// For example, handling navigation, toggling elements, or other custom features

// Example: Toggle navigation bar (if this was part of your existing script)
document.querySelectorAll('nav ul li a').forEach(function(navItem) {
  navItem.addEventListener('click', function() {
      // Example functionality for navigation click
      console.log('Navigated to: ' + this.getAttribute('href'));
  });
});

// New code for handling login/registration

// Handle login form submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const email = document.getElementById('login-email').value;
  const password = document.getElemen+tById('login-password').value;

  // Simulate login validation (you would normally check credentials with a backend)
  if (email === "test@example.com" && password === "password123") {
      // Simulate successful login by setting a flag in localStorage
      localStorage.setItem("loggedIn", true);
      // Redirect to the content library page
      window.location.href = 'index.html'; // The content library page URL
  } else {
      alert("Invalid email or password. Please try again.");
  }
});

// Handle register form submission
document.getElementById('register-form')?.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('register-confirm-password').value;

  // Simulate registration validation
  if (password === confirmPassword) {
      // Simulate successful registration by setting a flag in localStorage
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("userName", name); // Save the user's name
      // Redirect to the content library page
      window.location.href = 'index.html'; // The content library page URL
  } else {
      alert("Passwords do not match. Please try again.");
  }
});

// Redirect users to content library if they are already logged in
window.onload = function() {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (isLoggedIn && window.location.pathname === '/login-register.html') {
      // If the user is already logged in, redirect to the content library
      window.location.href = 'index.html'; // The content library page URL
  }
};

// Display a welcome message on the content library page if the user is logged in
if (window.location.pathname === '/index.html') {
  const userName = localStorage.getItem("userName");
  if (userName) {
    document.getElementById('welcome-message').innerText = `Welcome, ${userName}! Enjoy exploring the content library.`;
  }
}
