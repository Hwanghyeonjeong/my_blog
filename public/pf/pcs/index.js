
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