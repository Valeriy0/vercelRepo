import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { shortenAddress } from '../../../../helpers/format';

export const PartnersStructure = ({ matrixs }) => {
  const checkStatusPartners = (item, index) => {
    if (item) {
      if (!item?.realReceiver) {
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
        isActive: true,
      };
    } else {
      if (index === 3 || index === 5) {
        return {
          shadow: 'purple_circle_bg',
          border: 'purple_border_color',
          icon: 'recycleIcon',
          isActive: false,
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
                onClick={() => alert(`получил деньги ${item?.realReceiver?.id}`)}
                className={`relative flex items-center justify-center w-[80px] h-[80px] bg-[#2E2E2E] z-[1111] rounded-full sm:w-[60px] sm:h-[60px] `}
              >
                {!!item?.user?.id && (
                  <span className='matrix_user_id px-1.5 py-1 absolute -top-5 left-1/2 -translate-x-1/2 text-sm sm:text-xs bg-white-70 rounded-[1000px] text-white-500'>{shortenAddress(item?.user?.id, 3)}</span>
                )}
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
