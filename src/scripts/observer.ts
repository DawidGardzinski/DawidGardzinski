export const elementObserver = (
  element: HTMLElement | null,
  callback?: (entries: IntersectionObserverEntry[]) => any,
  options?: IntersectionObserverInit
) => {
  if (!element) return;
  const observer = new IntersectionObserver((entries) => {
    callback && callback(entries);
  }, options);

  observer.observe(element);
  return observer;
};
