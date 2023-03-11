function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

export const clickOutsideCallback = (
  elements: (HTMLElement | null)[],
  callback: () => void
) => {
  const existedElements = elements.filter((element) =>
    Boolean(element)
  ) as HTMLElement[];
  document.addEventListener("mousedown", (event) => {
    const isClickInside = existedElements.some((element) => {
      assertIsNode(event.target);
      return element.contains(event.target);
    });

    if (!isClickInside) {
      callback();
    }
  });
};
