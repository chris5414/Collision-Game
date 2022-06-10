"use strict";

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

function shuffle(arr) {
  // shuffle the array
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
shuffle(arr);
console.table(arr);

let click1 = 0; // 1st click of the pair
let click2 = 0; // 2nd click of the pair
let idClick1 = "";
let idClick2 = "";

function clearNum() {
  // clear num when it is wrong
  document.getElementById(idClick1).innerText = "";
  document.getElementById(idClick2).innerText = "";
  click1 = 0;
  click2 = 0;
}

function checkNum(event) {
  // check for number for correct or wrong
  console.log("value of click1= " + click1);
  console.log("value of click2= " + click2);

  if (click1 === 0) {
    console.log("first click");
    idClick1 = event.target.id;
    click1 = triggerEvent(event);
  } else {
    console.log("second click");
    click2 = triggerEvent(event);
    idClick2 = event.target.id;

    if (click1 !== click2) {
      document.getElementById("prompt").innerText =
        "Wrong pair, click 'TRY AGAIN' to continue";
      if ((buttonAgain = "click")) {
      }
    } else {
      document.getElementById("prompt").innerText = "Correct pair";
    }

    click1 = 0;
    click2 = 0;
    idClick1 = "";
    idClick2 = "";
  }
}

const buttonAgain = document.querySelector("#tryAgain");
buttonAgain.addEventListener("click", clearNum);

const button1 = document.querySelector("#one");
button1.addEventListener("click", checkNum);

const button2 = document.querySelector("#two");
button2.addEventListener("click", checkNum);

const button3 = document.querySelector("#three");
button3.addEventListener("click", checkNum);

const button4 = document.querySelector("#four");
button4.addEventListener("click", checkNum);

const button5 = document.querySelector("#five");
button5.addEventListener("click", checkNum);

const button6 = document.querySelector("#six");
button6.addEventListener("click", checkNum);

const button7 = document.querySelector("#seven");
button7.addEventListener("click", checkNum);

const button8 = document.querySelector("#eight");
button8.addEventListener("click", checkNum);

const button9 = document.querySelector("#nine");
button9.addEventListener("click", checkNum);

const button10 = document.querySelector("#ten");
button10.addEventListener("click", checkNum);

const button11 = document.querySelector("#eleven");
button11.addEventListener("click", checkNum);

const button12 = document.querySelector("#twelve");
button12.addEventListener("click", checkNum);

function triggerEvent(event) {
  console.log(event.target);

  if (event.target.id === "one") {
    event.target.innerText = arr[0];
    return arr[0];
  }

  if (event.target.id === "two") {
    event.target.innerText = arr[1];
    return arr[1];
  }

  if (event.target.id === "three") {
    event.target.innerText = arr[2];
    return arr[2];
  }

  if (event.target.id === "four") {
    event.target.innerText = arr[3];
    return arr[3];
  }

  if (event.target.id === "five") {
    event.target.innerText = arr[4];
    return arr[4];
  }

  if (event.target.id === "six") {
    event.target.innerText = arr[5];
    return arr[5];
  }

  if (event.target.id === "seven") {
    event.target.innerText = arr[6];
    return arr[6];
  }

  if (event.target.id === "eight") {
    event.target.innerText = arr[7];
    return arr[7];
  }

  if (event.target.id === "nine") {
    event.target.innerText = arr[8];
    return arr[8];
  }

  if (event.target.id === "ten") {
    event.target.innerText = arr[9];
    return arr[9];
  }

  if (event.target.id === "eleven") {
    event.target.innerText = arr[10];
    return arr[10];
  }

  if (event.target.id === "twelve") {
    event.target.innerText = arr[11];
    return arr[11];
  }
}
