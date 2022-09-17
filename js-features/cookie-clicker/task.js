const img = document.getElementById("cookie"),
    count = document.getElementById("clicker__counter");
img.onclick = () => {
    +count.textContent++;
    count.textContent % 2 !== 0 ? img.width +=20 : img.width -=20;
};
