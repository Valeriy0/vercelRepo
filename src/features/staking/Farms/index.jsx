import React from "react";
import { StakingModal } from "../../../components/Modals/StakingModal";
import { useModal } from "../../../helpers/hooks/useModal";




export const Farms = () => {
    const { openedModal, onClose, onOpen } = useModal();
    const stakingList = [
        {

        },
        {

        }
    ]
    return (
        <div className="flex flex-col space-y-9">
            <span className="text-4xl text-white font-medium poppins">Farms FRGX</span>
            <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6">
                <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6">
                    {stakingList?.map((item, itemIndex) => {
                        return (
                        <div className="flex flex-col justify-between rounded-3xl farms-bg space-y-[38px] min-w-[261px] sm:min-w-full p-4 border-[1px] border-white-100 backdrop-blur-large" key={itemIndex}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center justify-center bg-white-10 border-[1px] border-white-100 rounded-full py-2 px-3">
                                    <span className="text-xs text-white">Stake 1</span>
                                </div>
                                <span className="text-xs text-white">20.07-24.07 </span>
                            </div>
                            <div className="flex flex-col space-y-3 w-full">
                                <div className="flex flex-col space-y-0.5">
                                    <span className="text-xs text-white opacity-50 font-light">Steaking</span>
                                    <h2 className="text-white font-medium poppins font-light leading-10">1 233 $</h2>
                                </div>
                                <div className="flex flex-col space-y-2 ">
                                    <span className="text-xs text-white opacity-50 font-light">Stage, day%</span>
                                    <div className="h-[26px] rounded-lg bg-white-70"></div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <button onClick={onOpen} className="flex justify-center items-center rounded-3xl farms-bg min-h-[222px] min-w-[261px] sm:min-w-full border-[1px] border-white-100 backdrop-blur-large">
                    <div className="flex items-center justify-center farms-plus-icon-bg h-[60px] w-[60px] rounded-full">
                        <img src="/icons/staking/plusIcon.svg"/>
                    </div>
                </button>
            </div>
            <StakingModal openedModal={openedModal} handleCloseModal={onClose}/>
        </div>
    )
}