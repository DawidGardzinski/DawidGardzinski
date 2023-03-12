import throttle from "lodash/throttle";

let isScrollSyncPaused = false;
export const setIsScrollSyncPaused = (bool: boolean) => {
  isScrollSyncPaused = bool;
};

export const synchronizeScroll = (
  baseElement: Window | null,
  elementToSync: HTMLElement | null,
  relativeSpeed = 1,
  options: { throttleInvocationRate?: number } = {
    throttleInvocationRate: 10,
  }
) => {
  const { throttleInvocationRate } = options;
  if (!baseElement || !elementToSync) return;
  baseElement.addEventListener(
    "scroll",
    throttle(() => {
      if (isScrollSyncPaused) return;
      elementToSync.scrollTop = relativeSpeed * baseElement.scrollY;
    }, throttleInvocationRate)
  );
};
