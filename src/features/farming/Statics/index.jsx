import React from "react";
import Spline from '@splinetool/react-spline';


export const Statics = () => {
    return (
       <div className="flex items-center justify-center border-[1px] border-white-100 rounded-3xl w-full bg-[#0B0B0B] backdrop-blur-large overflow-hidden h-[204px] lg:min-h-[445px] ">
            <div className="w-full flex space-x-12 lg:flex-col lg:space-x-0 lg:space-y-6">
                <div className="flex-1 flex flex-col items-center justify-center space-y-2 z-[1]">
                    <span className="text-white leading-5 lg:font-light">Total Farms</span>
                    <span className="text-[#D9E854] text-[80px] leading-[80px] poppins font-medium lg:text-[52px]">4,534</span>
                </div>
                {/* <img className="z-[1] lg:absolute lg:top-0 lg:right-4 lg:h-[130px]" src="/images/farming/static/cubes.png" /> */}
                
                <Spline className="!ml-0 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2" scene="https://prod.spline.design/eNW9uKguFe7YYjID/scene.splinecode" />
                
                <div className="flex-1 flex flex-col items-center justify-center space-y-2 z-[1]">
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