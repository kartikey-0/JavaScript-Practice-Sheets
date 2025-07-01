// DOM WORK====indexedDB.HTML--------
// //IN ORDER to et an element id used(GET-ELEMENT BY ID)--
// let startBtn = document.getElementById("btn-start");//element id
// console.log(startBtn) //NO NEED OF # BECAUSE ITS ALREADY FOR ID
//-----------SINGLE ONE CATCH----------
//QUERY-SELECTOR---
// let  startBtn = document.querySelector(".start");//.start for class
// console.log(startBtn);
// let resetBtn = document.querySelector("#btn-reset");//#for id
// console.log(reserBtn);
//---------------SINGLE ONE CATCH------------------
//IF WE WANT TO CATCH OR SELECT MANY ID'S---------
// let button = document.querySelectorAll(".button");//all button got
// console.log(button[0]);
//------------------------

//================================================
// = → Assignment Operator
// Used to assign values to variables.
// == → Equality Operator (Loose Equality)
// Compares two values for equality after type conversion (type coercion).
// === → Strict Equality Operator
// Compares both value and type.  5="5" FALSE
// No type conversion is done.
////////////////////////////////////////////////FROM THEERE REAL JS PROGRAM DONE======>
//     SYNTAX==========
// element.addEventListener(event, callbackFunction, useCapture);
// event=create(creaate text in console),focus(console),keyup(form),"mousedown"(mouse drag)=====//event(work)
//===========================

let startButton = document.querySelector(".start");//SELECTED CLASS
let countButton = document.querySelector(".count");
let stopButton = document.querySelector(".stop");
let input = document.querySelector(".input");

let value = 0;

function showMessage() {
  console.log("Button Clicked");
}

startButton.addEventListener("click", showMessage);

startButton.addEventListener("click", () => {
  if (startButton.innerText === "Start") {//INNERTEXT LIKE INSIDE THE BUTTON ID(BUTTON INSIDE)
    startButton.innerText = "Begin";//START CHANGE TO BEGIN
    startButton.innerHTML = "<span>Lets begin</span>";
  } else {
    startButton.innerText = "Start";
  }
});

countButton.addEventListener("click", () => {
  value++;
  console.log(value);
});

stopButton.addEventListener("click", () => {
  // stopButton.classList.add("btn-red");
  stopButton.classList.toggle("btn-red");//css class //toggle= if that name class theere then ok if not then  make start button its own.
});

input.addEventListener("change", () => {
  console.log("Change -", input.value);
});

input.addEventListener("input", () => {
  console.log("Input -", input.value);
});

input.addEventListener("focus", () => {
  console.log("Focus -", input.value);
});

input.addEventListener("keyup", () => {
  console.log("keyup -", input.value);
});

/** Mouse Events */

input.addEventListener("mousedown", (event) => {
  console.log("Mousedown -", event.button);
});

document.body.addEventListener("mousedown", (event) => {
  let xcor = event.clientX;
  let ycor = event.clientY;
  let cors = `X cor - ${xcor}, Y cor - ${ycor}`;
  console.log(cors);
});

input.addEventListener("mousedown", (event) => {
  let xcor = event.clientX;
  let ycor = event.clientY;
  let cors = `X cor - ${xcor}, Y cor - ${ycor}`;
  console.log(cors);
});