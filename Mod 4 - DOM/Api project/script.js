// tive que usar Jquery para limpar os Selects pois só consegui assim

const brandSelectList = document.getElementById("brandSelect");
const modelSelectList = document.getElementById("modelSelect");
const yearSelectList = document.getElementById("yearSelect");

const valor = document.getElementById("Valor");
const marca = document.getElementById("Marca");
const modelo = document.getElementById("Modelo");
const ano = document.getElementById("Ano");
const combustível = document.getElementById("Combustível");

const button = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");

const carrosInput = document.getElementById("carrosInput");
const motosInput = document.getElementById("motosInput");
const caminhoesInput = document.getElementById("caminhoesInput");

const radios = [carrosInput, motosInput, caminhoesInput];

let inputTypeVehicle;
let idSelectedBrand, idSelectedModel, idSelectedYear;

let arrayCodigosAnos = [];
let nome = [];
let codigo = [];
let modelos = [];

let printValue, printBrand, printModel, printYear, printGas;

radios.map((e) => {
  e.addEventListener("click", () => {
    inputTypeVehicle = e.value;

    getBrand();
    displayBrand();
  });
});

///////////////////////////// MARCAS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const getBrand = async () => {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/${inputTypeVehicle}/marcas`
  );

  const data = response.json();

  return data;
};

const displayBrand = async () => {
  const options = await getBrand();
  $("option").detach();

  options.map((option) => {
    let { nome, codigo } = option;

    let newOption = document.createElement("option");
    newOption.className = "select-items";

    newOption.innerHTML = option.nome;

    brandSelectList.appendChild(newOption);
  });
};

const getSelectedBrand = async () => {
  const arrayBrands = await getBrand();

  const selectedBrand = document.getElementById("brandSelect").value;

  arrayBrands.map(function (e) {
    if (e.nome == selectedBrand) {
      idSelectedBrand = e.codigo;
    }
  });

  return idSelectedBrand;
};

///////////////////////////// MODELOS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const getModel = async () => {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/${inputTypeVehicle}/marcas/${idSelectedBrand}/modelos`
  );

  const data = response.json();

  return data;
};

const displayModel = async function () {
  const modelsObj = await getModel();

  ({ modelos, codigo } = modelsObj);

  $("option").detach();

  modelos.map(function (option) {
    let { nome } = option;

    let newOption = document.createElement("option");
    newOption.className = "select-items";

    newOption.innerHTML = option.nome;

    modelSelectList.appendChild(newOption);
  });
};

const getSelectedModel = async () => {
  const arrayModels = await getModel();

  const selectedModel = document.getElementById("modelSelect").value;

  //array é um objeto com  dois arrays: anos e modelos. cada um possui nome e codigo

  let { anos: anosArray, modelos: modelosArray } = arrayModels;

  anosArray.map((e) => arrayCodigosAnos.push(e));

  modelosArray.map(function (e) {
    if (e.nome == selectedModel) {
      idSelectedModel = e.codigo;
    }
  });

  return idSelectedModel;
};

///////////////////////////// ANOS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const getYear = async () => {
  await getSelectedModel();
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/${inputTypeVehicle}/marcas/${idSelectedBrand}/modelos/${idSelectedModel}/anos`
  );

  const data = response.json();

  return data;
};

const displayYear = async function () {
  const yearArray = await getYear();

  $("option").detach();

  yearArray.map(function (option) {
    let { nome, codigo } = option;

    let newOption = document.createElement("option");
    newOption.className = "select-items";

    newOption.innerHTML = option.nome;

    yearSelectList.appendChild(newOption);
  });
};

const getSelectedYear = async function () {
  await displayYear();

  const getSelectedYear = document.getElementById("yearSelect").value;

  arrayCodigosAnos.map(function (e) {
    if (e.nome == getSelectedYear) {
      idSelectedYear = e.codigo;
    }
  });

  return idSelectedYear;
};

///////////////////////////// VALOR \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

async function getValue() {
  await getSelectedYear();

  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/${inputTypeVehicle}/marcas/${idSelectedBrand}/modelos/${idSelectedModel}/anos/${idSelectedYear}`
  );

  const data = response.json();

  return data;
}

const displayValue = async function () {
  const valueObj = await getValue();

  printValue = document.createElement("h6");
  printBrand = document.createElement("h6");
  printModel = document.createElement("h6");
  printYear = document.createElement("h6");
  printGas = document.createElement("h6");

  printValue.innerHTML = valueObj.Valor;
  printBrand.innerHTML = valueObj.Marca;
  printModel.innerHTML = valueObj.Modelo;
  printYear.innerHTML = valueObj.AnoModelo;
  printGas.innerHTML = valueObj.Combustivel;

  valor.appendChild(printValue);
  marca.appendChild(printBrand);
  modelo.appendChild(printModel);
  ano.appendChild(printYear);
  combustível.appendChild(printGas);
};

///////////////////////////// EVENT LISTNERS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

button.addEventListener("click", function () {
  displayModel();
});

button2.addEventListener("click", function () {
  displayYear();
});

button3.addEventListener("click", function () {
  displayValue();
});
