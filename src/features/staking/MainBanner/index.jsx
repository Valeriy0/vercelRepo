import React from "react";

export const MainBanner = () => {
    return (
        <div className="w-full min-h-[540px] border-[1px] border-white-100 rounded-3xl overflow-hidden sm:relative ">
            <div className="relative flex w-full h-full overflow-hidden staking-banner-bg pl-6 sm:pl-0 sm:flex-col sm:items-center sm:justify-between sm:pt-12">
                <div className="flex flex-col space-y-12 justify-center z-[1] sm:w-full sm:px-4">
                    <div className="flex flex-col space-y-4">
                        <span className="text-[52px] text-white poppins font-medium leading-[60px] sm:text-[36px] sm:leading-10 sm:text-center">Liquidity for <br/> <span className="text-[#D9E854]">staked</span> tokens</span>
                        <span className="text-white font-light sm:text-center">Simplified and secure participation in staking</span>
                    </div>
                    <button className="flex items-center justify-center shadow-item bg-secondary-500 py-3.5 rounded-2xl sm:w-full">
                        <span className="text-white poppins font-medium">Stake Now</span>
                    </button>
                </div>
                <img className="absolute right-0 bottom-0 z-[0] sm:hidden" src="/images/staking/bannerFrgx.png"/>
                <img className="hidden sm:flex w-full" src="/images/staking/bannerFrgxMob.png"/>
            </div>
        </div>
    )
}