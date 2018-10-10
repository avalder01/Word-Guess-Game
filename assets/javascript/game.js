
// Creepy Greeting
alert("welcome");
alert("we've been expecting you");

var hello = prompt("What's your name?");
if (hello) {
    confirm( "hello (insert name here) Would you like to play a game?");
}

// replace (insert name here) with user imput
// link sound bite of some thunder and user hits ok.
// End Creepy Greeting

// Game code

// Create an array of words
var words = [
    "belladona",
    "cauldron",

// can't figure out how to show this on the page and not an alert
    ];
    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    
    // create remaining letters 
        // letter bank so user can see used letters.
        // create guess counter 

    //create a hint if word is not guessed in 4 tries 


    //congratulations/ end of game
        // would like to show an image of the word when winner guess the answer
    



