$(document).ready(function () {
  $(`.header-slider`).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 1500,
    autoplay: true,
    dots: true,
    dotsClass: 'slick-dots',
    appendDots: $('.dots-position'),
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 700,
      settings: {
          dots: false
      }
  }
]
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
    responsive: [{
      breakpoint: 1025,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  },
  {
      breakpoint: 700,
      settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1
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
  $('#bot-button').click(function() {
      $('.form-box').show(700);
      $('#bot-button').hide();
  });
  $('#form-submit').click(function(event) {
      event.preventDefault();
      $('.form-box').hide(700);
      $('#bot-button').show();
  })

  let $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
    return false;
});
  $(document).ready(function(){
    $('#nav-icon2').click(function(){
      $(this).toggleClass('open');
      $('.navbar').toggle({
        duration: 650,
    });
      $('.header-socials').toggle({
        duration: 650,
    });
    });
  });
})