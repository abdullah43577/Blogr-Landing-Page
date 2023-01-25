"use strict";

const menubar = document.querySelector(".menubar");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const list = document.querySelectorAll("ul.menudrop");
const menubtn = document.querySelectorAll("div.menubtn");

menubar.addEventListener("click", () => {
  left.classList.toggle("open");
  right.classList.toggle("open");
  menubar.classList.toggle("toggle");
});

menubtn.forEach((navEl, i) => {
  navEl.addEventListener("click", () => {
    hideEl();
    navEl.classList.toggle("activeNav");
    console.log(list[i]);
    list[i].classList.toggle("hidden");
  });
});


const hideEl = () => {
  list.forEach((item) => {
    if (!item.classList.contains("hidden")) item.classList.add("hidden");
  });
};

// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("hidden")) hideEl();
// });