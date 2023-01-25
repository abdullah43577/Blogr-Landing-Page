"use strict";

const menubar = document.querySelector(".menubar");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

menubar.addEventListener("click", () => {
  left.classList.toggle("open");
  right.classList.toggle("open");
  menubar.classList.toggle("toggle");
});
