$(document).ready(function() {

      // VARIABLES
      // ====================================================================



$(function(){
  $('#target').bind('keyup', typer);
  });

  function typer(event) {
    var newGuess = $('<div>');
    newGuess.text(event.key);
    $('#user').append(newGuess);
    console.log(newGuess);
  }

   // Use this array to dynamically create buttons on the screen.
   var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   for (var i = 0; i < letters.length; i++); {
     console.log(letters.length);
   }








  $("#random-button").on("click", function() {

    // Create a string which will hold the lottery number
    var lottoNumber = "";

    // Then initiate a loop to generate 9 separate numbers
    for (var i = 0; i < 1; i++) {

      // For each iteration, generate a new random number between 1 and 9.
      var random = Math.floor(Math.random() * 9) + 1;

      // Take this number and then add it to the rest of the string.
      // In essence, we are iteratively building a string of numbers. (e.g. First: 1, Second: 13, Third: 135, etc.)
      lottoNumber = random + lottoNumber;

    }

    // ... and then dump the random number into our random-number div.
    $("#random-number").prepend(lottoNumber);

  });


//       // Lottery generateor


// lotteryNumbers = [];

// $("body").on("click", "#random-button", function() {
//   // for loop 9 times
//   var i;
//   for (i = 0; i < 9; i++);

// // random number 1 - 9
//   var randomnumber = Math.floor(Math.random() * 9) +1;     
//   $("#random-number").text(randomnumber);


// var newDiv = $("<random-number>");
// newDiv.html();
// $("#random-number").append(newDiv);
// });


// Document Ready
      // ...
});

