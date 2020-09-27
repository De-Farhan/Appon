$("body").scrollspy({ target: ".menu" });

// collapsed nav bar start
$(".menu ul li a").on("click", function () {
  $(".menu .navbar-collapse").collapse("hide");
});
// collapsed nav bar end

// fixed nav bar start

$(window).scroll(function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount > 120) {
    $(".menu").addClass(".fixed-nav");
  } else {
    $(".menu").removeClass(".fixed-nav");
  }
});

// fixed nav bar end

// banner slider start

$("#banner-part").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        fade: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// banner slider end

// screenshots slider start

$("#screenshots-part .screenshots-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// screenshots slider end

// watch video slider start

$(document).ready(function () {
  $(".venobox").venobox();
});

// watch video slider end

// team slider start

$("#team-part .team-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// team slider end

// feedback slider1 start

$("#feedback-part .feedback .feedback-text").slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: "#feedback-part .feedback .feedback-img",
  // fade: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// feedback slider1 end

// feedback slider2 start

$("#feedback-part .feedback .feedback-img").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: "#feedback-part .feedback .feedback-text",
  centerMode: true,
  centerPadding: "0px",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// feedback slider2 end

// back to top btn start

$(window).scroll(function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount > 850) {
    $(".back-top-btn i").addClass("back-fixed");
  } else {
    $(".back-top-btn i").removeClass("back-fixed");
  }
});

// back to top btn end
