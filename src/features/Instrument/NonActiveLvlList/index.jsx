import React, { useMemo } from 'react';
import { useModal } from 'helpers/hooks/useModal';
import { PriceListModal } from '../../../components/Modals/PriceListModal';

export const NonActiveLvlList = ({ activeLvls = [], nextLvl }) => {
  const { openedModal, onOpen, onClose } = useModal();

  const renderContent = useMemo(() => {
    if (activeLvls.length == 8) {
      return (
        <>
          <div
            className={`absolute z-[11] rounded-large h-[100px] w-[91%] absolute_blocks_gradient mt-[30px] sm:rounded-2xl `}
          />
        </>
      );
    }
    if (activeLvls.length <= 7) {
      return (
        <>
          <div
            className={`absolute z-[11] rounded-large h-[100px] w-[91%] absolute_blocks_gradient mt-[30px] sm:rounded-2xl `}
          />
          <div
            className={`absolute z-[1] rounded-large h-[100px] w-[84%] sm:rounded-2xl second_absolute_blocks_gradient `}
          />
        </>
      );
    }
    return null;
  }, [activeLvls]);

  if (activeLvls.length === 9) {
    return null;
  }

  return (
    <div className="relative flex flex-col items-center pt-4">
      {renderContent}
      <div className="flex flex-col items-center instrument-blocks-bg w-full rounded-large py-9 mt-[60px] z-[111] sm:rounded-2xl sm:px-[14px]">
        <img className="pb-9 sm:pb-5" src="/icons/instrument/levelPrices/star.svg" />
        <button onClick={onOpen} className="h-[62px] w-[351px] bg-lightGray rounded-2xl shadow-wrapper sm:w-full">
          <span className="text-base text-white poppins">Level Price</span>
        </button>
        {/* <span className="text-base text-base text-white opacity-40 pt-6 sm:pt-5">Тут что-то будет</span> */}
        <PriceListModal activeLvls={activeLvls} nextLvl={nextLvl} handleCloseModal={onClose} openedModal={openedModal} />
      </div>
    </div>
  );
};
