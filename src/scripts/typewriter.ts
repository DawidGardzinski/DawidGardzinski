//This is made ad hoc, optimize it
export const typewriter = (
  elementToAnimate: HTMLElement | null,
  textsToWrite: string[],
  options: {
    delay?: number;
  } = { delay: 100 }
) => {
  const { delay } = options;
  if (!elementToAnimate || !delay) return;
  elementToAnimate.innerText = "";

  const write = (texts: string[], index = 0, reverse = false, d = delay) => {
    if (texts.length === 1 && reverse) return;
    const text = texts[0];
    const textLength = text.length;
    setTimeout(() => {
      if (index === -1) {
        write(texts.slice(1, texts.length), 0, false);
        return;
      }
      if (index > textLength) {
        write(texts, index - 2, true, 5 * d);
        return;
      }
      if (reverse) {
        elementToAnimate.innerText = text.slice(0, index - textLength);
        write(texts, index - 1, reverse);
      } else {
        elementToAnimate.innerText = text.slice(0, index);
        write(texts, index + 1, reverse);
      }
    }, d);
  };

  write(textsToWrite);
};
