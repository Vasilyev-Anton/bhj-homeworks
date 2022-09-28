let tabs = Array.from(document.querySelectorAll(".tab"));
let tabContent = Array.from(document.querySelectorAll(".tab__content"));
let index = 0;

const click = (event) => {
    tabs.forEach(item => item.className = "tab"); 
    event.currentTarget.className = "tab tab_active";
    index = tabs.indexOf(event.currentTarget);
    tabContent.forEach(item => item.className = "tab__content"); 
    tabContent[index].className = "tab__content tab__content_active";
}    

tabs.forEach(item => item.addEventListener('click', click));