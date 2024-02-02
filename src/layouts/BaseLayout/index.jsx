import React, { useEffect } from 'react';
import { LeftBar, Header } from 'components';
import { MobMenu } from '../../components';

export const BaseLayout = ({ children }) => {

  const bgShadow = {
    backgroundImage: 'url(/images/instrument/main/bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  }

  return (
    <div style={bgShadow} className="flex min-h-screen w-full bg-[#0B0B0B] relative  ">
      <LeftBar />
      <div className="flex flex-col w-full h-screen z-[11] ">
        <Header />
        <div className="flex flex-col px-12 py-10 z-[1] w-full max-w-[1250px] sm:px-4 sm:py-5 h-full overflow-auto">
          {children}
        </div>
        <MobMenu />
      </div>
    </div>
  );
};
