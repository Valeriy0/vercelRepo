import React from 'react';
import { copy } from '../../../../../helpers/copy';

export const Reflink = ({ refNumber }) => {
  const refLink = window.location.host + '/?ref=' + refNumber;
  return (
    <div className="flex flex-col my-4 h-[106px] bg-white-70 rounded-2xl">
      <div className="flex bg-white-70 rounded-2xl h-[64px] p-3 space-x-3">
        <button
          onClick={() => copy(refLink)}
          className="w-10 h-10 rounded-xl bg-primary-400 flex items-cener justify-center p-2 flex-shrink-0"
        >
          <img src="/icons/dashboard/userInfo/copy_icon.svg" />
        </button>
        <div className="flex flex-col overflow-hidden">
          <span className="text-base font-semibold text-white poppins">Referral link</span>
          <span className="text-sm opacity-50 text-white font-light whitespace-nowrap">{refLink}</span>
        </div>
      </div>
      <span className="px-3 py-2 text-white opacity-50 font-light">+ 7 Partners</span>
    </div>
  );
};
