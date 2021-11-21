document.querySelector(".message");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const listenerOfAgain = function () {
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Comece a advinhar...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").focus();
  document.querySelector(".check").addEventListener("click", listenerOfCheck);
  document.querySelector(".check").style.cursor = "auto";
  document.querySelector(".check").style.opacity = "1.0";

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
};

const listenerOfCheck = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Nenhum numero!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textcontent = "Numero Correto!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document
      .querySelector(".check")
      .removeEventListener("click", listenerOfCheck);
    document.querySelector(".check").style.cursor = "not-allowed";
    document.querySelector(".check").style.opacity = "0.5";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".guess").focus();
      document.querySelector(".message").textContent = "Muito alto!";
      document.querySelector(".guess").value = "";
      document.querySelector(".score").textContent = score;
      score--;
      if (guess == secretNumber + 1 || guess == secretNumber + 2) {
        document.querySelector("body").style.backgroundColor = "#F15B28";
        document.querySelector(".message").textContent = "Você está quente!";
      }
    } else {
      document.querySelector(".message").textContent = "você perdeu o jogo";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#EB0004";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".message").textContent = "Muito baixo!";
      document.querySelector(".guess").value = "";
      document.querySelector(".guess").focus();
      score--;
      document.querySelector(".score").textContent = score;
      if (guess == secretNumber - 1 || guess == secretNumber - 2) {
        document.querySelector("body").style.backgroundColor = "#F15B28";
        document.querySelector(".message").textContent = "Você está quente!";
      }
    } else {
      document.querySelector(".message").textContent = "você perdeu o jogo";
      document.querySelector("body").style.backgroundColor = "#EB0004";
      document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".again").addEventListener("click", listenerOfAgain);

document.querySelector(".check").addEventListener("click", listenerOfCheck);
