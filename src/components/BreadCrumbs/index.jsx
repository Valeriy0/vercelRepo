import React from 'react';

export const BreadCrumbs = ({ title, children }) => {
  return (
    <div className="z-[10] flex items-center space-x-6">
      <h1 className="text-white font-semibold sm:text-4xl ">{title}</h1>
      {children}
    </div>
  );
};
