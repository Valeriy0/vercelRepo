import React, { useState } from 'react';

export const LevelsStatus = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="flex items-center space-x-2 bg-primary-500 h-[40px] rounded-xl w-fit">
      <button onClick={() => setIsOpened((temp) => !temp)}>
        <img className="p-1" src="/icons/dashboard/userInfo/staticIcon.svg" />
      </button>
      {isOpened && (
        <>
          <span className="text-base text-black">Level 3</span>
          <div className="flex items-center justify-center rounded-lg bg-[#0B0B0D] w-[115px] h-[30px]">
            <span className="text-primary-500 text-base">4 days left</span>
          </div>
          <div className="w-0.5"></div>
        </>
      )}
    </div>
  );
};
