import React from 'react';
import { Modal } from '../../Modal';
import { TableItem } from './TableItem';
import { PROGRAM_NAMES, PROGRAM_PRICES } from '../../../helpers/constants';

export const PriceListModal = ({ openedModal, handleCloseModal, nextLvl, activeLvls }) => {
  return (
    <Modal isOpened={openedModal} onClose={handleCloseModal}>
      <div className="flex p-8 flex-col ffff items-start justify-start w-[918px] rounded-3xl space-y-11 sm:w-full sm:rounded-none sm:rounded-t-3xl sm:px-4 sm:h-[650px] sm:p-0 sm:pt-10 sm:space-y-6 ">
        <h2 className="font-poppins text-white font-medium poppins leading-none sm:text-xl">Level Price</h2>
        <div className="flex flex-col w-full space-y-2 overflow-auto">
          {Object.values(PROGRAM_PRICES?.[PROGRAM_NAMES.MATRIX_B])?.map((item, itemIndex) => {
            const isReadyToActivate = itemIndex + 1 === nextLvl;
            const isActive = itemIndex + 1 < nextLvl;
            const activeLvlInfo = isActive ? activeLvls[itemIndex] : null;
            return <TableItem activeLvlInfo={activeLvlInfo} price={item} lvl={itemIndex+1} isActive={isActive} isReadyToActivate={isReadyToActivate} key={itemIndex} />;
          })}
        </div>
      </div>
    </Modal>
  );
};
