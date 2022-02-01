"use strict";

const button = document.querySelector("button");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

// const container = document.querySelector("");

const diceRoll = () => Math.floor(Math.random() * 6) + 1;

button.addEventListener("click", function (e) {
  insertNewDice();
});

const insertNewDice = function () {
  document.getElementById("BornToRoll").play();
  document
    .querySelectorAll(".dice-image")
    .forEach((e) => e.classList.add("hidden"));
  document.querySelectorAll(".dice-image").forEach((e) => e.remove());
  player1.insertAdjacentHTML(
    "afterbegin",
    `
    <img class="dice-image" src="images/dice-${diceRoll()}.png" /> 
    `
  );
  player2.insertAdjacentHTML(
    "afterbegin",
    `
        <img class="dice-image" src="images/dice-${diceRoll()}.png" /> 
        `
  );
};
