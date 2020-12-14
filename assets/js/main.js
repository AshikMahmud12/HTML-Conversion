$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#menu-bar").height()) {
      $("#menu-bar").addClass("fixed");
    } else {
      $("#menu-bar").removeClass("fixed");
    }
  });

  $(".slider").slick({
    dots: false,
    infinite: true,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#owlCarousel").owlCarousel({
    loop: true,

    nav: false,
    autoplay: 1000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $("#owlCarousel2").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".num").counterUp({ delay: 10, time: 4000 });
});

new WOW().init();

jssor_1_slider_init();
