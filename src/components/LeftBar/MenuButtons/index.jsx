import React from 'react';
import { NavLink } from 'react-router-dom';

import { menuList } from 'helpers/menu';

export const MenuButtons = () => {
  return (
    <div className="flex flex-col items-start space-y-2 w-full">
      {menuList?.map((item, itemIndex) => {
        const isActive = location.pathname.split('/')?.[1] === item?.key;
        return (
          <NavLink
            to={item?.href}
            className={`${isActive && 'bg-primary-500 w-full py-3.5 rounded-2xl'} py-3.5`}
            key={itemIndex}
          >
            <span className={`ml-5 text-base ${isActive ? 'text-black' : 'text-white'}`}>{item?.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
