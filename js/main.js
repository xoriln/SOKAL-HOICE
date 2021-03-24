$(function(){
    $('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./images/next-arrow.svg" alt="next arrow" class="arrow next"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./images/prev-arrow.svg" alt="prev arrow" class="arrow prev"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
            }
          },
          {
            breakpoint: 600,
            settings: {
            }
          },
          {
            breakpoint: 480,
            settings: {
            }
          }
        ]
      });
      $(animation).ready(function(){
        $("#animation").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
        });
      });
});


  