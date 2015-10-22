
$(window).scroll(function() {

  console.log($(window).scrollTop());

  if($(window).scrollTop() > $('header').outerHeight()) {
    $('.item').removeClass('hidden');
  }
});
