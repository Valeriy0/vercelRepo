import React from 'react';
import { motion } from 'framer-motion';

export const TokenOverview = () => {
  const blockAnimation = {
    hidden: {
      x: -200,
      opacity: 50,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={blockAnimation}
      className="flex justify-between h-full col-span-2 sm:h-[400px] w-full row-span-3 rounded-3xl purple-gradient-wrapper p-8 shadow-item sm:order-last"
    >
      <h3 className="font-semibold text-white">Overview</h3>
      <div className="space-x-2.5 flex items-start">
        <button className="text-base text-white-400">Day</button>
        <button className="text-base text-white-400">Month</button>
        <button className="text-base text-white-400">Year</button>
      </div>
    </motion.div>
  );
};
