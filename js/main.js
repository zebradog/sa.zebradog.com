(function($) {$(function() {

  var $wrapper = $('#wrapper');
  var $footer = $('#footer');

  $(window).resize(resize);

  resize();

  function resize(){
     var h = $wrapper.height() + $footer.height();
     if(window.innerHeight < h){
        $footer.css({position:'relative'});
     }else{
        $footer.css({position:'absolute'});
     }
  }

});})(jQuery);
