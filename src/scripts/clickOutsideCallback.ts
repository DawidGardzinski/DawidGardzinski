function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

export const clickOutsideCallback = (
  element: HTMLElement | null,
  callback: () => void
) => {
  if (!element) return;
  document.addEventListener("mousedown", (event) => {
    assertIsNode(event.target);
    const isClickInside = element.contains(event.target);

    if (!isClickInside) {
      callback();
    }
  });
};
