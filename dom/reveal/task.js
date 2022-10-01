const reveals = document.querySelectorAll(".reveal");

function isVisible(element) {
    const {top, bottom} = element.getBoundingClientRect()
    return (bottom > 0 && top < window.innerHeight ? true : false)
};

window.addEventListener('scroll', () => {
  for (const div of reveals) {
   isVisible(div) ? div.classList.add("reveal_active") : false;
  }
});
 