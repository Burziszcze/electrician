$(function() {
  // document ready!
  console.log("ready!");

  $('.getYear').append(function() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
  });
  // scroll to about section
  $("#about-button").click(function() {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
  });
  $("#works-button").click(function() {
    $('html, body').animate({
      scrollTop: $('#works').offset().top
    }, 1000);
  });
  // scrollTop function
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
      $('.scrollTop').fadeIn(500); // Fade in the arrow
    } else {
      $('.scrollTop').fadeOut(500); // Else fade out the arrow
    }
  });
  $('.scrollTop').click(function() { // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 500);
  });

  // script ending
});
