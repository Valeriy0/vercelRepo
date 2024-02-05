import React, { useEffect } from 'react';
import { useBalance } from '../../../../../helpers/hooks/useBalance';
import { useWeb3React } from '@web3-react/core';

export const Balance = () => {
  const { account } = useWeb3React();
  const { balance, fetchBalance, isLoadingBalance } = useBalance();

  useEffect(() => {
    if (account) {
      fetchBalance();
    }
  }, [account]);

  return (
    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:w-full sm:space-x-2 ">
      <div className="flex items-start justify-start bg-lightGray rounded-2xl h-[64px] p-3 space-x-3 sm:w-full  ">
        <img src="/icons/dashboard/userInfo/frgx_icon.svg" />
        <div className="flex flex-col">
          <span className="text-base font-medium poppins text-white">FRGX</span>
          <span className="text-sm poppins text-white font-light opacity-50">{isLoadingBalance ? '-' : balance}</span>
        </div>
      </div>
    </div>
  );
};
