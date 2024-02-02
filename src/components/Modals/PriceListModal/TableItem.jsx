import React from 'react';
import { PROGRAM_EXPIRED, PROGRAM_NAMES } from '../../../helpers/constants';
import { Timer } from '../../../features/Instrument/ActiveLvl/components/Timer';

export const TableItem = ({ activeLvlInfo, lvl, price, isActive, isReadyToActivate }) => {
  return (
    <div
      className={`flex items-center justify-between pl-4 pr-2 py-4 w-full rounded-3xl ${
        isActive && 'bg-white-10 border-[1px] border-white-100'
      }  ${isReadyToActivate && 'bg-white-100'} sm:flex-col sm:space-y-3`}
      key={lvl}
    >
      <div className="flex space-x-4">
        <span className="text-lg poppins text-white">{lvl} Level</span>
        {activeLvlInfo && (
          <div className={`flex space-x-2`}>
            <span className="text-white-500">Cycle x3</span>
            <div className="border h-[20px] border-[1px] border-white-500 " />
            <span className="text-white-500">
              <Timer time={activeLvlInfo?.expiredAt} />{' '}
            </span>
          </div>
        )}
      </div>
      {isReadyToActivate && (
        <button className={`bg-primary-500 w-[215px] py-2 flex items-center justify-center rounded-xl`}>
          <span className="text-primary-950 text-xs ">Activate</span>
        </button>
      )}

      <div className="flex items-center space-x-2.5 sm:py-2">
        <span className="poppins text-white">1X</span>
        <div className="flex items-center justify-center py-2 px-3 bg-white-700 shadow-item backdrop-blur-large rounded-xl">
          <span className="text-white opacity-50 text-xs font-medium">
            {PROGRAM_EXPIRED?.[PROGRAM_NAMES.MATRIX_B]?.[lvl]} days
          </span>
        </div>
        <div className="flex items-center justify-center py-2 px-3 bg-primary-500 shadow-item backdrop-blur-large rounded-xl">
          <span className="text-black text-xs font-medium">{price} FRGX</span>
        </div>
      </div>
    </div>
  );
};
