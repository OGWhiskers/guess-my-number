"use strict";

// Declaration

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

// Function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const backgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// Main code
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  if (!guess) {
    displayMessage("No Number!");
  }
  // Wins game
  else if (guess === secretNumber) {
    displayMessage("Great guess !!!");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    backgroundColor("#2ff20c");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // Guess too high
  else if (guess !== secretNumber) {
    if (score > 0) {
      score--;
      displayMessage(guess > secretNumber ? "Too High !!!" : "Too Low !!!");
      document.querySelector(".score").textContent = score;
    } else if (score <= 0) {
      displayMessage("You have lost. Try Again");
      backgroundColor("#eb4634");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  //document.querySelector();

  // BG Color

  backgroundColor("#222");

  //Message

  displayMessage("Start guessing...");
  //Input

  document.querySelector(".guess").value = "";

  // ?

  document.querySelector(".number").textContent = "?";

  // score
  score = 20;
  document.querySelector(".score").textContent = score;

  // Secret Number New
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
