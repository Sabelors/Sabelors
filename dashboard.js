// Dropdown menu toggle
document.getElementById('menuButton').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('show');
});

// Handle RDP Connection (fake logic)
document.getElementById('rdpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("RDP Connected (simulated)");
});

// Save EA Profile
document.getElementById('eaProfileForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("EA Profile saved (image and bio stored locally)");
});

// Generate license key
document.getElementById('generateKeyButton').addEventListener('click', function() {
  const randomKey = Math.random().toString(36).substring(2, 6).toUpperCase() + ' ' +
                    Math.random().toString(36).substring(2, 6).toUpperCase() + ' ' +
                    Math.random().toString(36).substring(2, 6).toUpperCase();

  document.getElementById('generatedKey').textContent = 'Generated Key: ' + randomKey;

  const li = document.createElement('li');
  li.textContent = randomKey + ' - ACTIVE';
  document.getElementById('licenseKeyList').appendChild(li);
});