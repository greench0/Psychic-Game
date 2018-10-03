$(document).ready(function() {

      // VARIABLES
      // ====================================================================

$(function( ){
  $('#target').bind('keyup', typer);
  });

  function typer(event)
  {
    $('#user').text('Your Guess: '
   + String.fromCharCode(
   event.keyCode));
  }

  

      // Lottery generateor


lotteryNumbers = [];

$("body").on("click", "#random-button", function() {
  // for loop 9 times
  var i;
  for (i = 0; i < 9; i++);

// random number 1 - 9
  var randomnumber = Math.floor(Math.random() * 9) +1;     
  $("#random-number").text(randomnumber);


var newDiv = $("<random-number>");
newDiv.html();
$("#random-number").append(newDiv);
});








// Document Ready
      // ...
});

