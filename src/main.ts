import "./styles/variables.css";
import "./styles/normalize.css";
import "./styles/style.css";
import "./styles/tablet.css";
import "./styles/mobile.css";
import "./styles/utils.css";
import { uncheckHamburgerCheckboxOnMenuItemClick } from "./scripts/uncheckHamburgerCheckboxOnMenuItemClick";
import { clickOutsideCallback } from "./scripts/clickOutsideCallback";

document.querySelectorAll(".js-disabled").forEach((element) => {
  element.classList.remove("js-disabled");
});

const checkboxHamburgerElement = document.getElementById(
  "hamburgerCheckbox"
) as HTMLInputElement | null;

const mobileMenu = document.getElementById("nav-list");

document.querySelectorAll(".nav-list__item").forEach((element) => {
  element.addEventListener("click", () => {
    uncheckHamburgerCheckboxOnMenuItemClick(checkboxHamburgerElement);
  });
});

clickOutsideCallback(mobileMenu, () => {
  uncheckHamburgerCheckboxOnMenuItemClick(checkboxHamburgerElement);
});

const startButton = document.getElementById("startButton");
const aboutMeSection = document.getElementById("about");

startButton?.addEventListener("click", () => {
  if (!aboutMeSection) return;
  aboutMeSection.scrollIntoView();
});
