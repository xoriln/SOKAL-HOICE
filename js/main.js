$(function(){
    $('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./images/next-arrow.svg" alt="next arrow"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./images/prev-arrow.svg" alt="prev arrow"></button>',
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
});