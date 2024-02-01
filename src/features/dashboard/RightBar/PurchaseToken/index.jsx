import React from 'react';

import { PurchaseTokenProgressBar } from '../../../../components/PurchaseTokenProgressBar';

export const PurchaseToken = () => {
  return (
    <div className="flex flex-col row-span-2 w-full max-w-[340px] rounded-3xl purple-gradient-wrapper px-6 pt-8 pb-6 poppins space-y-6 sm:px-4 shadow-item sm:max-w-full sm:row-span-1 sm:col-span-2">
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <button className="text-lg text-white font-semibold">Buy</button>
          <button className="text-lg text-white font-semibold">Sell</button>
        </div>
        <span className="text-lg text-white opacity-30">Token</span>
      </div>
      <PurchaseTokenProgressBar percentage={72.46} value={32.123} />
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col gap-3 relative">
          <div className="flex justify-between h-[72px] rounded-2xl bg-lightGray p-3">
            <div className="flex flex-col justify-center h-full">
              <span className="text-sm text-white opacity-50">Amount</span>
              <span className="text-base font-semibold text-white">20.345</span>
            </div>
            <div className="flex items-center h-[48px] rounded-xl bg-lightGray backdrop_filter_tokens px-2 py-3 space-x-1">
              <img src="/icons/dashboard/tokenPurchase/usdt.svg" />
              <span className="text-sm font-inter text-white">USDT</span>
              <button className="pl-2">
                <img src="/icons/dashboard/tokenPurchase/downArrow.svg" />
              </button>
            </div>
          </div>
          <button className=" bg-primary-400 rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
            <img src="/icons/dashboard/tokenPurchase/swapArrow.svg" />
          </button>
          <div className="flex justify-between h-[72px] rounded-2xl bg-lightGray p-3">
            <div className="flex flex-col justify-center h-full">
              <span className="text-sm text-white opacity-50">Amount</span>
              <span className="text-base font-semibold text-white">20.345</span>
            </div>
            <div className="flex items-center h-[48px] rounded-xl bg-lightGray backdrop_filter_tokens px-2 py-3 space-x-1">
              <img src="/icons/dashboard/tokenPurchase/token.svg" />
              <span className="text-sm font-inter text-white">Token</span>
              <button className="pl-2">
                <img src="/icons/dashboard/tokenPurchase/downArrow.svg" />
              </button>
            </div>
          </div>
        </div>

        <button className="py-3.5 w-full flex items-center justify-center rounded-2xl bg-secondary-500">
          <span className="text-base text-white poppins font-semibold">Swap</span>
        </button>
      </div>
    </div>
  );
};
