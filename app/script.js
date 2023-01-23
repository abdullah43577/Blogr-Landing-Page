"use strict";
const menubar = document.querySelector(".menubar");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const list = document.querySelectorAll("ul.menudrop");

menubar.addEventListener("click", () => {
  left.classList.toggle("open");
  right.classList.toggle("open");
  menubar.classList.toggle("toggle");
});

list.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("hidden");
  });
});
