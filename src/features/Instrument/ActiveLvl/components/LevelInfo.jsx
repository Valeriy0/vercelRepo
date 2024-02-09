import React from 'react';
import { PROGRAM_PRICES, PROGRAM_EXPIRED, PROGRAM_NAMES } from '../../../../helpers/constants';
import { ActivateLvlModal } from '../../../../components/Modals/ActivateLvlModal';
import { useModal } from '../../../../helpers/hooks/useModal';

export const LevelInfo = ({ isOpen, levelNumber, recyclesTotal, setCurrentCycle, currentCycle = 0 }) => {
  const { openedModal, onClose, onOpen } = useModal();
  const isAllowUpCycle = currentCycle < recyclesTotal;
  const isAllowDownCycle = currentCycle > 0;

  const cycleUp = (e) => {
    e.stopPropagation();
    console.log(111);
    if (isAllowUpCycle) {
      setCurrentCycle(++currentCycle);
    }
  };

  const cycleDown = (e) => {
    e.stopPropagation();
    console.log(222, isAllowDownCycle);
    if (isAllowDownCycle) {
      setCurrentCycle(--currentCycle);
    }
  };

  const openModal = (e) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="z-[20] flex space-x-3 sm:flex-col sm:space-x-0 sm:space-y-3 sm:w-full"
    >
      {isOpen && (
        <div className="space-x-4 flex items-center justify-center bg-lightGray rounded-2xl space-x-2 px-3 py-3 shadow-wrapper sm:w-full">
          <button
            disabled={!isAllowDownCycle}
            onClick={cycleDown}
            className="bg-white-70 w-6 h-6 flex items-center justify-center rounded-[8px] text-white-500 poppins font-semibold"
          >
            -
          </button>
          <div className="flex-1 flex items-center justify-center text-white-500 poppins font-semibold">
            Cycle {currentCycle + 1}
          </div>
          <button
            disabled={!isAllowUpCycle}
            onClick={cycleUp}
            className="bg-white-70 w-6 h-6 flex items-center justify-center rounded-[8px] text-white-500 poppins font-semibold"
          >
            +
          </button>
        </div>
      )}
      <button
        onClick={openModal}
        className="min-h-[48px] flex items-center justify-center bg-primary-500 rounded-2xl space-x-2 px-6 py-3 shadow-wrapper"
      >
        <span className="text-base text-black poppins font-medium">Extend</span>
      </button>
      <ActivateLvlModal openedModal={openedModal} onClose={onClose} level={levelNumber} />
    </div>
  );
};
