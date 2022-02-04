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

class App {
  pointsPlayer1 = 0;
  pointsPlayer2 = 0;
  audioState = false;

  constructor() {
    // Button player names input
    buttonNameInput.addEventListener(
      "click",
      function () {
        player1.textContent = name1.value;
        player2.textContent = name2.value;
        this.setAudioIcon();
        this.hideNameInput();
        name1.value = name2.value = "";
      }.bind(this)
    );

    // Button Rolling Dices
    button.addEventListener("click", this.rollDices.bind(this));

    // Button reset

    buttonReset.addEventListener("click", this.reset.bind(this));

    // Button pause music

    buttonAudioControl.addEventListener("click", this.setAudioIcon.bind(this));

    // stop music when leaving browser
    document.addEventListener(
      "visibilitychange",
      this.visibilityChange.bind(this)
    );
  }

  // Dice roll

  rollDices() {
    const diceRoll = () => Math.floor(Math.random() * 6) + 1;
    const dice1 = diceRoll();
    const dice2 = diceRoll();

    dice1.src = `images/dice-${dice1}.png`;
    dice2.src = `images/dice-${dice2}.png`;

    this.pointsPlayer1 += newDice1;
    this.pointsPlayer2 += newDice2;
    this.insertScore();
  }

  insertScore() {
    // Show score
    player1Score.classList.remove("novisibility");
    player2Score.classList.remove("novisibility");

    // insert score into HTML
    player1Score.textContent = this.pointsPlayer1;
    player2Score.textContent = this.pointsPlayer2;

    if (this.pointsPlayer1 >= 20) this.showWinner(player1.textContent);
    if (this.pointsPlayer2 >= 20) this.showWinner(player2.textContent);
  }

  // Show name input field
  hideNameInput() {
    containerInput.classList.add("hidden");
    container.classList.remove("blur-out");
    buttonAudioControl.classList.remove("blur-out");
  }

  // Show winner screen
  showWinner(winner) {
    container.classList.add("blur-out");
    buttonAudioControl.classList.add("blur-out");
    containerWinner.classList.remove("hidden");

    containerWinner.querySelector("#winner").textContent = winner;

    player1Score.classList.add("novisibility");
    player2Score.classList.add("novisibility");
  }

  // Game reset

  reset() {
    this.pointsPlayer1 = this.pointsPlayer2 = 0;
    containerWinner.classList.add("hidden");
    containerInput.classList.remove("hidden");

    containerWinner.closest("p").remove();
    this.audioState = true;
    this.audioControl();
  }

  // Switches audio on/off
  audioControl() {
    if (this.audioState) {
      audio.src = "";
      this.audioState = false;
    } else {
      audio.src = "/audio/Roll.mp3";
      audio.play();
      this.audioState = true;
    }
  }
  // Changes audio icon
  setAudioIcon() {
    buttonAudioControl.firstElementChild.className = "";
    buttonAudioControl.firstElementChild.className = `fas fa-volume-${
      this.audioState ? "mute" : "up"
    }`;

    this.audioControl();
  }

  visibilityChange() {
    if (document.visibilityState === "visible") {
      this.audioState = true;
      this.audioControl();
    } else {
      this.audioState = true;
      this.audioControl();
    }
  }
}

new App();
