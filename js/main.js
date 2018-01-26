$(function() {

  console.log("ready!");
  $('.getYear').append(function() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
  });

});
