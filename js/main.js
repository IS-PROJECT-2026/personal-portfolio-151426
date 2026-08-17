const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

const fields = [
  { id: 'name', message: 'Please enter your name.' },
  { id: 'email', message: 'Please enter a valid email address.' },
  { id: 'message', message: 'Please enter a message.' }
];

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateField(field) {
  const input = document.getElementById(field.id);
  const error = document.getElementById(field.id + '-error');
  const value = input.value.trim();

  let valid = value.length > 0;
  if (valid && field.id === 'email') {
    valid = isValidEmail(value);
  }

  error.textContent = valid ? '' : field.message;
  input.setAttribute('aria-invalid', valid ? 'false' : 'true');
  return valid;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const results = fields.map(validateField);

  if (results.every(Boolean)) {
    status.textContent = 'Thanks. Your message has been captured.';
    form.reset();
  } else {
    status.textContent = 'Please fix the highlighted fields.';
  }
});

fields.forEach(function (field) {
  document.getElementById(field.id).addEventListener('blur', function () {
    validateField(field);
  });
});
