let modalMain = document.getElementById("modal_main"),
    modalSuccess = document.getElementById("modal_success");

modalMain.className += " " + "modal_active";

let item = document.querySelectorAll(".modal__close_times");
item[0].onclick = () => modalMain.className = "modal";
item[1].onclick = () => modalSuccess.className = "modal";

document.querySelector(".btn_danger").onclick = () => {
    modalMain.className = "modal";
    modalSuccess.className += " " + "modal_active";
}