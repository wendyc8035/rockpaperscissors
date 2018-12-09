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

var computerchoice = Math.floor(Math.random() * 3);


if (computerchoice === 0){
    $("#computerChoice").text("paper");
} else if (computerchoice === 1){
     $("#computerChoice").text("rock");
} else if (computerchoice === 2){
     $("#computerChoice").text("scissors");
}
      if(userchoice === computerchoice){
          $("#result").text("Tie");
      } else if(userchoice === "rock" && computerchoice === "paper"){
       $("#result").html("YOU LOSE!");
       }else if(userchoice === "rock" && computerchoice === "scissors"){
         $("#result").text("YOU WIN!");
      }else if(userchoice === "paper" && computerchoice === "rock"){
          $("#result").text("YOU WIN!");
      }else if(userchoice === "paper" && computerchoice === "scissors"){
          $("#result").text("YOU LOSE!");
      }else if(userchoice === "scissors" && computerchoice === "rock"){
          $("#result").text("YOU LOSE!");
      }else if(userchoice === "scissors" && computerchoice === "paper"){
         $("#result").text("YOU WIN!");
      }
   
 
});








