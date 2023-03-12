import debounce from "lodash/debounce";

export const onScrollEnd = (
  element: HTMLElement | Window | Document,
  callback: () => void,
  options: {
    delay?: number;
  } = { delay: 1000 }
) => {
  const { delay } = options;
  element.addEventListener("scroll", debounce(callback, delay), { once: true });
};
