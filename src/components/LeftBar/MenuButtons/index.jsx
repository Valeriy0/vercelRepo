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
            className={`${isActive && 'bg-white-70 hover:bg-white-70'} hover:bg-white-30 w-full py-3.5 px-4 rounded-2xl`}
            key={itemIndex}
          >
          <div className="flex items-center space-x-3 ">
            <img src={isActive ? item?.activeIcon : item?.icon}/> 
            <span className={` text-base ${isActive ? 'text-white' : 'text-white-300'}`}>{item?.title}</span>
          </div>
          </NavLink>
        );
      })}
    </div>
  );
};
