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
                    centerPadding: '80px',
                    slidesToShow: 1,
                    initialSlide: 2,
                }
            },
            {   
                breakpoint: 376,
                settings: { 
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 1,
                        initialSlide: 2,
                    }
                }
        ]
        });
});