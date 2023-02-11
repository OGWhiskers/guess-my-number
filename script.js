"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Great guess !!!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High !!!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low !!!";
  }
});
