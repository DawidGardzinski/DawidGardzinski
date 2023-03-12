import "./styles/variables.css";
import "./styles/normalize.css";
import "./styles/style.css";
import "./styles/tablet.css";
import "./styles/mobile.css";
import "./styles/utils.css";
import { clickOutsideCallback } from "./scripts/clickOutsideCallback";
import { setCheckboxState } from "./scripts/setCheckboxState";
import { typewriter } from "./scripts/typewriter";

const isMobile = window.innerWidth < 650;

document.querySelectorAll(".js-disabled").forEach((element) => {
  element.classList.remove("js-disabled");
});

const checkboxHamburgerElement = document.getElementById(
  "hamburgerCheckbox"
) as HTMLInputElement | null;

const checkboxHamburgerLabelElement = document.getElementById(
  "hamburgerCheckboxLabel"
);

const menu = document.getElementById("nav-list");

const typewriterElement = document.getElementById("typewriter");

document.querySelectorAll(".nav-list__item").forEach((element) => {
  element.addEventListener("click", () => {
    setCheckboxState(checkboxHamburgerElement, false);
  });
});

clickOutsideCallback([menu, checkboxHamburgerLabelElement], () => {
  setCheckboxState(checkboxHamburgerElement, false);
});

checkboxHamburgerLabelElement?.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.code === "Space") {
    e.preventDefault();
    setCheckboxState(
      checkboxHamburgerElement,
      !checkboxHamburgerElement?.checked
    );
  }
});

const startButton = document.getElementById("startButton");
const aboutMeSection = document.getElementById("about");

startButton?.addEventListener("click", () => {
  if (!aboutMeSection) return;
  aboutMeSection.scrollIntoView();
});

if (isMobile) {
  typewriter(typewriterElement, ["Hi", ":)"]);
} else {
  typewriter(typewriterElement, ["Hi", "I am Dawid", "Web developer", ":)"]);
}
