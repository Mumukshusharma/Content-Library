// Toggle between Login and Register forms
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    this.classList.add('active');
    document.getElementById('registerBtn').classList.remove('active');
  });
  
  document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    this.classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    localStorage.setItem('username', username);
    window.location.href = 'index.html'; // Redirect to home page
  });
  
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    localStorage.setItem('username', username);
    window.location.href = 'index.html'; // Redirect to home page
  });
  