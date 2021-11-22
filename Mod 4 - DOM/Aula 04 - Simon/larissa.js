let level = 0;
let started = false;
let coresBotoes = ["red", "blue", "green", "yellow"];
let coresAleatoriasGeradas = [];
let coresEscolhidas = [];

document.addEventListener("keydown", (event) => {
  if (event && !started) {
    document.getElementById("level-title").textContent = `Level ${level}`;
    proximaSequencia();
    started = true;
  }
});

document.querySelectorAll(".btn").forEach((btnEl) => {
  btnEl.addEventListener("click", function (event) {
    console.log(event);

    const corEscolhida = event.target.id;
    coresEscolhidas.push(corEscolhida);

    animarBotao(corEscolhida);
    playSom(corEscolhida);

    // checkar se a resposta está correta
    checkResposta(coresEscolhidas.length - 1);
  });
});

function checkResposta(coresEscolhidasTam) {
  if (
    coresAleatoriasGeradas[coresEscolhidasTam] ===
    coresEscolhidas[coresEscolhidasTam]
  ) {
    if (coresAleatoriasGeradas.length === coresEscolhidas.length) {
      setTimeout(function () {
        proximaSequencia();
      }, 1000);
    }
  } else {
    playSom("wrong");

    document.querySelector("body").classList.add("game-over");
    document.getElementById("level-title").textContent =
      "Game Over!!! Pressione qualquer tecla para recomeçar";

    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 200);

    recomecarJogo();
  }
}

function proximaSequencia() {
  coresEscolhidas = [];
  level++;
  document.getElementById("level-title").textContent = `Level ${level}`;

  const randomNumber = Math.floor(Math.random() * 4);

  const corAleatoriaGerada = coresBotoes[randomNumber];

  coresAleatoriasGeradas.push(corAleatoriaGerada);

  // criar animação de piscar
  animarBotao(corAleatoriaGerada);
  // criar som
  playSom(corAleatoriaGerada);
}

function animarBotao(corAleatoriaGerada) {
  document.getElementById(corAleatoriaGerada).classList.add("pressed");

  setTimeout(function () {
    document.getElementById(corAleatoriaGerada).classList.remove("pressed");
  }, 100);
}

function playSom(corAleatoriaGerada) {
  const audio = new Audio(`sounds/${corAleatoriaGerada}.mp3`);

  audio.play();
}

function recomecarJogo() {
  level = 0;
  coresAleatoriasGeradas = [];
  started = false;
}
