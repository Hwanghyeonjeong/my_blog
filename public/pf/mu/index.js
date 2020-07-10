
$(function(){
    $('.slider-1 > .owl-carousel').owlCarousel({
        responsive:{
            0:{
                items:4
            }
        },
        margin:250,
        loop:true,
        dots:false,
        nav:true,
        navText: ['<i class="fas fa-chevron-left bd-1"></i>', '<i class="fas fa-chevron-right bd-1"></i>'],
        navContainer: '.slider-1 .nav',
    });
})