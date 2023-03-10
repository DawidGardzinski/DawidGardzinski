import "./styles/variables.css";
import "./styles/normalize.css";
import "./styles/style.css";
import "./styles/tablet.css";
import "./styles/mobile.css";
import { uncheckHamburgerCheckboxOnMenuItemClick } from "./scripts/uncheckHamburgerCheckboxOnMenuItemClick";
import { clickOutsideCallback } from "./scripts/clickOutsideCallback";

const checkboxHamburgerElement = document.getElementById(
  "hamburgerCheckbox"
) as HTMLInputElement | null;

const mobileMenu = document.getElementById("nav-list");

document.querySelectorAll(".nav-list__item").forEach((element) => {
  element.addEventListener("click", () => {
    uncheckHamburgerCheckboxOnMenuItemClick(checkboxHamburgerElement);
  });
});

checkboxHamburgerElement?.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
});

clickOutsideCallback(mobileMenu, () => {
  uncheckHamburgerCheckboxOnMenuItemClick(checkboxHamburgerElement);
});
