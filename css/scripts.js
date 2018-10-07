// Basic Global Variable info
var wins = 0;
var losses = 0;
var guessesMade = [];
var guessesLeft = 9;

//When the user presses a key, it will run the following function://
document.onkeyup = function (event) {

    //Determines which key was pressed.Capture the key pressed by user, stores it in userGuess variable.//
    var userGuess = event.key;

    //This will store and display the user's choice of letters. It will push it into guessesMade array.//
    guessesMade.push(userGuess);
    

 // Generate a random letter from a to z
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var randomLetters = letters[Math.floor(Math.random() * letters.length)];
  //used for debuging to show the computer generated choice
  console.log(randomLetters);


    // Win Condition: If user guesses correctly, wins go up 1 point, and the game is reset.//
    if (randomLetters === userGuess) {
        wins++;
        gameReset();

      $('#winCounter').text("CONGRATULATIONS YOU GUESSED IT RIGHT!");

    }
    //Incorrect Guess: If user guesses wrong, guessesLeft should go down by 1 point.// 
    else {
        guessesLeft--;

      $('#winCounter').text("OOPS SORRY!! TRY ANOTHER LETTER")
      
    }

    //Game Over Condition: If guessesLeft go down to zero, losses go up 1 point, and the game is reset.//
    if (guessesLeft === 0) {
        losses++;
        gameReset();

      $('#winCounter').text("GAME OVER! Guess a New Letter and Start Over");

      
    }
    //get elements by id in the html//
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById('guessesMade').innerHTML = guessesMade;
}

//This is the function to reset the two variables below.//
var gameReset = function () {
    guessesMade = [];
    guessesLeft = 9;
}

