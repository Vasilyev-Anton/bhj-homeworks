const num = document.getElementById("timer");
let timer = setInterval (() => {
    num.textContent = num.textContent > 0 ? num.textContent - 1 : (alert("Вы победили в конкурсе!"), clearInterval(timer));   
}, 500);