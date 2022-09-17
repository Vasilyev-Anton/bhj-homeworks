const img = document.getElementById("cookie"),
    count = document.getElementById("clicker__counter");
img.onclick = () => {
    img.width = ++count.textContent % 2 ? 250 : 200;
};
