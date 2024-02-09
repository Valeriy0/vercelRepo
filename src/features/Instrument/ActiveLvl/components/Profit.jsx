import React from 'react';
import { Timer } from './Timer';
import { bigIntToInt } from '../../../../helpers/numbers';

export const Profit = ({ levelNumber, totalReward, activationTimes, endTime }) => {
  return (
    <div className="flex items-center justify-between space-x-4 ">
      <div className="relative flex items-center justify-center">
        <img className="sm:w-[60px] sm:h-[60px]" src="/icons/instrument/star.svg" />
        <span className="absolute z-[1] text-black text-lg poppins font-medium sm:text-base">{levelNumber} Lvl</span>
      </div>
      <div className="flex flex-col">
        <span className="text-h2 text-white font-medium sm:text-xl ">{bigIntToInt(totalReward)} FRGX</span>
        <div className="flex items-center space-x-2">
          <span className="text-white-500 sm:text-base">Activations {activationTimes}</span>
          <div className="border border-[1px] border-white-500 h-[20px] " />
          <span className="text-white-500 sm:text-base">
            <Timer time={endTime} />
          </span>
        </div>
      </div>
    </div>
  );
};
