$(document).ready(function() {

      // ====================================================================

      // Generate a random letter from a to z

      // Record the turn number the player is on. Start it on 1

      // Record what the player types on their keyboard

      // Once a guess has been entered, record it somewhere so the user can see their previous guesses.
      
      // Next, check whether its the correct letter


      // If it is correct:
      // Display a win message
      // change the wins section to +1 
      // Generate a new random letter from a to z and restart the game

      // If it is wrong and the player has turns left:
      // Tell the player they are wrong.
      // Allow them to enter another guess.
      // Increment the turn number by 1.

      // If it is wrong and the player has no turns left:
      // Tell the player it is game over.
      // change the losses section to +1 
      // then go back to step 1.



  // Generate a random letter from a to z
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomLetter = letters[Math.floor(Math.random() * letters.length)];
  
  //used for debuging to show the computer generated choice
  console.log(randomLetter);
  $('.computerRando').append(randomLetter);


  // user entered keyboard guess
  $(function () {
    $('#target').bind('keyup', typer);
  });

  function typer(event) {

    var newGuess = $('<div>');
    newGuess.text(event.key);
    $('.user').append(newGuess);


    // // If your pick matched the computer's pick you let them know.     
    if (newGuess === randomLetter); {
      // If the numbers match we'll celebrate the user's win.
      $('#winCounter').append(" - you win!");
    }


  }


 


// Document Ready
      // ...
});

