import React from 'react';
import { PROGRAM_PRICES, PROGRAM_EXPIRED, PROGRAM_NAMES } from '../../../../helpers/constants';
import { ActivateLvlModal } from '../../../../components/Modals/ActivateLvlModal';
import { useModal } from '../../../../helpers/hooks/useModal';

export const LevelInfo = ({ levelNumber }) => {
  const { openedModal, onClose, onOpen } = useModal();
  return (
    <div className="flex space-x-3 sm:flex-col sm:space-x-0 sm:space-y-3 sm:w-full">
      <div className="flex items-center justify-center bg-lightGray rounded-2xl space-x-2 px-6 py-3 shadow-wrapper sm:w-full">
        <span className="text-base text-white poppins font-medium">1X</span>
        <div className="flex items-center jsutify-center bg-lightGray rounded-full px-3 py-2">
          <span className="text-xs text-white opacity-50 font-medium">
            {PROGRAM_EXPIRED?.[PROGRAM_NAMES?.MATRIX_B][levelNumber]} days
          </span>
        </div>
        <div className="flex items-center jsutify-center bg-primary-500 rounded-full px-3 py-2">
          <span className="text-xs text-black">{PROGRAM_PRICES?.[PROGRAM_NAMES?.MATRIX_B][levelNumber]} FRGX</span>
        </div>
      </div>
      <button
        onClick={onOpen}
        className="flex items-center justify-center bg-lightGray rounded-2xl space-x-2 px-6 py-3 shadow-wrapper"
      >
        <span className="text-base text-white poppins font-medium">Buy more</span>
      </button>
      <ActivateLvlModal openedModal={openedModal} onClose={onClose} level={levelNumber} />
    </div>
  );
};
