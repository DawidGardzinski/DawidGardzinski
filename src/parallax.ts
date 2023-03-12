import { elementObserver } from "./scripts/observer";
import {
  setIsScrollSyncPaused,
  synchronizeScroll,
} from "./scripts/synchronizeScroll";
import { onScrollEnd } from "./utils/onScrollEnd";

// PARALLAX
const parallaxElement = document.getElementById("parallax");

//For some reason synchronized scroll prevent other scrolling events so we have to make initial scroll if we want working links (only Google Chrome)
//It would be best to write the parallaxy mechanism so that it does not use the scroll property
//But https://youtube.com/shorts/KpXsfimrkFo?feature=share
if (window.location.hash) {
  //initial scroll
  onScrollEnd(window, () => {
    synchronizeScroll(window, parallaxElement, 2);
  });
} else {
  synchronizeScroll(window, parallaxElement, 2);
}

//We have to to this that way, because on Chrome scrollSync interupt other scrolls
elementObserver(parallaxElement, (entries) => {
  const parallaxEntry = entries[0];
  if (parallaxEntry.isIntersecting) {
    setIsScrollSyncPaused(false);
  } else {
    setIsScrollSyncPaused(true);
  }
});
