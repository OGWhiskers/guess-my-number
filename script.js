"use strict";

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Great guess !!!";
    document.querySelector(".score").textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector(".message").textContent = "Too High !!!";
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector(".message").textContent = "Too Low !!!";
      document.querySelector(".score").textContent = score;
    }
  }
});
