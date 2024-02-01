import React from 'react';
import { useModal } from '../../../helpers/hooks/useModal';
import { ActivateLvlModal } from '../../../components/Modals/ActivateLvlModal';
import { PROGRAM_EXPIRED, PROGRAM_NAMES, PROGRAM_PRICES } from '../../../helpers/constants';

export const LevelActivating = ({ nextLvl = 1 }) => {
  const { openedModal, onOpen, onClose } = useModal();

  return (
    <>
      <div className="flex bg-[#1D1D1E] w-full items-center justify-center h-[190px] rounded-large sm:rounded-3xl sm:h-fit sm:pt-6 sm:pb-[26px] sm:px-3 level-activating-bg">
        <div className="flex flex-col space-y-3 sm:w-full">
          <div className="flex items-center justify-center bg-lightGray rounded-2xl h-[56px]  space-x-2 shadow-item sm:w-full sm:backdrop-blur-large">
            <span className="text-base text-white poppins font-medium">1X</span>
            <div className="flex items-center jsutify-center bg-lightGray rounded-full px-3 py-2">
              <span className="text-xs text-white opacity-50 font-medium">
                {PROGRAM_EXPIRED?.[PROGRAM_NAMES.MATRIX_B][nextLvl]} days
              </span>
            </div>
            <div className="flex items-center jsutify-center bg-primary-500 rounded-full px-3 py-2">
              <span className="text-xs text-black">{PROGRAM_PRICES?.[PROGRAM_NAMES.MATRIX_B][nextLvl]} FRGX</span>
            </div>
          </div>
          <button
            onClick={() => onOpen()}
            className="flex items-center justify-center bg-primary-500 rounded-2xl h-[62px] w-[351px] shadow-item sm:w-full"
          >
            <span className="text-black poppins text-base font-semibold ">Activate {nextLvl} Level</span>
          </button>
        </div>
      </div>
      <ActivateLvlModal level={nextLvl} onClose={onClose} openedModal={openedModal} />
    </>
  );
};
