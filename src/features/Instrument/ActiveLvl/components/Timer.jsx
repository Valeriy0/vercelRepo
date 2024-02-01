import React, { useCallback } from 'react';
import Countdown from 'react-countdown';
import { fromUnixTime } from 'date-fns';

export const Timer = ({ time, onComplete, isCompleted }) => {

  const renderer = useCallback(({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return null;
    } else {
      if (days > 0) {
        return (
          <>
            <span className="text-center min-w-[32px]">{days} days left</span>
          </>
        );
      } else {
        return (
          <div className={`flex items-center justify-center space-x-1`}>
            <span className="text-center min-w-[32px]">{hours} hours</span>
            <span className="text-center min-w-[32px]">{minutes} minutes</span>
            <span className="text-center min-w-[32px]">{seconds} second</span>
          </div>
        );
      }
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Countdown renderer={renderer} autoStart date={fromUnixTime(time)} onComplete={onComplete} overtime />
    </div>
  );
};
