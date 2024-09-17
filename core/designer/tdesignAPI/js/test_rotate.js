//select php html elements
const rotate_obj = document.querySelector('.rotate-obj');
const rotate_btn = document.querySelector('.rotate-btn');

rotate_btn.addEventListener('click', () => {
    rotate_obj.style.transform = 'rotate(90deg)';
})