const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
let elementTd = document.querySelectorAll("td");
const button = document.querySelector(".button");
let getRandomNumber = function () {
  let valueRandomNumber = board[Math.floor(Math.random() * board.length)];
};

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board.length; j++) {
    const element = elementTd[i][j];
    const randomNumber = getRandomNumber();
  }
}

button.addEventListener("click", function () {
  board[0][1] = 1;
  board[1][2] = 1;
  board[2][3] = 1;
  console.log(index);
  if (board === 1) {
  }
});
