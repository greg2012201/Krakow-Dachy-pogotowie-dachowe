import { animationStopperInit } from "./resizeAnimationStopper";
import { isElementInSight } from "./isElementsInSight";

const images = document.querySelectorAll(".article__image");
const text = document.querySelectorAll(".article__content");
const title = document.querySelector(".slogan__title");
const motto = document.querySelector(".slogan__motto");
const page = document.querySelector(".page");

const desktopScroll = {
  duration: "1000ms",
  ease: "cubic-bezier(0.23, 1, 0.32, 1)",
};
const mobileScroll = {
  duration: "0ms",
  ease: "linear",
};

const desktopVieport = 1281;

animationStopperInit(page);

isElementInSight([...images, ...text], false);
isElementInSight([title, motto], true);
