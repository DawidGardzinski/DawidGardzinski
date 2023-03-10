export const uncheckHamburgerCheckboxOnMenuItemClick = (
  checkboxElement: HTMLInputElement | null
) => {
  if (!checkboxElement) return;
  checkboxElement.checked = false;
};
