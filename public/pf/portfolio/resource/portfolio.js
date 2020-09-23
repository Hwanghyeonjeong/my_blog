$(function() {
$('.slider-div').slick({
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : false, 	//무한 반복 옵션
    slidesToShow : 2,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
    prevArrow : '.prev',		// 이전 화살표 모양 설정
    nextArrow : '.next',		// 다음 화살표 모양 설정
    draggable : true, 	//드래그 가능 여부
});

})