// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

//var userchoice = "";
//var computerChoice = "";
//var winner = "";
//var randomNumber = 0;

//var choices = ["rock", "paper", "scissors"];

$("button").click(function() {
var userchoice = $("#input").val();
$("#userChoice").text(userchoice);

var computerChoice = Math.floor(Math.random() * 3);


if (computerChoice === 0){
    $("#computerChoice").text("rock");
} else if (computerChoice === 1){
     $("#computerChoice").text("paper");
} else if (computerChoice === 2){
     $("#computerChoice").text("scissors");
}

      if(userchoice === computerChoice){
          $("#result").text("Tie");
      } else if(userchoice === "rock" && computerChoice === "paper"){
          $("#result").text("YOU LOSE!");
      }else if(userchoice === "rock" && computerChoice === "scissors"){
          $("#result").text("YOU WIN!");
      }else if(userchoice === "paper" && computerChoice === "rock"){
          $("#result").text("YOU WIN!");
      }else if(userchoice === "paper" && computerChoice === "scissors"){
          $("#result").text("YOU LOSE!");
      }else if(userchoice === "scissors" && computerChoice === "rock"){
          $("#result").text("YOU LOSE!");
      }else if(userchoice === "scissors" && computerChoice === "paper"){
         $("#result").text("YOU WIN!");
      }
      
});
