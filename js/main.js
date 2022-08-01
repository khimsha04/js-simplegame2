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
h1 = document.createElement("h1");
let isPlay = true;
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

button.innerHTML = "START!";
h1.innerHTML =
  "გამარჯობა,START! ღილაკის დაჭერის შემდეგ,გაყვითლდება 3 უჯრა 1 წამით,ხოლო თქვენ უნდა გამოიცნოთ შემდგომში რომელი უჯრები გაყვითლდა.თუ ყველაფერი სწორად გაიგეთ ,დააჭირეთ ღილაკ START! თამაშის დასაწყებად.";
table.innerHTML = divOfBlocks;
section.appendChild(table);
section.appendChild(button);
section.appendChild(h1);

const arrCount = 23;

let blocks = document.getElementsByTagName("td");

function randomNumGen() {
  for (let i = 0; i < 3; i++) {
    let randomNum = Math.floor(Math.random() * arrCount);
    let isYellow =
      myArr[0][randomNum] == 1 ||
      myArr[1][randomNum] == 1 ||
      myArr[2][randomNum] == 1 ||
      myArr[3][randomNum] == 1 ||
      myArr[4][randomNum] == 1;
    if (isYellow) {
      i = --i;
      continue;
    }
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

  button.removeEventListener("click", randomNumGen);
}
button.addEventListener("click", randomNumGen);
let countGreen = 0;
function yellowBlocks() {
  let myNum = 0;
  let randommedNumbersArray = [];
  for (let i = 0; i < myArr.length; i++) {
    for (let a = 0; a < myArr[i].length; a++) {
      if (myArr[i][a] == 1) {
        randommedNumbersArray.push(myNum);
        blocks[myNum].style.backgroundColor = "yellow";
      }
      blocks[myNum].addEventListener("click", function changeColor() {
        if (myArr[i][a] == 1) {
          this.style.backgroundColor = "green";
          countGreen++;
          if (countGreen == 3) {
            setTimeout(function () {
              alert("you win");
            }, 500);
          }
        } else {
          this.style.backgroundColor = "red";
          //1.daitvale samjer da tu udris 3 s
          //2.gaasuftavo matrica
          //3.gamwvanebis mere gaasuftavo da gamoidzaxo randomNumGen
          //4.sheamowme eventebi
          

          randommedNumbersArray.forEach((value, index) => {
            blocks[value].style.backgroundColor = "yellow";
          });
        }
      });
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
