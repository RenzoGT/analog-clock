"use strict";

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function rotateHand(hand, unit) {
  hand.style.transform = `rotate(${(unit * 6) + 90}deg)`;
}

const setDate = () => {
  
  const dateNow = new Date();
  const seconds = dateNow.getSeconds();
  const minutes = dateNow.getMinutes();
  const hours = dateNow.getHours();

  rotateHand(secondHand, seconds);
  rotateHand(minuteHand, minutes);
  hourHand.style.transform = `rotate(${(hours * 30) + 90}deg)`;

};

setInterval(setDate, 1000);