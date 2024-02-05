import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDeactivationWallet } from 'helpers/hooks/useDeactivationWallet';
import { MenuButtons } from './MenuButtons';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/userSlice';

export const LeftBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const shadowBg = { backgroundImage: `url('/images/leftBar/shadow.png')`, backgroundSize: 'cover' };

  const { deactivationWallet } = useDeactivationWallet();

  const logout = () => {
    deactivationWallet();
    dispatch(clearUser());
  };

  return (
    <div className="flex flex-col justify-between items-end left_bar_size h-screen px-6 pt-10 pb-9 sm:hidden sticky top-0 z-[111] ">
      <div className="z-[10] flex flex-col items-start space-y-11 w-[180px] ">
        <img className="h-[40px] max-w-full" src="/images/header/logo.png" />
        <MenuButtons />
      </div>
      <button onClick={logout} className="z-[10] flex space-x-6 w-[180px]">
        <img src="/icons/leftBar/logOutIcon.svg" />
        <span className="text-[#747474]">Log out</span>
      </button>
    </div>
  );
};
