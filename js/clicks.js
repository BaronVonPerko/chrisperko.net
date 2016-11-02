$(document).ready(function() {

  var items = $('#experience .item');

  $('#experience .item').click(function() {
    var isSelecting = false;
    var self = $(this);

    if(!self.hasClass('selected')) {
        isSelecting = true;
    }

    self.toggleClass('selected');
    if(isSelecting) {
      window.setTimeout(function() {
        self.find('ul').addClass('shown');
      }, 500);
    } else {
      self.find('ul').removeClass('shown');
    }

    for(var i=0; i<items.length; i++) {
      if(!$(items[i]).hasClass('selected') && isSelecting) {
        $(items[i]).addClass('hidden');
      }
      else {
        $(items[i]).removeClass('hidden');
      }
    }
  });
});
