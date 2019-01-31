$(window).load(function() {
  $('#module').hover(function() {
    $(this).find('#description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});