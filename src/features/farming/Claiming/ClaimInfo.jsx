import React from "react";

export const ClaimInfo = () => {
    return (
        <div className="flex flex-col justify-between p-6 space-y-11 z-[1] sm:p-4 sm:w-full">
            <div><img src="/images/farming/claiming/frgxLogo.png" /></div>
            <div className="flex space-x-12 pb-5 sm:flex-col sm:space-x-0 sm:pb-0 sm:pt-[66px] sm:space-y-4">
                <div className="flex flex-col space-y-2">
                    <div className="sm:flex sm:items-end sm:space-x-2 ">
                        <span className="text-white leading-5">You Can Claim</span>
                        <img className="hidden sm:flex" src="/icons/claiming/questionIcon.svg" />
                    </div>
                    <span className="poppins text-[#D9E854] text-[40px] font-medium leading-[48px] sm:text-4xl">4,534</span>
                    <span className="max-w-[161px] text-xs text-white opacity-30 font-light sm:hidden">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
                </div>
                <div className="hidden sm:flex border-[1px] border-white-100"/>
                <div className="flex flex-col space-y-2">
                    <div className="sm:flex sm:items-end sm:space-x-2 ">
                        <span className="text-white leading-5">You Claim</span>
                        <img className="hidden sm:flex" src="/icons/claiming/questionIcon.svg" />
                    </div>
                    <span className="poppins text-white text-[40px] font-medium leading-[48px] sm:text-4xl">4,534</span>
                    <span className="max-w-[161px] text-xs text-white opacity-30 font-light sm:hidden">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
                </div>
            </div>
            <button className="flex items-center justify-center bg-[#D9E854] rounded-2xl sm:w-full">
                <span className="poppins text-[#151603] leading-5 py-3.5 font-medium">Claim</span>
            </button>
        </div>
    )
}