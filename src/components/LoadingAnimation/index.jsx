import React from 'react';
import Lottie from 'lottie-react';
import loadingQornexAnimation from '../../animations/loadingQornex.json';

export const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Lottie className="h-[150px]" animationData={loadingQornexAnimation} loop={true} />
    </div>
  );
};
