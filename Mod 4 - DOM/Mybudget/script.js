// SELECT ELEMENTS
const balanceElement = document.querySelector(".balance .value");
const incomeTotalElement = document.querySelector(".income-total");
const outcomeTotalElement = document.querySelector(".outcome-total");

const incomeElement = document.querySelector("#income");
const expenseElement = document.querySelector("#expense");
const allElement = document.querySelector("#all");

const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");

const wishList = document.querySelector("#wish .list");

// SELECT BTNS
const expenseBtn = document.getElementById("expenseBtn");
const incomeBtn = document.getElementById("incomeBtn");
const allBtn = document.getElementById("allBtn");

// INPUT BTS
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

const addWish = document.querySelector(".addWish");
const wishTitle = document.getElementById("wish-title-input");
const wishAmount = document.getElementById("wish-amount-input");

//Variables
let ENTRY_LIST;
let WISH_LIST;
let balance = 0,
  income = 0,
  outcome = 0;
const Delete = "delete";
const Edit = "edit";

//LOCALSTORAGE
ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
WISH_LIST = JSON.parse(localStorage.getItem("wish_list")) || [];
updateUI();
updateWishList();

//Event Listners

expenseBtn.addEventListener("click", function () {
  console.log("expenseeee");
  show(expenseElement);
  hide([incomeElement, allElement]);
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
});

incomeBtn.addEventListener("click", function () {
  console.log("income");
  show(incomeElement);
  hide([expenseElement, allElement]);
  active(incomeBtn);
  inactive([expenseBtn, allBtn]);
});

allBtn.addEventListener("click", function () {
  console.log("all");
  show(allElement);
  hide([incomeElement, expenseElement]);
  active(allBtn);
  inactive([incomeBtn, expenseBtn]);
});

// Visual HELPERS

function show(element) {
  element.classList.remove("hide");
}

function hide(elements) {
  elements.map((element) => {
    element.classList.add("hide");
  });
}

function active(element) {
  element.classList.add("active");
}

function inactive(elements) {
  elements.map((element) => {
    element.classList.remove("active");
  });
}

//Add buttons

addExpense.addEventListener("click", function () {
  if (!expenseTitle.value || !expenseAmount.value) return;
  let expense = {
    type: "expense",
    title: expenseTitle.value,
    amount: parseInt(expenseAmount.value),
  };
  ENTRY_LIST.push(expense);

  updateUI();
  updateWishList();
  clearInput([expenseTitle, expenseAmount]);
});

addIncome.addEventListener("click", function () {
  if (!incomeTitle.value || !incomeAmount.value) return;

  let income = {
    type: "income",
    title: incomeTitle.value,
    amount: parseInt(incomeAmount.value),
  };
  ENTRY_LIST.push(income);

  updateUI();
  updateWishList();
  clearInput([incomeTitle, incomeAmount]);
});

addWish.addEventListener("click", function () {
  if (!wishTitle.value || !wishAmount.value) return;

  let wish = {
    type: "wish",
    title: wishTitle.value,
    amount: parseInt(wishAmount.value),
  };
  WISH_LIST.push(wish);

  updateWishList();
  clearInput([wishTitle, wishAmount]);
});

incomeList.addEventListener("click", deleteOrEdit);
expenseList.addEventListener("click", deleteOrEdit);
allList.addEventListener("click", deleteOrEdit);
wishList.addEventListener("click", deleteOrEditWish);

///////////////////////// Function HELPERS

function updateUI() {
  income = calculateTotal("income", ENTRY_LIST);
  outcome = calculateTotal("expense", ENTRY_LIST);
  balance = calculateBalance(income, outcome);

  balanceElement.innerHTML = `<small>$</small>${balance}`;
  outcomeTotalElement.innerHTML = `<small>$</small>${outcome}`;
  incomeTotalElement.innerHTML = `<small>$</small>${income}`;

  clearElement([expenseList, incomeList, allList]);

  ENTRY_LIST.map((entry, index) => {
    if (entry.type == "expense") {
      showEntry(expenseList, entry.type, entry.title, entry.amount, index);
    } else if (entry.type == "income") {
      showEntry(incomeList, entry.type, entry.title, entry.amount, index);
    }
    showEntry(allList, entry.type, entry.title, entry.amount, index);
  });

  updateChart(income, outcome);

  localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));
}

function clearElement(elements) {
  elements.map((elements) => {
    elements.innerHTML = "";
  });
}

function calculateTotal(type, list) {
  let sum = 0;
  list.map((entry) => {
    if (entry.type == type) {
      sum += entry.amount;
    }
  });

  return sum;
}

function calculateBalance(income, outcome) {
  return income - outcome;
}

function deleteEntry(entry) {
  ENTRY_LIST.splice(entry.id, 1);

  updateUI();
}

function deleteOrEdit(event) {
  const targetBtn = event.target;

  const entry = targetBtn.parentNode;

  if (targetBtn.id == Delete) {
    deleteEntry(entry);
  } else if (targetBtn.id == Edit) {
    editEntry(entry);
  }
  updateWishList();
}

function editEntry(entry) {
  console.log(entry);
  let ENTRY = ENTRY_LIST[entry.id];

  if (ENTRY.type == "income") {
    incomeAmount.value = ENTRY.amount;
    incomeTitle.value = ENTRY.title;
  } else if (ENTRY.type == "expense") {
    expenseAmount.value = ENTRY.amount;
    expenseTitle.value = ENTRY.title;
  }

  deleteEntry(entry);
}

function showEntry(list, type, title, amount, id) {
  const entry = `<li id ="${id}" class="${type}">
                    <div class="entry"> ${title}: $${amount}</div>
                    <div id="edit"></div>
                    <div id="delete"></div>
                  </li>`;
  const position = "afterbegin";

  list.insertAdjacentHTML(position, entry);
}

function showCanShop(list, type, title, amount, id) {
  if (amount < balance) {
    entry = `<li id ="${id}" class="canShop">
                    <div class="entry"> ${title}: $${amount}</div>
                    <div id="edit"></div>
                    <div id="delete"></div>
                    🛍️
                  </li>`;
    position = "afterbegin";
    list.insertAdjacentHTML(position, entry);
  } else if (amount > balance) {
    entry = `<li id ="${id}" class="${type}">
                    <div class="entry"> ${title}: $${amount}</div>
                    <div id="edit"></div>
                    <div id="delete"></div>
                  </li>`;
    position = "afterbegin";
    list.insertAdjacentHTML(position, entry);
  }
}

function clearInput(inputs) {
  inputs.map((input) => {
    input.value = "";
  });
}

function updateWishList() {
  clearElement([wishList]);
  WISH_LIST.map((entry, index) => {
    showCanShop(wishList, entry.type, entry.title, entry.amount, index);
  });

  localStorage.setItem("wish_list", JSON.stringify(WISH_LIST));
}

function deleteWish(entry) {
  WISH_LIST.splice(entry.id, 1);

  updateWishList();
}

function editWish(entry) {
  console.log(entry);
  let ENTRYWISH = WISH_LIST[entry.id];
  wishAmount.value = ENTRYWISH.amount;
  wishTitle.value = ENTRYWISH.title;

  deleteWish(entry);
}

function deleteOrEditWish(event) {
  const targetBtn = event.target;

  const entry = targetBtn.parentNode;

  if (targetBtn.id == Delete) {
    deleteWish(entry);
  } else if (targetBtn.id == Edit) {
    editWish(entry);
  }
}
