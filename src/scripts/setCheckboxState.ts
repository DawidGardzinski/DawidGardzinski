export const setCheckboxState = (
  checkboxElement: HTMLInputElement | null,
  newState: boolean
) => {
  if (!checkboxElement) return;
  checkboxElement.checked = newState;
};
