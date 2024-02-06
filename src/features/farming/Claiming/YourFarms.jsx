import React from "react";

export const YourFarms = () => {
    return (
        <div className="absolute flex items-center justify-center space-x-3 top-0 right-0 your-farms-bg px-20 py-[13px] rounded-bl-2xl backdrop-blur-medium z-[11] sm:top-4 sm:right-4 sm:py-1 sm:px-3 sm:rounded-full">
            <span className="text-white-500 sm:text-sm sm:font-light leading-none">You Farms:</span>
            <span className="text-2xl text-white poppins font-medium leading-none sm:text-base sm:font-light">23,300</span>
        </div>
    )
}