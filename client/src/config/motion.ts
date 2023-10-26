import type { Transition } from "framer-motion";

import type { DirectionType, AnimationType } from "../types";

export const transition: Transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction: DirectionType): AnimationType => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -500 : direction === "right" ? 500 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation: AnimationType = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation: AnimationType = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "just",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation: AnimationType = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "just",
    damping: 7,
    stiffness: 20,
    restDelta: 0.001,
    duration: 0.5,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation: AnimationType = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};