import React from 'react';
import { WALLETS } from '../../../connectors/wallets';
import { useTryActivation } from '../../../helpers/hooks/useTryActivation';
import { Modal } from '../../Modal';

export const ActivateModal = ({ openedModal, handleCloseModal }) => {
  const { tryActivation } = useTryActivation();

  const onWalletClick = (wallet) => () => {
    tryActivation(wallet.connector);
    handleCloseModal();
  };

  return (
    <Modal isOpened={openedModal} onClose={handleCloseModal}>
      <div className="flex flex-col items-center justify-center bg-[#141517] border border-[1px] border-white-100 w-[480px] rounded-3xl sm:rounded-none sm:rounded-t-3xl py-[40px] space-y-10 px-[40px] sm:w-full sm:min-h-[50vh] mt-auto">
        <span className="font-poppins text-2xl  text-white font-medium">Connect your wallet</span>
        <div className="flex w-full flex-col overflow-auto mt-5 space-y-3.5">
          {WALLETS?.map((wallet) => {
            return (
              <div
                className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full p-2 cursor-pointer hover:bg-darkPurple"
                onClick={onWalletClick(wallet)}
                key={wallet.title}
              >
                <img alt="walletIcon" src={wallet.icon} />
                <div className="flex flex-col ml-5">
                  <span className="font-poppins text-lg text-white font-medium">{wallet.title}</span>
                  <span className="text-sm text-white-400 font-light">{wallet.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
