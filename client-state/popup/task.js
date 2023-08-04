'use strict';

const modal = document.getElementById('subscribe-modal');
const closeModal = document.querySelector('.modal__close_times');
if (!document.cookie.includes("true")) {
    
   setTimeout("modal.classList.add('modal_active')", 2000);
}

closeModal.addEventListener('click', () => {
   modal.classList.remove('modal_active');
   document.cookie = "closed=true";
})