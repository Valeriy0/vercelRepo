import { React, useEffect } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';

export const AnimatedCounter = ({ endNum }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, endNum, { duration: 1 });

    return controls.stop;
  }, [endNum]);

  return <motion.div>{rounded}</motion.div>;
};
