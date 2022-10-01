let rotator = Array.from(document.querySelectorAll('.rotator'));

for (let i in rotator) {
    let rotatorCase = Array.from(rotator[i].querySelectorAll('.rotator__case')),
        currentPosition = 0,
        rotatorSpeed,
        rotatorColor;

    const changeTimer = function () {
        rotatorCase[currentPosition].classList.toggle('rotator__case_active');
        currentPosition++;

        if (currentPosition > rotatorCase.length - 1) {
            currentPosition = 0;
        }
             
        rotatorColor = rotatorCase[currentPosition].dataset.color;
        rotatorSpeed = rotatorCase[currentPosition].dataset.speed;
        rotatorCase[currentPosition].style.color = rotatorColor;  
        rotatorCase[currentPosition].classList.add('rotator__case_active'); 
        timer = setTimeout(changeTimer, rotatorSpeed);  
        clearTimeout(timer);
    }; 
    const timer = setTimeout(changeTimer, rotatorSpeed); 
};
