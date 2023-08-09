import { MutableRefObject } from "react";

export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.12,
    },
  },
};
export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const scrollToBottom = (e: MutableRefObject<HTMLDivElement>) => {
  e.current.scrollIntoView({
    behavior: "smooth",
  });
};

export const scrollToTop = (e: MutableRefObject<HTMLDivElement>) => {
  e.current.scrollIntoView({
    behavior: "smooth",
  });
};
