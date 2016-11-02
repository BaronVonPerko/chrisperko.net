$(document).ready(function() {

  $(window).scroll(function() {
    var pxFromTop = $('body').scrollTop();
    var bgPos = pxFromTop * 0.5;
    var pos = '0 ' + bgPos + 'px';
    
    $('body').css({'background-position' : pos});
    $('header').css({'background-position' : pos});
  });

});
