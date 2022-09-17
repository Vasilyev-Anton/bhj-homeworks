let getKillNumber = document.getElementById("dead"),
    getLostNumber = document.getElementById("lost"),
    holes = (index) => document.getElementById(`hole${index}`),
    hit = 0,
    miss = 0;

for (let holeNumber = 1; holeNumber < 10; holeNumber++) {
    let hole = holes(holeNumber)
    hole.onclick = () => {
        hole.classList.contains("hole_has-mole") ? hit++ : miss++;
        hit === 10 ? (alert('Вы победили!'), hit = 0, miss = 0) : '';
        miss === 5 ? (alert('Вы проиграли!'), hit = 0, miss = 0) : '';

        getKillNumber.textContent = hit;
        getLostNumber.textContent = miss;
    }
}