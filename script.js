"use strict";

const container = document.querySelector(".container");
const button = document.querySelector(".btn-roll");
const player1Score = document.querySelector(".player1 .points");
const player2Score = document.querySelector(".player2 .points");
const player1 = document.querySelector(".player1 .name");
const player2 = document.querySelector(".player2 .name");
const dice1 = document.querySelector(".player1 .dice-image");
const dice2 = document.querySelector(".player2 .dice-image");
const buttonNameInput = document.querySelector(
  ".container-input .btn-dice-icon "
);
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");
const audio = document.getElementById("BornToRoll");
const containerInput = document.querySelector(".container-input");
const containerWinner = document.querySelector(".container-winner");
const winnerName = document.querySelector("#winner");
const buttonReset = document.querySelector(".reset");
const buttonAudioControl = document.querySelector(".audio-control");

// Show score

// Dice roll

const diceRoll = () => Math.floor(Math.random() * 6) + 1;

// Change dices and display

let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let audioState = true;

const rollDices = () => {
  const newDice1 = diceRoll();
  const newDice2 = diceRoll();

  dice1.src = `images/dice-${newDice1}.png`;
  dice2.src = `images/dice-${newDice2}.png`;

  pointsPlayer1 += newDice1;
  pointsPlayer2 += newDice2;

  insertScore();
};

const insertScore = function () {
  // Show score
  player1Score.classList.remove("novisibility");
  player2Score.classList.remove("novisibility");

  // insert score into HTML
  player1Score.textContent = pointsPlayer1;
  player2Score.textContent = pointsPlayer2;

  if (pointsPlayer1 >= 20) showWinner(player1.textContent);
  if (pointsPlayer2 >= 20) showWinner(player2.textContent);
};

const hideNameInput = function () {
  containerInput.classList.add("hidden");
  container.classList.remove("blur-out");
};

const showWinner = function (winner) {
  container.classList.add("blur-out");
  containerWinner.classList.remove("hidden");

  containerWinner.insertAdjacentHTML(
    "afterbegin",
    `
        <p>
          Yo, <br />
          Homie <br />
          ${winner}<br />
          wins<br />
          <br>
          🎲 🎲 🎲
        </p>
        `
  );

  player1Score.classList.add("novisibility");
  player2Score.classList.add("novisibility");
};

// Game reset

const reset = function () {
  pointsPlayer1 = pointsPlayer2 = 0;
  console.log(pointsPlayer2);
  containerWinner.classList.add("hidden");
  containerInput.classList.remove("hidden");

  containerWinner.querySelector("p").remove();
  audioState = true;
  audioControl();
};

const audioControl = function () {
  if (audioState) {
    audio.src = "";
    audioState = false;
  } else {
    audio.src = "/audio/Roll.mp3";
    audio.play();
    audioState = true;
  }
};

const audioButton = function () {
  buttonAudioControl.firstElementChild.className = "";
  buttonAudioControl.firstElementChild.className = `fas fa-volume-${
    audioState ? "up" : "mute"
  }`;

  audioControl();
};

// Event Listener

// Button player names input
buttonNameInput.addEventListener("click", function () {
  player1.textContent = name1.value;
  player2.textContent = name2.value;
  audio.src = "/audio/Roll.mp3";
  audio.play();
  hideNameInput();
  name1.value = name2.value = "";
});

// Button Rolling Dices
button.addEventListener("click", rollDices);

// Button reset

buttonReset.addEventListener("click", reset);

// Button pause music

buttonAudioControl.addEventListener("click", audioButton);
