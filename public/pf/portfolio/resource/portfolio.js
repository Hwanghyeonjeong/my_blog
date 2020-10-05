$(function() {
function SliderBox1__init() {
  $('.slider-box-1 .slider-box-1-nav-wrap > .slider-box-1-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-box-1 .slider-box-1-main-wrap > .slider-box-1-main',
    dots: false,
    arrows: true,
    draggable:false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: $('.slider-box-1 .prev'),
    nextArrow: $('.slider-box-1 .next'),
    onAfterChange: function(e){
      alert('hi');
      $('.slider-box-1 .slick-counter').html(e.currentSlide + 1 +' / '+e.slideCount);
    }
  });

  $('.slider-box-1 .slider-box-1-main-wrap > .slider-box-1-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:false,
    arrows: false,
    asNavFor: '.slider-box-1 .slider-box-1-nav-wrap > .slider-box-1-nav'
  });
}

SliderBox1__init();
})