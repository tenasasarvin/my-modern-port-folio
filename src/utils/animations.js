export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const fadeUp3D = {
  hidden: { opacity: 0, y: 60, rotateX: -25, scale: 0.9, transformPerspective: 1000 },
  visible: {
    opacity: 1, y: 0, rotateX: 0, scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

export const card3D = {
  hidden: { opacity: 0, y: 100, rotateY: 15, rotateX: 10, scale: 0.85, transformPerspective: 1200 },
  visible: {
    opacity: 1, y: 0, rotateY: 0, rotateX: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

export const tabTransition = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
};