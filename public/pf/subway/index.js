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




function slick(){
$('.slider-div').slick({
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : false, 	//무한 반복 옵션	 
    slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 4,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
    pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,		// 세로 방향 슬라이드 옵션
    prevArrow : '.prev',		// 이전 화살표 모양 설정
    nextArrow : '.next',		// 다음 화살표 모양 설정
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	//드래그 가능 여부 
    
    responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 960, //화면 사이즈 960px
            settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:3 
            } 
        },
        { 
            breakpoint: 768, //화면 사이즈 768px
            settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:2 
            } 
        }
    ]

});
}




$(function(){
    slick();
})


$(function(){
    $('.my-slider-2 > .owl-carousel').owlCarousel({
        items:1,
        navContainer: '.my-slider-2 > .custom-nav',
        loop:true
      });
    })