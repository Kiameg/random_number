"use strict";

console.log(Math.floor(Math.random() * 100));
const generateButton = document.querySelector(".button");
const generateNumber = document.querySelector(".number");

generateButton.addEventListener("click", generateRandomnumber);

function generateRandomnumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  generateNumber.textContent = randomNumber;
  console.log(generateRandomnumber);
}
