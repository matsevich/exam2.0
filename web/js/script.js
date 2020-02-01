$(document).ready(function () {
  $(`.header-slider`).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: true,
    dots: true,
    dotsClass: 'slick-dots',
    appendDots: $('.dots-position'),
    autoplaySpeed: 3000
  });

  $(`.slider`).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    speed: 1500,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 796,
      settings: {
          slidesToShow: 2,
      }
  },
  {
      breakpoint: 500,
      settings: {
          slidesToShow: 1
      }
  }
]
  });
  $('.prev').click(function() {
    $('.slider').slick('slickPrev');
})

$('.next').click(function() {
    $('.slider').slick('slickNext');
})
})