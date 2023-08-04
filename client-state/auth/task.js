'use strict';

const signin = document.getElementById('signin');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('user_id')) {
   welcome.classList.add('welcome_active');
   userId.innerText = localStorage.getItem('user_id');
} else {
   signin.classList.add('signin_active');
}


signinBtn.addEventListener('click', (event) => {
   const autorizeForm = document.getElementById('signin__form');
   let formData = new FormData(autorizeForm);

   event.preventDefault();

   let xml = new XMLHttpRequest();
   xml.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth" id="signin__form');

   xml.onload = () => {
      let serverFedback = JSON.parse(xml.responseText);

      if (serverFedback.success === false) {
         alert("«Неверный логин/пароль»")
      } else {
         localStorage.setItem('user_id', serverFedback['user_id']);
         signin.classList.remove('signin_active');

         welcome.classList.add('welcome_active');
         userId.innerText = localStorage.getItem('user_id');
      }
   }

   xml.send(formData);
})