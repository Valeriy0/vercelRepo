import React, { useLayoutEffect, useRef, useMemo } from 'react';
import { SemiCircleProgress } from 'react-semicircle-progressbar';

export const PurchaseTokenProgressBar = ({ percentage = 0, value = 0 }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    if (ref.current) {
      // Убирает кастомный текст процентов из библиотеки react-semicircle-progressbar
      ref?.current?.firstChild?.lastChild?.classList.add('hideSemiCircleProgressBarText');
    }
  }, [ref]);

  const mobileProgressBarOptions = useMemo(() => {
    const howManyColorBlocks = Math.floor(percentage / 20);

    return new Array(5).fill({}).map((item, index) => ({
      opacity: index < howManyColorBlocks ? 1 : 0.3,
    }));
  }, [percentage]);

  return (
    <>
      <div ref={ref} className="sm:hidden relative  flex items-center justify-center h-[148px]">
        <SemiCircleProgress
          percentage={percentage}
          percentageSeperator=" "
          size={{
            width: 200,
            height: 200,
          }}
          strokeWidth={10}
          strokeColor="#DAE854"
          hasBackground
          bgStrokeColor="rgba(255, 255, 255, 0.05)"
        />
        <div className="flex flex-col text-center absolute">
          <span className="text-[24px] font-medium text-white">{value}</span>
          <span className="text-lightGreen text-[14px]">{`(${percentage}%)`}</span>
        </div>
      </div>
      <div className="hidden sm:flex sm:justify-between">
        <div className="flex items-baseline">
          <span className="text-[24px] font-medium text-white">{value}</span>
          <span className="text-lightGreen text-[14px] ml-1">{`(${percentage}%)`}</span>
        </div>
        <div className="flex">
          {mobileProgressBarOptions.map((item, index) => (
            <div
              key={index}
              style={{ opacity: item.opacity }}
              className="bg-lightGreen w-[14px] h-[28px] mr-[2px] rounded-[4px]"
            />
          ))}
        </div>
      </div>
    </>
  );
};
