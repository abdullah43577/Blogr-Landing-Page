"use strict";

const menubar = document.querySelector(".menubar");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const list = document.querySelectorAll("ul.menudrop");
const menubtn = document.querySelectorAll("div.menubtn");
const menu = document.querySelectorAll(".menu");

menubar.addEventListener("click", () => {
  left.classList.toggle("open");
  right.classList.toggle("open");
  menubar.classList.toggle("toggle");
});

menubtn.forEach((navEl, i) => {
  navEl.addEventListener("click", () => {
    hideEl();
    navEl.classList.toggle("activeNav");
    list[i].classList.toggle("hidden");

    menu.forEach((menuEl) => {
      menuEl.classList.remove("el");
    });
    hideNav();
  });
});

const hideEl = () => {
  list.forEach((item) => {
    if (!item.classList.contains("hidden")) item.classList.add("hidden");
  });
};

const hideNav = () => {
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("left") ||
      e.target.classList.contains("menu") ||
      e.target.classList.contains("menudrop") ||
      e.target.textContent === "Product" ||
      e.target.textContent === "Company" ||
      e.target.textContent === "Connect"
    ) {
      console.log("valid");
    } else {
      hideEl();
    }
  });
};
