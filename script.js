"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }
  // Wins game
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Great guess !!!";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#2ff20c";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // Guess too high
  else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector(".message").textContent = "Too High !!!";
      document.querySelector(".score").textContent = score;
    }
  }
  // Guess too low
  else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector(".message").textContent = "Too Low !!!";
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //document.querySelector();

  // BG Color

  document.querySelector("body").style.backgroundColor = "#222";

  //Message

  document.querySelector(".message").textContent = "Start guessing...";
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
