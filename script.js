"use strict";

const container = document.querySelector(".container");
const button = document.querySelector("button");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

// Init

const getPlayersNames = function () {
  // const player1Name = prompt("🎲 Name Player 1 🎲");
  // const player2Name = prompt("🎲 Name Player 2 🎲");
  // console.log("!");
  // if (!player1Name || !player2Name) {
  //   alert("🎲 You must enter a name! 🎲");
  // }
};

const init = function () {
  getPlayersNames();
};

init();

// Dice roll

const diceRoll = () => Math.floor(Math.random() * 6) + 1;

// Change dices and display

const changeDices = () => {
  const newDice1 = diceRoll();
  const newDice2 = diceRoll();

  dice1.src = `images/dice-${newDice1}.png`;
  dice2.src = `images/dice-${newDice2}.png`;
};

button.addEventListener("click", function (e) {
  dice1.classList.remove("hidden");
  changeDices();
});
