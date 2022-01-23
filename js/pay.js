// Getting the variables
const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

form.addEventListener('submit', payment);

function payment(e) {
  e.preventDefault();

  console.log(firstName.value);
}
