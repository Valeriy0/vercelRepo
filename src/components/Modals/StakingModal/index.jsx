import React from 'react';
import { useState } from 'react';
import { Modal } from '../../Modal';
import { Days } from './Days';

export const StakingModal = ({ openedModal, handleCloseModal }) => {

    const stakingInfo = [
        {
            title: "You will receive",
            count: "0.0 FRGX",
        },
        {
            title: "Exchange rate",
            count: "1 FRGX = 0.30 USD",
        },
        {
            title: "Max transaction cost",
            count: "$7.10",
        },
        {
            title: "Reward fee",
            count: "2%",
        },
    ]

   

  return (
    <Modal isOpened={openedModal} onClose={handleCloseModal}  withoutClose={true}>
        <div className="flex flex-col items-center justify-center space-y-6 sm:w-full ">
            <div className="flex flex-col items-center justify-center space-y-2">
                <h2 className="leading-10 text-white poppins font-medium sm:text-[36px]">Stake FRGX</h2>
                <span className="text-xs text-white font-light sm:text-sm sm:text-center">Stake FRGX and receive WFRGX while staking.</span>
            </div>
            <div className="flex flex-col items-start justify-center staking-modal-bg backdrop-blur-large  border border-[1px] border-white-100 w-[508px] rounded-3xl space-y-6 p-6 sm:p-0 sm:p-4 sm:rounded-none sm:rounded-t-3xl sm:w-full sm:pt-6 sm:pb-[50px] mt-auto">
                <div className="flex items-center justify-between w-full h-[56px] bg-white-10 rounded-2xl border-[1px] border-white-100 pl-6 pr-2">
                    <div className="flex space-x-3 text-white-500">
                        <img src="/images/modals/stakingModal/frgxLogo.png"/>
                        <input className="bg-transparent outline-none" placeholder="FRGX Amount"></input>
                    </div>
                    <button className="flex items-center justify-center bg-[#EBFF29] px-3 py-2 rounded-xl">
                        <span className="text-black">Max</span>

                    </button>
                </div>
                <Days />
                <div className="flex flex-col w-full space-y-4">
                {stakingInfo?.map((item, itemIndex) => {
                    
                    return (
                        <div className="flex justify-between" key={itemIndex}>
                            <span className="text-white text-xs">{item?.title}</span>
                            <span className="text-white text-xs">{item?.count}</span>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    </Modal>
  );
  };
