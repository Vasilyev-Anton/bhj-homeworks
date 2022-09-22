const dropdown = document.querySelector(".dropdown__value"),
    elem = Array.from(document.querySelectorAll(".dropdown__link")),
    buttons =  Array.from(document.getElementsByClassName("dropdown"));
    buttons.forEach(item => click(item)); 

function click(button) {
    button.addEventListener('click', function() {
        let sub = this.querySelector(".dropdown__list");
        if (sub.classList.contains("dropdown__list_active")) {
            sub.className = "dropdown__list";
            return false;
        }    
        else {
            sub.className = "dropdown__list dropdown__list_active";
        };
    });
}; 

for (let i in elem) {
    elem[i].closest(".dropdown__item").onclick = function() {
        elem[i].closest(".dropdown").querySelector(".dropdown__value").textContent = elem[i].innerText;
        return false;
    };
};    