function SliderBox1__init() {
    $('.slider-box-1 .slider-box-1-nav-wrap > .slider-box-1-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-box-1 .slider-box-1-main-wrap > .slider-box-1-main',
      dots: false,
      arrows: true,
      draggable: false,
      centerMode: true,
      focusOnSelect: true,
      prevArrow: $('.slider-box-1 .prev'),
      nextArrow: $('.slider-box-1 .next')
    });
  
    $('.slider-box-1 .slider-box-1-main-wrap > .slider-box-1-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: false,
      asNavFor: '.slider-box-1 .slider-box-1-nav-wrap > .slider-box-1-nav'
    });
  
    $('.slider-box-1 .slider-box-1-main-wrap > .slider-box-1-main').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      var dataNo = $('.slider-box-1 .slider-box-1-main-wrap > .slider-box-1-main .slick-current.slick-active').eq(0).attr('data-no');
      $('.slider-box-1 .slick-counter > span:first-child').html(dataNo);
    });
  }
  
  $(function () {
    SliderBox1__init();
  })

  
