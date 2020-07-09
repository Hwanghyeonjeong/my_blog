$('.slider-1 > .owl-carousel').owlCarousel({
    responsive:{
        0:{
            items:4
        }
    },
    margin:100,
    loop:true,
    dots:false,
    nav:true,
    navText: ['<div>좌</div>', '<div>우</div>'],
    navContainer: '.slider-1 .nav',
});