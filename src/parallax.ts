import shuffle from "lodash/shuffle";
import { elementObserver } from "./scripts/observer";
import {
  setIsScrollSyncPaused,
  synchronizeScroll,
} from "./scripts/synchronizeScroll";
import { getRandIntBetween } from "./utils/getRandIntBetween";
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

const buzzWords = [
  "typescript",
  "react",
  "javascript",
  "redux",
  "next",
  "nx",
  "bem",
  "css",
  "sass",
  "html",
  "styled components",
  "vite",
  "webpack",
  "lodash",
  "a11y",
  "core web vitals",
  "seo",
  "frontend",
  "backend",
  "mysql",
  "postgresql",
  "node.js",
  "mongodb",
  "cloudflare",
  "docker",
  "owasp",
  "git",
  "github",
  "gitlab",
  "bitbucket",
  "ci/cd",
  "github actions",
  "rwd",
  "spa",
  "ssr",
  "ssg",
];

document.querySelectorAll(".parallax__layer").forEach((element) => {
  const shuffledBuzzWords = shuffle(buzzWords);
  const paralaxLayerItemWord = shuffledBuzzWords.map((word) => {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(word);

    newDiv.appendChild(newContent);
    newDiv.classList.add("parallax__word");
    newDiv.style.top = `${getRandIntBetween(0, 100)}%`;
    newDiv.style.left = `${getRandIntBetween(0, 100)}%`;

    return newDiv;
  });

  paralaxLayerItemWord.forEach((item) => element.appendChild(item));
});
