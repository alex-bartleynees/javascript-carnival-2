// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


var unicorn = document.getElementsByClassName("inflate-an-image");
unicorn[0].onclick = changeImage1;
unicorn[1].onclick = changeImage2;
unicorn[2].onclick = changeImage3;



var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

function changeImage1() {



  if (counter1 == 0) {
    unicorn[0].src = "./images/unicorn-1.png";
    counter1++;
  } else if (counter1 == 1) {
    unicorn[0].src = "./images/unicorn-2.png";
    counter1++;
  } else if (counter1 == 2) {
    unicorn[0].src = "./images/unicorn-3.png"
    counter1++;

  } else if (counter1 === 3) {
    alert("Unicorn Number 1 says thank you!")
    var horse = new Audio("mixkit-stallion-horse-neigh-1762.wav");
  horse.play();
    }
    
}




function changeImage2 () {

  if (counter2 == 0) {
    unicorn[1].src = "./images/unicorn-1.png";
    counter2++;
  } else if (counter2 == 1) {
    unicorn[1].src = "./images/unicorn-2.png";
    counter2++;
  } else if (counter2 == 2) {
    unicorn[1].src = "./images/unicorn-3.png"
    counter2++;

  } else if (counter2 === 3) {
    alert("Unicorn Number 2 says thank you!")
    var horse = new Audio("mixkit-stallion-horse-neigh-1762.wav");
    horse.play();
  } 

} 


function changeImage3 () {

  if (counter3 == 0) {
    unicorn[2].src = "./images/unicorn-1.png";
    counter3++;
  } else if (counter3 == 1) {
    unicorn[2].src = "./images/unicorn-2.png";
    counter3++;
  } else if (counter3 == 2) {
    unicorn[2].src = "./images/unicorn-3.png"
    counter3++;

  } else if (counter3 === 3) {
    alert("Unicorn Number 3 says thank you!")
    var horse = new Audio("mixkit-stallion-horse-neigh-1762.wav");
    horse.play();
    
    }
  } 


