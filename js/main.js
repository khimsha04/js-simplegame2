let myArr = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  divOfBlocks = "",
  section = document.querySelector("section"),
  button = document.createElement("button"),
  table = document.createElement("table");

for (let i = 0; i < myArr.length; i++) {
  divOfBlocks += `
     <tr>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     </tr>`;
}

button.innerHTML = "START";

table.innerHTML = divOfBlocks;
section.appendChild(table);
section.appendChild(button);
const arrCount = myArr.reduce(
  (currentCount, row) => currentCount + row.length,
  0
);

let blocks = document.getElementsByTagName("td");

function randomNumGen() {
  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * arrCount);
    if (randomNum < 5) {
      myArr[0][randomNum] = 1;
    } else if (randomNum >= 5 && randomNum < 10) {
      randomNum -= 5;
      myArr[1][randomNum] = 1;
    } else if (randomNum >= 10 && randomNum < 15) {
      randomNum -= 10;
      myArr[2][randomNum] = 1;
    } else if (randomNum >= 15 && randomNum < 20) {
      randomNum -= 15;
      myArr[3][randomNum] = 1;
    } else {
      randomNum -= 20;
      myArr[4][randomNum] = 1;
    }
  }
  yellowBlocks();
  console.log("event happened");
  button.removeEventListener("click", randomNumGen);
}
button.addEventListener("click", randomNumGen);
// button.addEventListener("click", function () {
//   randomNumGen();
//   if (this.click === myArr[i][a]) {
//     blocks[myNum].style.backgroundColor = "green";
//   } else {
//     blocks[myNum].style.backgroundColor = "red";
//   }
// });

function yellowBlocks() {
  let myNum = 0;
  for (let i = 0; i < myArr.length; i++) {
    for (let a = 0; a < myArr[i].length; a++) {
      if (myArr[i][a] === 1) {
        blocks[myNum].style.backgroundColor = "yellow";
      }
      myNum++;
    }
  }
  myNum = 0;
  setTimeout(() => {
    for (let i = 0; i < myArr.length; i++) {
      for (let a = 0; a < myArr[i].length; a++) {
        if (myArr[i][a] === 1) {
          blocks[myNum].style.backgroundColor = "white";
        }
        myNum++;
      }
    }
  }, "1000");
}
