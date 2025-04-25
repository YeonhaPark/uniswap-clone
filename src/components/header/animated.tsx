"use client";

import { Children, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Direction = "forward" | "backward";

const variants = {
  forward: {
    enter: { x: 20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  },
  backward: {
    enter: { x: -20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  },
};

export function AnimatedPager({
  children,
  currentIndex,
}: {
  children: ReactNode[];
  currentIndex: number;
}) {
  const items = Children.toArray(children);
  const [direction, setDirection] = useState<Direction>("forward");
  const [prev, setPrev] = useState(currentIndex);

  useEffect(() => {
    setDirection(currentIndex > prev ? "forward" : "backward");
    setPrev(currentIndex);
  }, [currentIndex, prev]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
