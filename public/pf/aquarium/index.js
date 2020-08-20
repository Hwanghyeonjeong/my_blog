$(function() {
    new fullpage('#fullpage', {
        sectionsColor: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)', '#000000', '#000000'],
        verticalCentered: false,
        scrollBar: false,
        anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4','anchor5'],
        menu: '#menu',
        onLeave: function(origin, destination, direction){
          $('html').attr('data-fullpage-anchor', destination.anchor);
        }
      });
    })
    