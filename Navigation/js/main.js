$(function(){
  var $creeper = $('nav>span');
  $creeper.moveTo = function($target) {
    $creeper.stop().animate({
      width:'+='+($target.innerWidth()-$creeper.width())+'px',
      left:'+='+($target.position().left-$creeper.position().left)+'px'
    });
  };
  $creeper.reset = function() {
    $creeper.stop().animate({ width:'0px', left:'0px' });
  }
  $('#links>a').hover(
    function(e){ $creeper.moveTo($(e.target)); },
    function(e){ $creeper.reset(); }
  );
});
