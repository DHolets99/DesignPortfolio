const slider = document.querySelectorAll('.slider_wrapper');
const next = document.querySelector('.btn_right');
const prev = document.querySelector('.btn_left');
const slides = [];

let slidesToShow = 3;
let slidesToScroll = 1;
let currentSlide = 0;

const check = () => {
    console.log (1);
}


next.addEventListener('click', check);