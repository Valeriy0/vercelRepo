import React from 'react';

export const UserProfit = () => {
  return (
    <div className="flex user-profit-bg flex-col relative justify-between bg-lightGray h-[268px] w-full row-span-1 col-span-2 rounded-3xl p-8 sm:p-0 sm:px-[19px] sm:pt-6 sm:pb-[26px] poppins z-[1] sm:h-full shadow-item backdrop-blur-large">
      <div className="flex flex-col space-y-4 sm:space-y-1 sm:pb-[17px]">
        <span className="text-white opacity-50 text-lg font-semibold sm:font-normal">Profit</span>
        <div className="text-white text-6xl font-semibold sm:text-h2 sm:font-normal z-[1]">
          <span className="opacity-50 ">$</span>
          <span className="">90.123</span>
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="flex flex-col font-semibold space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-base text-white opacity-50">USDC</span>
            <div className="rounded-full bg-primary-500 py-1 px-2 sm:px-1 sm:py-0">
              <span className="text-black text-base sm:text-xs">+7,4%</span>
            </div>
          </div>
          <span className="text-xl text-white sm:text-lg">3200.98</span>
        </div>
        <div className="border border-[1px] border-white opacity-50 sm:hidden" />
      </div>
      <img className="absolute top-0 right-0 z-[0] h-[120%] sm:hidden" src="/images/dashboard/profitInfo/shadow.svg" />
      <img
        className="absolute top-0 right-0 z-[-1] rounded-3xl sm:hidden"
        src="/images/dashboard/profitinfo/bgPic.png"
      />
      <img
        className="absolute top-0 right-0 rounded-3xl hidden sm:flex"
        src="/images/dashboard/profitinfo/bgPicMob.png"
      />
    </div>
  );
};
