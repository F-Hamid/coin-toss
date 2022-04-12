"strict";

const random = function () {
  return Math.floor(Math.random() * 2);
};
// console.log(random());
const head = document.querySelector(".head");
const tail = document.querySelector(".tail");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const score1 = document.querySelector(".p1sc");
const score2 = document.querySelector(".p2sc");
// Players
const player1 = {
  n: "",
  choice: "m",
  score: 0,
};
const player2 = {
  n: "",
  choice: "",
  score: 0,
};
// tossing
const toss = function () {
  player1.choice === "head" ? (player1.n = 0) : (player1.n = 1);

  console.log(player1.n);
  return player1.n;
};

// Final Result
const result = function (coin) {
  if (player1.n - coin === 0) {
    p1.innerHTML = `Player 1 wins with : <span>${player1.choice} </span>`;
    p1.classList.remove("loser");
    p2.classList.add("loser");
    player1.score++;
    score1.innerHTML = "Player 1 score : " + player1.score;
  } else {
    p2.innerHTML = `Player 2 wins with : <span>${player2.choice} </span> `;
    p2.classList.remove("loser");
    p1.classList.add("loser");
    player2.score++;
    score2.innerHTML = "Player 2 score : " + player2.score;
  }
};
// clicked coin
const clicked = function () {
  window.onclick = (e) => {
    player1.choice = e.target.classList.value;
    player1.choice === "head"
      ? (player2.choice = "tails")
      : (player2.choice = "head");
    console.log(player2.choice);
    toss();
    console.log(player1.choice);
    result(random());
    return player1.choice;
  };
};

clicked();
