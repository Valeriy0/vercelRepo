import React from 'react';
import { copy } from '../../../../../helpers/copy';

export const Reflink = ({ refNumber }) => {
  const refLink = window.location.host + '/?ref=' + refNumber;
  return (
    <div className="flex flex-col my-4 h-[106px] bg-lightGray rounded-2xl">
      <div className="flex bg-primary-400 rounded-2xl h-[64px] p-3 space-x-3">
        <button
          onClick={() => copy(refLink)}
          className="w-10 h-10 rounded-xl bg-white flex items-cener justify-center p-2"
        >
          <img src="/icons/dashboard/userInfo/copy_icon.svg" />
        </button>
        <div className="flex flex-col overflow-hidden">
          <span className="text-base font-semibold text-black poppins">Referral link</span>
          <span className="text-sm opacity-50 whitespace-nowrap">{refLink}</span>
        </div>
      </div>
      <span className="px-3 py-2 text-white opacity-50">+ 7 Partners</span>
    </div>
  );
};
