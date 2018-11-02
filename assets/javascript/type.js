//Parallax functionality
$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function () {

  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollUp').fadeIn();
    } else {
      $('.scrollUp').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollUp').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

});
