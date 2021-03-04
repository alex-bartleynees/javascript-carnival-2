// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var headIndex = 0;
var bodyIndex = 0;
var shoeIndex = 0
var clothingIndex = 0;

function changeClownHead() {
  let headImage = document.getElementById("head");
  headImage.src = "./images/head" + headIndex + ".png";

}

function changeClownBody () {
  let bodyImage = document.getElementById("body");
  bodyImage.src = "./images/body" + bodyIndex + ".png";
}

function changeClownShoes () {
  let shoeImage = document.getElementById("shoes");
  shoeImage.src = "./images/shoes" + shoeIndex + ".png";
}

changeClownHead();
changeClownBody();
changeClownShoes();

document.onkeydown = checkKey;

function checkKey(e) {

  if (e.keyCode == 39 && clothingIndex == 0) {
    headIndex++;
  } else if (e.keyCode == 37 && clothingIndex == 0) {
    headIndex--;
  }

  if (e.keyCode == 39 && clothingIndex == 1) {
    bodyIndex++;
  } else if (e.keyCode == 37 && clothingIndex == 1) {
    bodyIndex--;
  }

  if (e.keyCode == 39 && clothingIndex == 2) {
    shoeIndex++;
  } else if (e.keyCode == 37 && clothingIndex == 2) {
    shoeIndex--;
  }



  if (headIndex > 5) {
    headIndex = 0;
  } else if (headIndex < 0) {
    headIndex = 5;
  }

  if (bodyIndex > 5) {
    bodyIndex = 0;
  } else if (bodyIndex < 0) {
    bodyIndex = 5;
  }

  if (shoeIndex > 5) {
   shoeIndex = 0;
  } else if (shoeIndex < 0) {
    shoeIndex = 5;
  }

  switch (e.keyCode) {
    case 39:
      changeClownHead();
      changeClownBody();
      changeClownShoes();
      break;

    case 37:
      changeClownHead();
      changeClownBody();
      changeClownShoes();
      break;

    case 38:
      clothingIndex++
      break;

    case 40:
      clothingIndex--
      break;
  }

  if (clothingIndex > 2) {
    clothingIndex = 0;
  } else if (clothingIndex < 0) {
    clothingIndex = 2;
  }

}







