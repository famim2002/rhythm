$('.main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: '<button class="prev_arr"><i class="fa-classic fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="next_arr"><i class="fa-classic fa-solid fa-chevron-right"></i></button>'
});

$('.counter').counterUp({
    delay: 10,
    time: 1000
});