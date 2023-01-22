"use strict";
const menubar = document.querySelector(".menubar");
const menu = document.querySelector(".left");

menubar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("active");
});
