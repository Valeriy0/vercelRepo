import React from 'react';
import { menuList } from 'helpers/menu';

export const MobMenu = () => {
  let mobileMenuList = menuList.slice();
  let firstItem = mobileMenuList.splice(0, 1);
  mobileMenuList.splice(2, 0, firstItem[0]);

  return (
    <div className="relative hidden flex-shrink-0 sm:flex px-6 h-[72px] rounded-t-3xl w-full z-[9999] overflow-hidden backdrop-blur-large bg-[#131313]">
      <div className="flex justify-between items-center w-full z-[1]">
        {mobileMenuList?.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className={`flex items-center justify-center mobMenu-gray-shadow ${item?.bg}`}>
              <a href={item.href}>
                <img className="p-3 z-[111] flex-shrink-1" src={item?.mobIcon} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
