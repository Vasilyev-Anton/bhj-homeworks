const slider = document.querySelectorAll(".slider__item");
let imageNumber = 0;

document.querySelector(".slider__arrow_prev").onclick = () => swipe('prev');
document.querySelector(".slider__arrow_next").onclick = () => swipe('next');

function swipe(flip) {
    slider[imageNumber].classList.toggle("slider__item_active");
    flip == "next" ? imageNumber++ : imageNumber--;
    if (imageNumber == slider.length) {
        imageNumber = 0;
    };
    if (imageNumber < 0) {
        imageNumber = slider.length - 1;
    };

    slider[imageNumber].classList.toggle("slider__item_active");
}
