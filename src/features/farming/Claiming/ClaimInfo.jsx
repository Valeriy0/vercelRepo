import React, { useState } from 'react';
import { useGetContract } from '../../../helpers/hooks/useGetContract';
import { useCallTransaction } from '../../../helpers/hooks/useCallTransaction';
import { CONTRACT_NAMES } from '../../../helpers/constants';

export const ClaimInfo = ({ farmState, isLoadingFirst }) => {
  const [isLoadingClaim, setIsLoadingClaim] = useState(false);
  const { getContract } = useGetContract();
  const { onCallTransaction, transactionInfo } = useCallTransaction();

  const onClaim = async () => {
    if (!isLoadingClaim) {
      setIsLoadingClaim(true);
      try {
        const contract = await getContract(CONTRACT_NAMES.FARMING_POOL);

        const result = await contract.claim();

        onCallTransaction(result);
      } catch (e) {
        //
      }

      setIsLoadingClaim(false);
    }
  };

  return (
    <div className="flex flex-col justify-between p-6 space-y-11 z-[1] sm:p-4 sm:w-full">
      <div>
        <img src="/images/farming/claiming/frgxLogo.png" />
      </div>
      <div className="flex space-x-12 pb-5 sm:flex-col sm:space-x-0 sm:pb-0 sm:pt-[66px] sm:space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="sm:flex sm:items-end sm:space-x-2 ">
            <span className="text-white leading-5">You Can Claim</span>
            <img className="hidden sm:flex" src="/icons/claiming/questionIcon.svg" />
          </div>
          <span className="poppins text-[#D9E854] text-[40px] font-medium leading-[48px] sm:text-4xl">
            {isLoadingFirst ? '...' : farmState.available > farmState.limit ? farmState.limit : farmState.available}
          </span>
          <span className="max-w-[161px] text-xs text-white opacity-30 font-light sm:hidden">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </span>
        </div>
        <div className="hidden sm:flex border-[1px] border-white-100" />
        <div className="flex flex-col space-y-2">
          <div className="sm:flex sm:items-end sm:space-x-2 ">
            <span className="text-white leading-5">You Claimed</span>
            <img className="hidden sm:flex" src="/icons/claiming/questionIcon.svg" />
          </div>

          <span className="poppins text-white text-[40px] font-medium leading-[48px] sm:text-4xl">
            {isLoadingFirst ? '...' : farmState.historicalReceived}
          </span>
          <span className="max-w-[161px] text-xs text-white opacity-30 font-light sm:hidden">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit
          </span>
        </div>
      </div>
      <button
        onClick={onClaim}
        disabled={!farmState.available}
        className="flex items-center justify-center bg-[#D9E854] rounded-2xl sm:w-full"
      >
        <span className="poppins text-[#151603] leading-5 py-3.5 font-medium">Claim</span>
      </button>
    </div>
  );
};
