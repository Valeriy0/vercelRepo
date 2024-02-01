import React from 'react';

export const Header = () => {
  const bgShadow = {
    backgroundImage: `url('/images/header/shadow.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'round',
  };
  return (
    <div style={bgShadow} className="hidden sm:flex flex-shrink-0 items-center px-4 h-[72px] rounded-b-3xl w-full">
      <img className="h-[30px]" src="/images/header/logo.png" />
    </div>
  );
};
