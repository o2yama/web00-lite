$(function () {

  $('#button').click(function () {
    $('#modal-wrapper').fadeIn('fast');
    $('#modal').css({ 'opacity': 1, transform: 'translate(0,0)'});
  });
 
  $('#modal-wrapper').click(function () {
    $('#modal-wrapper').fadeOut('fast');
    $('#modal').css({ 'opacity': 0, transform: 'translateY(-20px)'});
  });

  $('#modal-close').click(function () {
    $('#modal-wrapper').fadeOut('fast');
    $('#modal').css({ 'opacity': 0, transform: 'translateY(-20px)'});
  });
});

