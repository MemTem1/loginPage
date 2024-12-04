const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
    window.location.href = 'örnek.html'; 
  } else {
    alert('Incorrect username or password.');
  }
});

