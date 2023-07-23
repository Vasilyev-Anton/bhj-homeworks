'use strict';

const chatWidget = document.querySelector('.chat-widget');
const messages = document.getElementById('chat-widget__messages');
const input = document.querySelector('.chat-widget__input');
let container = document.querySelector('.chat-widget__messages-container');

chatWidget.addEventListener('click', () =>
  chatWidget.classList.add('chat-widget_active')
);

const robotMessages = [
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
  'Где Ваша совесть?',
  'Вы еще не купили ни одного товара для того, чтобы так с нами разговаривать!',
  'Кто тут?',
  'Добрый день! До свидания!',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше!',
  'Мы ничего не будем Вам продавать!',

];

const robotMsg = () => 
  robotMessages[Math.floor(Math.random() * robotMessages.length)];

const sendMsg = (text) => {
  const date = new Date().toTimeString().substring(0, 5);
  return `
    <div class="message ${text ? 'message_client' : ''}">
      <div class="message__time">${date}</div>
      <div class="message__text">
        ${text ? text : robotMsg()}
      </div>
    </div>
  `;
};

input.addEventListener('keydown', (event) => {
  let value = event.target.value;
  if (event.key === 'Enter' && value) {
    messages.innerHTML += sendMsg(value);
    input.value = '';

    messages.innerHTML += sendMsg();
    scrollChat();
  }
});

const scrollChat = () => {
  container.scrollTo(0, container.scrollHeight);
}; 