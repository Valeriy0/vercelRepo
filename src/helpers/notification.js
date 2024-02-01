import React from 'react';
import { toast } from 'react-toastify';

export const callNotification = ({ type = 'success', message = '', ...props }) => {
  const isServer = typeof window === 'undefined';

  if (isServer) return;

  return toast[type](message, {
    position: window.innerWidth <= 767 ? 'top-center' : 'bottom-left',
    className: '!bg-[#1C1D1E] !border !border-white-200 !rounded-[16px] !p-6 !text-sm !leading-5 sm:!p-5 sm:!mx-5 sm:!my-2.5 !bg-black !text-white',
    progressClassName: '!bg-white',
    autoClose: 3000,
    hideProgressBar: false,
    closeButton: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    ...props,
  });
};
