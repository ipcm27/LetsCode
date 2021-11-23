const btnRed = document.querySelector(".red");
const btnGreen = document.querySelector(".green");
const btnYellow = document.querySelector(".yellow");
const btnBlue = document.querySelector(".blue");
const buttons = [btnRed, btnGreen, btnYellow, btnBlue];

const h1selector = document.getElementById("level-title");

const redMusic = new Audio("./red.mp3");
const blueMusic = new Audio("./blue.mp3");
const yellowMusic = new Audio("./yellow.mp3");
const greenMusic = new Audio("./green.mp3");

let nomeDaCor;
let arrayComputer = [];
let arrayUser = [];
let RandomNumber;

function gerarNumero() {
  RandomNumber = Math.trunc(Math.random() * 4);
  console.log(RandomNumber);
}

function atribuirNome() {
  if ((RandomNumber = 0)) {
    nomeDaCor = "red";
    arrayColors.push(nomeDaCor);
  } else if ((RandomNumber = 1)) {
    nomeDaCor = "blue";
    arrayColors.push(nomeDaCor);
  } else if ((RandomNumber = 2)) {
    nomeDaCor = "green";
    arrayColors.push(nomeDaCor);
  } else if ((RandomNumber = 3)) {
    nomeDaCor = "yellow";
    arrayColors.push(nomeDaCor);
  }
  return nomeDaCor;
}

function playSound(nomeDaCor) {
  const audio = new Audio(`sounds/${nomeDaCor}.mp3`);
  audio.play();
}

function switchButton() {
  if ((RandomNumber = 0)) {
    btnRed.classList.toggle("pressed");
  } else if ((RandomNumber = 1)) {
    btnBlue.classList.toggle("pressed");
  } else if ((RandomNumber = 2)) {
    btnGreen.classList.toggle("pressed");
  } else if ((RandomNumber = 3)) {
    btnYellow.classList.toggle("pressed");
  }
}

function addButtonToArray() {
  btnRed.addEventListener("click", (event) => {
    arrayUser.push(event.target.id);
  });

  btnBlue.addEventListener("click", (event) => {
    arrayUser.push(event.target.id);
  });

  btnGreen.addEventListener("click", (event) => {
    arrayUser.push(event.target.id);
  });

  btnYellow.addEventListener("click", (event) => {
    arrayUser.push(event.target.id);
  });
}

function start() {
  //   h1selector.textContent("lvl 1");
}

start();
