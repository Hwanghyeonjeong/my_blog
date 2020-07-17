
$(function(){
    $('.my-slider-1 > .owl-carousel').owlCarousel({
        items:1,
        nav: true,
        navText: [
          '<img style="transform: rotate(-180deg);" src="https://hwanghyeonjeong.github.io/img1/pf/pcs/ico_slick_button.png" alt="">',
          '<img src="https://hwanghyeonjeong.github.io/img1/pf/pcs/ico_slick_button.png" alt="">'
        ],
        navContainer: '.my-slider-1 > .custom-nav',
        loop:true
      });
})


function scrollT(){
  $(window).scroll(function(){
    $thisSt = $(this).scrollTop();

    if( $thisSt > 50 ) {
      $('.top-bar').addClass('active');
    }
    else {
      $('.top-bar').removeClass('active');
    }
  })
}

function contClick__init(){
  var topCont = $('.top-bar > .cont');

  topCont.click(function(){
    if (topCont.hasClass('active')) {
      topCont.removeClass('active');
    }
    else {
      topCont.addClass('active');
    }
  });
}







$(function(){
  scrollT();
  contClick__init();
})
