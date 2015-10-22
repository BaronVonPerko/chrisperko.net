
$(window).scroll(function() {
  if($(window).scrollTop() > $('header').outerHeight()) {
    $('.item').removeClass('hidden');
  }
});
