import React, { useMemo } from 'react';
import Lottie from 'lottie-react';
import loadingTransation from '../../animations/loadingTransaction.json';

export const TransactionStatuses = ({ transactionInfo }) => {
  const renderStatus = useMemo(() => {
    if (transactionInfo?.isWaiting) {
      return {
        title: 'Wait Please',
        textStyle: '!text-white',
        desc: 'Your transaction is being processed',
        img: () => {
          return <Lottie className="w-full" animationData={loadingTransation} loop={true} />;
        },
      };
    } else if (transactionInfo?.isSuccess) {
      return {
        icon: '/icons/transactions/successIcon.svg',
        title: 'Success',
        textStyle: '!text-successGreen',
        desc: '',
        img: () => {
          return <img className="w-[72.5%]" src="/icons/transactions/successStar.svg" />;
        },
      };
    } else if (transactionInfo?.isError) {
      return {
        icon: '/icons/transactions/errorIcon.svg',
        title: 'Error',
        textStyle: '!text-errorPink',
        desc: '',
        img: () => {
          return <img className="w-[72.5%]" src="/icons/transactions/errorStar.svg" />;
        },
      };
    } else {
      return null;
    }
  }, [transactionInfo]);

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="relative h-full flex items-center justify-center max-h-[264px] w-full">
        {renderStatus?.img()}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] flex flex-col text-center items-center justify-center space-y-2 ${renderStatus?.textStyle ? renderStatus?.textStyle : ''}`}>
          {!!renderStatus?.icon && <img src={renderStatus?.icon} />}
          <h3>{renderStatus?.title}</h3>
          <div className="h-[36px] flex items-center justify-center opacity-30 text-sm">{renderStatus?.desc}</div>
        </div>
      </div>
    </div>
  );
};
