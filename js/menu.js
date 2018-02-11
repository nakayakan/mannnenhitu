$(function() {
  $('#menu').click(function () {
    $(this).addClass('open');
    $('#menu-container').addClass('show');
  });

  $('#menu-close').click(function () {
    $('#menu').removeClass('open');
    $('#menu-container').removeClass('show');
  });
});