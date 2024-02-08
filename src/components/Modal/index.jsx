import React from 'react';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import clsx from 'clsx';

export const Modal = ({ isOpened, onClose, children, className, isDisableOnClose, withoutClose }) => {
  const preventDefaultCallBack = (callback) => (e) => {
    e.preventDefault();

    callback && callback(e);
  };

  return (
    <DialogOverlay
      className="header-dialog-overlay !backdrop-blur-[15px] sm:flex sm:flex-col sm:!justify-end  "
      isOpen={isOpened}
      as="div"
      onClick={!isDisableOnClose && preventDefaultCallBack(onClose)}
    >
      <DialogContent
        className={clsx(
          className,
          'flex self-center justify-center sm:m-0 sm:w-screen sm:max-w-full relative sm:self-end sm:-mb-5',
        )}
        as="div"
        aria-label="modal"
      >
        {children}

        {!isDisableOnClose && (
          <div
            className={`${withoutClose && "hidden"} flex right-8 top-8 cursor-pointer w-[30px] h-[30px] absolute sm:right-[17px]`}
            onClick={preventDefaultCallBack(onClose)}
            onTouchEnd={preventDefaultCallBack(onClose)}
          >
            <img className="h-[30px] w-[30px]" src="/icons/modal/closeIcon.svg" />
          </div>
        )}
      </DialogContent>
    </DialogOverlay>
  );
};
