$(document).ready(function () {


  // ====================================================================

  // 1. Generate a random letter from a to z

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
  // Reduce the Guesses by 1

  // If it is wrong and the player has no turns left:
  // Tell the player it is game over.
  // change the losses section +1 
  // then go back to step 1. 




  // Generate a random letter from a to z
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomLetters = letters[Math.floor(Math.random() * letters.length)];
  //used for debuging to show the computer generated choice
  console.log(randomLetters);

  // Basic Variable info
  var wins = 0;
  var losses = 0;
  var guess = 9;


  // number guessed by user    
  document.getElementById("submitguess").onclick = function () {
    var userGuess = document.getElementById("guessField").value;
    console.log(userGuess);
    $(".guessX").append(userGuess + ", ");


    // win - lose: win condition
    if (randomLetters == userGuess) {
      $('#winCounter').text("CONGRATULATIONS You Guessed it Right!");
      wins++;
      $(".win").text(wins);
    }


    // win - lose: Game Over
    else if (guess === 0) {
      $('#winCounter').text("Game Over!");
      losses++;
      $(".loss").text(losses);
    }

    // win - lose: else try and guess again
    else {
      guess--;
      $('#winCounter').text("OOPS SORRY!! TRY AGAIN")
      $(".guessleft").text(guess);
    }



    // number guessed by user   -end   
  }










  // $(document).ready(function () {
  // ...
});

