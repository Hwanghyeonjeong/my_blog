function Slider1__init() {
    $('.slider > .side-bars > div').click(function() {
      var $this = $(this);
      var $slider = $this.closest('.slider');
      var $current = $slider.find(' > .slides > .active'); // 9
      var $post;
      
      var isLeft = $this.index() == 0;
      
      if ( isLeft ) {
        $post = $current.prev(); // 
        if ( $post.length == 0 ) {
          $post = $slider.find(' > .slides > :last-child'); // 11
        }
      }
      else {
        $post = $current.next();
        if ( $post.length == 0 ) {
          $post = $slider.find(' > .slides > :first-child'); // 9
        }
      }
      
      $current.removeClass('active');
      $post.addClass('active');
    });
  }
  
  $(function(){
    Slider1__init();
  });
  
  function slideBar__move() {
      function a() {
          $('.slider > .side-bars > div:last-chlid').click();
      }

      setInterval(a,5000);
  }

  $(function(){
      slideBar__move();
  });