"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent= 13;
// document.querySelector('.score').textContent= 22;

// document.querySelector('.guess').value= 23;
// console.log(document.querySelector('.guess').value);

// The function contains the code that we want to preform whenever the event happens.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there's no value, we then can print something to the console as a response.
  // IF statement only executes when the condition is true
  if (!guess) {
    document.querySelector(".message").textContent = "NO number";
  }
});
