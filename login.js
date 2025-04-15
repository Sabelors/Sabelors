document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const mentorId = document.getElementById('mentorId').value;

  if (username === 'wandilefx' && password === 'wandile' && mentorId === '715') {
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('loginError').textContent = 'Invalid login credentials';
  }
});