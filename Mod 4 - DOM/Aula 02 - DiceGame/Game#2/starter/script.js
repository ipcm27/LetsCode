const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnHow = document.querySelector(".btn--how");
const btnClose = document.querySelector(".close-modal");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
playing = true;

const btnsOpenModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
btnHow.addEventListener("click", btnsOpenModal);

const btnCloseModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnClose.addEventListener("click", btnCloseModal);

const switchPlayer = function () {
  if (playing) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");
  }
};

const rollDice = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
};
btnRoll.addEventListener("click", rollDice);

const holdPoints = function () {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 20) {
    diceEl.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    btnRoll.removeEventListener("click", rollDice);
    btnRoll.style.cursor = "not-allowed";
    btnHold.removeEventListener("click", holdPoints);
    btnHold.style.cursor = "not-allowed";
    currentScore = 0;
    scores = scores.map((e) => e * 0);
  } else {
    switchPlayer();
  }
};
btnHold.addEventListener("click", holdPoints);

btnNew.addEventListener("click", function () {
  btnRoll.addEventListener("click", rollDice);
  btnRoll.style.cursor = "auto";
  btnHold.addEventListener("click", holdPoints);
  btnHold.style.cursor = "auto";
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
});
