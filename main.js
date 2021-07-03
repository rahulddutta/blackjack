let player = { name: "Rahul", money: 170 };
let card = [];
let sum = 0;
let wonTheGame = false;
let isAlive = false;
let newVal = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

let playerEl = document.querySelector("#player-el");
playerEl.innerHTML = player.name + ": $" + player.money;

function ramdomCard() {
  let randommer = Math.floor(Math.random() * 13 + 1);
  if (randommer > 10) {
    return 10;
  } else if (randommer === 1) {
    return 11;
  } else {
    return randommer;
  }
}

function startGame() {
  let firstCard = ramdomCard();
  let secondCard = ramdomCard();
  sum = firstCard + secondCard;
  card = [firstCard, secondCard];
  isAlive = true;
  renderGame();
}
document.getElementById("gameOn").addEventListener("click", startGame);

function renderGame() {
  sumEl.innerHTML = "Sum: " + sum;
  cardEl.innerHTML = "Cards: ";
  for (let i = 0; i < card.length; i++) {
    cardEl.innerHTML += card[i] + " ";
  }
  if (sum <= 20) {
    newVal = "Do you want to draw a new card?";
  } else if (sum === 21) {
    newVal = "You have won the game";
    wonTheGame = true;
  } else {
    newVal = "Better luck next time";
    isAlive = false;
  }
  messageEl.innerHTML = newVal;
}

function newCard() {
  if (isAlive === true && wonTheGame === false) {
    let thirdCard = ramdomCard();
    card.push(thirdCard);
    sum += thirdCard;
    renderGame();
  }
}

document.querySelector("#new-card").addEventListener("click", newCard);