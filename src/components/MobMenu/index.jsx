import React from 'react';
import { menuList } from 'helpers/menu';

export const MobMenu = () => {
  let mobileMenuList = menuList.slice();
  let firstItem = mobileMenuList.splice(0, 1);
  mobileMenuList.splice(2, 0, firstItem[0]);

  return (
    <div className="relative hidden flex-shrink-0 sm:flex px-6 py-3 h-[72px] rounded-t-2xl w-full z-[9999] overflow-hidden backdrop-blur-large">
      <div className="flex justify-between w-full z-[1]">
        {mobileMenuList?.map((item, itemIndex) => {
          return (
            <div key={itemIndex} className={item.bg}>
              <a href={item.href}>
                <img className="p-3 z-[111]" src={item.icon} />
              </a>
            </div>
          );
        })}
      </div>
      <img className="absolute top-0 left-0 h-full w-full z-[0]" src="/images/MobMenu/last.png" />
      <img className="absolute top-0 h-full left-0 w-full z-[0]" src="/images/MobMenu/last.png" />
    </div>
  );
};
