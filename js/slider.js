$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        centerPadding: '105px',
        slidesToShow: 3,
        initialSlide: 2,
        prevArrow: '.btn_left',
        nextArrow: '.btn_right',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {   
            breakpoint: 480,
            settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
        });
});