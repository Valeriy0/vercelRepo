import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PartnersStructure = ({ matrixs }) => {
  const checkStatusPartners = (item, index) => {
    if (item) {
      switch (item?.status) {
        case 'direct':
          return {
            shadow: 'bg-[#EBFF29]',
            border: 'yellow_border_color',
            icon: 'partnerIcon',
            isActive: true,
          };
        // case 'notActive':
        //   return {
        //     border: 'purple_border_color',
        //     icon: 'recycleIcon',
        //     isActive: false,
        //   };
        default:
          return {
            border: 'purple_border_color',
            icon: 'recycleIcon',
            isActive: false,
          };
      }
    } else {
      if (index > 3) {
        return {
          shadow: 'purple_circle_bg',
          border: 'purple_border_color',
          icon: 'recycleIcon',
          isActive: true,
        };
      }
      return {
        border: 'yellow_border_color',
        icon: 'partnerIcon',
        isActive: false,
      };
    }
  };

  const matrixsPlaces = [
    matrixs?.place1,
    matrixs?.place2,
    matrixs?.place3,
    matrixs?.place4,
    matrixs?.place5,
    matrixs?.place6,
  ];

  const allPartners = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const partners = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="flex justify-between partners-block-bg w-full rounded-3xl sm:rounded-2xl px-9 py-8 sm:px-4 sm:py-4  ">
      <motion.div
        variants={allPartners}
        whileInView="visible"
        initial="hidden"
        className="flex justify-between w-full sm:grid sm:gap-y-6 sm:gap-x-9 sm:grid-cols-3 sm:m-auto sm:w-fit "
      >
        {matrixsPlaces?.map((item, itemIndex) => {
          const { border, icon, isActive, shadow } = checkStatusPartners(item, itemIndex);
          return (
            <motion.div key={itemIndex} variants={partners} className={`${border} rounded-full p-[1px]`}>
              <div
                className={`relative flex items-center justify-center w-[80px] h-[80px] bg-[#2E2E2E] z-[1111] rounded-full sm:w-[60px] sm:h-[60px] overflow-hidden`}
              >
                <img
                  className={`${isActive ? '' : 'grayscale opacity-10'} z-[1111]`}
                  src={`/icons/instrument/${icon}.svg`}
                />
                {isActive && <div className={`${shadow} blur-[20px] w-[26px] h-[26px] absolute`} />}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
