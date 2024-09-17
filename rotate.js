//select php html elements
const rotate_obj = document.querySelector('.rotate-obj');
const rotate_btn = document.querySelector('.rotate-btn');

let rotateDeg = 0;
rotate_btn.addEventListener('click', () {
    rotateDeg =rotateDeg + 5;
    rotate_obj.style.transform = `rotate(${rotateDeg}deg)`;
})