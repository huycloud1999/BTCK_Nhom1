const form = document.querySelector('form');
const input = document.querySelector('input[type=email]');
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
  event.preventDefault();

  const email = input.value;

  if (localStorage.getItem('email') === email) {
    alert('This email is already subscribed. Please enter a different email.');
  } else {
    localStorage.setItem('email', email);
    alert('Thank you for subscribing!');
  }
});