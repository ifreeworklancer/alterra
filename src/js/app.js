import jquery from 'jquery';
import slick from 'slick-carousel';

window.jQuery = window.$ = jquery;
window.slick = slick;

(function () {
  $('.burger-menu').click(function () {
    var menu = $('.menu');
    $(this).toggleClass('active');
    if (menu.is(':visible')) {
      menu.slideUp();
    } else {
      menu.slideDown();
    }
  });

  $(".menu-list").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('#arrow-up-link').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#arrow-up-link').stop().fadeIn();
    } else {
      $('#arrow-up-link').stop().fadeOut();
    }
  });
  $('#arrow-up-link').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });



  $('.form-control').on('focus', function () {
    $(this).parent().addClass('in-focus');
  });

  $('.form-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parent().addClass('in-focus');
    } else {
      $(this).parent().removeClass('in-focus');
    }
  });

  $('#partner-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    prevArrow: '<button type="button" class="prev-arrow"><img src="dist/img/icon/slick-left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="next-arrow"><img src="dist/img/icon/slick-right-arrow.svg"></button>',
    dots: true,
    customPaging: function (slider, i) {
      return '<span class="dot"></span>';
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

  $('#events-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    prevArrow: '<button type="button" class="prev-arrow"><img src="dist/img/icon/slick-left-arrow.svg"></button>',
    nextArrow: '<button type="button" class="next-arrow"><img src="dist/img/icon/slick-right-arrow.svg"></button>',
    dots: true,
    customPaging: function (slider, i) {
      return '<span class="dot"></span>';
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

})(jQuery)