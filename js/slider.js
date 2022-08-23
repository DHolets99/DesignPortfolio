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
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    initialSlide: 2,
                }
            },
            {   
            breakpoint: 481,
            settings: { 
                    arrows: false,
                    centerMode: true,
                    centerPadding: '35px',
                    slidesToShow: 1,
                    initialSlide: 2,
                }
            }
        ]
        });
});