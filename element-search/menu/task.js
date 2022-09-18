let menuItem = Array.from(document.querySelectorAll(".menu__item")),
    index;

menuItem.forEach((item) => {
    if (item.querySelector(".menu_sub")) {
        item.querySelector(".menu__link").onclick = () => {
            index = menuItem.indexOf(item);
            getNestedMenu();
            return false;
        }
    }
})

function getNestedMenu() {
    for (item of menuItem) {
        if (item.querySelector(".menu_sub") && menuItem.indexOf(item) === index) {
            item.querySelector(".menu_sub").classList.toggle("menu_active");
        } else if (item.querySelector(".menu_sub") && menuItem.indexOf(item) !== index) {
            item.querySelector(".menu_sub").classList.toggle("menu_active", false);
        }
    }
}