import React from "react";

export const Statics = () => {
    return (
       <div className="flex items-center justify-center border-[1px] border-white-100 rounded-3xl w-full bg-[#0B0B0B] backdrop-blur-large overflow-hidden lg:min-h-[445px] ">
            <div className="flex space-x-12 lg:flex-col lg:space-x-0 lg:space-y-6">
                <div className="flex flex-col items-center justify-center space-y-2 z-[1]">
                    <span className="text-white leading-5 lg:font-light">Total Farms</span>
                    <span className="text-[#D9E854] text-[80px] leading-[80px] poppins font-medium lg:text-[52px]">4,534</span>
                </div>
                <img className="z-[1] lg:absolute lg:top-0 lg:right-4 lg:h-[130px]" src="/images/farming/static/cubes.png" />
                <div className="flex flex-col items-center justify-center space-y-2 z-[1]">
                    <span className="text-white leading-5 lg:font-light">Total User to Farm</span>
                    <span className="text-white text-[80px] poppins leading-[80px] font-medium lg:text-[52px]">4,534</span>
                </div>
            </div>
            <img className="absolute bottom-0 w-full z-[0] lg:hidden" src="/images/farming/static/bottomShadow.png"/>
            <img className="hidden lg:flex absolute bottom-0 w-full z-[0]" src="/images/farming/static/botMobShadow.png"/>
            <img className="hidden lg:flex absolute top-0 w-full z-[0] " src="/images/farming/static/topMobShadow.png"/>
       </div>
    )
}