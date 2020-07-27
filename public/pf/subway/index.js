/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if ( !$node.attr('data-active-on-visible-diff-y') ) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if ( !$node.attr('data-active-on-visible-delay') ) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.actived)').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));

        var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

        if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
            $node.addClass('actived');

            setTimeout(function() {
                $node.addClass('active');
                if ( window[callbackFuncName] ) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        }
    });
}

$(function() {
    ActiveOnVisible__init();
})


$(function(){
$('.my-slider-1 > .owl-carousel').owlCarousel({
    items:1,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.my-slider-1 > .custom-nav',
    loop:true
  });
})

$(function(){
    $('.my-slider-2 > .owl-carousel').owlCarousel({
        items:1,
        navContainer: '.my-slider-2 > .custom-nav',
        loop:true
      });
    })

    


















$(function(){
    $('.tab-box > .head > ul > li').click(function() {
        var $clickedLi = $(this);
        var index = $clickedLi.index();
        
        $clickedLi.siblings('.active').removeClass('active');
        $clickedLi.addClass('active');
        
        var $tabBox = $clickedLi.closest('.tab-box');
        
        $tabBox.find('.body > ul > li').removeClass('active');
        $tabBox.find('.body > ul > li').eq(index).addClass('active');
    }); // 메뉴 이름 클릭
})
    

$(function(){
    $('.carousel-1 > .owl-carousel').owlCarousel({
        navSpeed:150,
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        slideBy:4,
        mouseDrag:false,
        navText:['<div class="left-btn"></div>', '<div class="right-btn"></div>'],
        responsive:{
            0:{
                items:4
            }
        }
    });
}) // 메뉴 슬라이드
    


$(function(){
    $('.carousel-1 > .owl-carousel .owl-item').mouseenter(function() {
        var eventItem = this;
        var $carousel = $(this).closest('.carousel-1');
        
        for ( var i = 1; i <= 4; i++ ) {
            $carousel.removeClass('carousel-item-' + i + '-hover');
        }
        
        $carousel.find('.owl-item.active').each(function(index, node) {
            if ( eventItem == node ) {
                $carousel.addClass('carousel-item-' + (index + 1) + '-hover');
                
                return false;
            }
        });
    });
}) // 메뉴 마우스 오버
$(function(){
    $('.carousel-1 > .owl-carousel .owl-item').mouseleave(function() {
        var $carousel = $('.carousel-1');
        
        for ( var i = 1; i <= 4; i++ ) {
            $carousel.removeClass('carousel-item-' + i + '-hover');
        }
    });
})
    
$(function(){
    $('.carousel-1').mouseleave(function() {
        var $carousel = $(this);
        
        for ( var i = 1; i <= 4; i++ ) {
            $carousel.removeClass('carousel-item-' + i + '-hover');
        }
    });
}) // 메뉴 마우스 리브
$(function(){
    $('.head > ul > li').click(function () {
        $click_menu = $(this);
        
        $click_menu.addClass('active');
    });
}) // 메뉴 이름 클릭 색깔
    