import React from 'react';
import { shortenAddress } from 'helpers/format';
import { Reflink } from './Components/Reflink';
import { Balance } from './Components/Balance';
import { useWeb3React } from '@web3-react/core';
import CryptoJS from 'crypto-js';

export const UserInfo = ({ id = '', refNumber = 0 }) => {
  const { account } = useWeb3React();

  return (
    <div className="flex flex-col max-w-[340px] row-span-2 rounded-3xl user-info-bg px-6 pt-8 pb-6 sm:px-4 sm:pt-6 sm:pb-4 shadow-wrapper border-[1px] border-white-100 sm:max-w-full sm:order-first sm:row-span-1 sm:col-span-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-black w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${CryptoJS.SHA256(account)}&scale=80`}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-white font-medium poppins">Samanta Lucia</span>
            <span className="text-white-500 font-light">ID {shortenAddress(id)}</span>
          </div>
        </div>
      </div>
      <Reflink refNumber={refNumber} />
      <Balance />
    </div>
  );
};
