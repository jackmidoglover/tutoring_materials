var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessedSoFar = []; 
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computersChoice; 

function start(){
    computersChoice = letters[Math.floor(Math.random() * letters.length)];
    guessesLeft = 5; 
    console.log("Game started");
    psychic();
}

function psychic(){
    console.log("psychic started"); 
    document.onkeypress = function(game){
        var userGuess = game.key; 

       if (guessesLeft > 0) {
        if (userGuess === computersChoice){ 
            wins++;
            document.getElementById("wins").innerText = wins; 
            start(); 
        }
        else {
            guessesLeft--; 
            guessedSoFar.push(userGuess); 
            document.getElementById("left").innerHTML = guessesLeft;
            document.getElementById("guesses").innerHTML = guessedSoFar;
            start();
        }
       } 
       else {
           losses++; 
           document.getElementById("losses").innerHTML = losses; 
           start();
       }
           
    }
}

start();