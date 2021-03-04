// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let array = [];
function cellReference() {

  let myTable = document.getElementById("myTable");
  for (let i = 0; i < myTable.rows.length; i++) {

    for (let j = 0; j < myTable.rows[i].cells.length; j++) {
      array.push(myTable.rows[i].cells[j]);
    }
  }
}
cellReference()

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);

}

let randomIndex = getRandomNumber(0, 25);
let randomCell = array[randomIndex];


function addMole() {

  let img = document.createElement("img");
  img.setAttribute("id", "mole")
  img.src = "mole.PNG"
  randomCell.appendChild(img);
}

addMole();

let mole = document.getElementById("mole");
mole.addEventListener("click", whackedMole);

let whackAudio = new Audio("whack-audio.wav");


function whackedMole() {
  let randomIndex = getRandomNumber(0, 25);
  let randomCell = array[randomIndex];
  let img = document.getElementsByTagName("img")[0];
  document.getElementById("mole").parentNode.removeChild(img);
  whackAudio.play();
  randomCell.appendChild(img);


}
let counter = 0;

document.getElementsByTagName('img')[0].onclick = function () {
  counter++;
}

let highScores = 0;

if (counter > highScores) {
  highScores = counter;
}

document.getElementById("highscore").innerHTML = "High Score = " + highScores;


isRunning = true
let seconds = 10;
function timer() {
 let remainingSeconds = seconds;
  document.getElementById("timer").innerHTML = "Timer: " + remainingSeconds;
  if (isRunning == true) {
    seconds--;
  } if (remainingSeconds == 0) {
    alert("Your score is " + counter);
    isRunning = false;

  }
}

setInterval(timer, 1000);





let refreshButton = document.getElementById("reset");
let refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage);