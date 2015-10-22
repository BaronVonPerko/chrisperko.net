$(document).ready(function() {
  $('img').click(function() {
    var link = $(this).data('link');
    window.open(link, '_blank');
  });

});
