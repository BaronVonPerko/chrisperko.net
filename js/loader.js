$(window).on('load', function() {

  $('.load-spinner').addClass('explode');

  setTimeout(function() {
    $('.load-wrapper').addClass('hidden');
    $('.site-wrapper').addClass('loaded');
  }, 500);

});
