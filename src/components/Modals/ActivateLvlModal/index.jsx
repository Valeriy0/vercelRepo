import { React, useState, useEffect, useMemo } from 'react';
import { Modal } from '../../Modal';
import { PROGRAM_EXPIRED, PROGRAM_NAMES } from '../../../helpers/constants';
import { AnimatedCounter } from 'components/AnimatedCounter';
import { BuyLevelButton } from '../../BuyLevelButton';
import { useCallTransaction } from '../../../helpers/hooks/useCallTransaction';
import { useDispatch } from 'react-redux';
import { updateMatrixB } from '../../../store/matrixBSlice';
import { useLazyQuery } from '@apollo/client';
import { GET_MATRIX_DATA } from '../../../helpers/graphRequests';
import { useWeb3React } from '@web3-react/core';
import { TransactionStatuses } from '../../TransactionStatuses';
import { EXPLORER_URL } from '../../../helpers/constants';

export const ActivateLvlModal = ({ openedModal, onClose, level }) => {
  const [count, setCount] = useState(1);
  const { account } = useWeb3React();
  const dispatch = useDispatch();
  const { onCallTransaction, transactionInfo, resetTransactionInfo } = useCallTransaction();
  const [callRequestMatrix] = useLazyQuery(GET_MATRIX_DATA, { variables: { user: null }, fetchPolicy: 'no-cache' });

  const closeModal = () => {
    if (transactionInfo?.isSuccess && account) {
      callRequestMatrix({ variables: { user: account.toLocaleLowerCase() } }).then((result) => {
        if (!!result?.data?.user?.levels) {
          dispatch(
            updateMatrixB({
              loading: result?.loading,
              called: result?.called,
              levels: result?.data?.user?.levels,
            }),
          );
        }
      });
    }
    onClose();
    resetTransactionInfo();
  };

  const renderContent = useMemo(() => {
    if (transactionInfo?.hash) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <TransactionStatuses transactionInfo={transactionInfo} />
        </div>
      );
    } else {
      return (
        <>
          <div className="flex-1 flex justify-between w-full items-center">
            <div className="flex justify-center items-center w-[57px] h-[28px] bg-primary-500 rounded-[40px]">
              <span className="poppins text-primary-950 font-medium leading-none">{count} x</span>
            </div>
            <span className="text-white poppins text-[80px] font-medium sm:leading-none">
              <AnimatedCounter endNum={PROGRAM_EXPIRED?.[PROGRAM_NAMES.MATRIX_B][level] * count} />
            </span>
            <div className="flex justify-center items-center w-[57px] h-[28px] bg-primary-500 rounded-[40px]">
              <span className="poppins text-primary-950 font-medium leading-none">Days</span>
            </div>
          </div>

          <div className="flex flex-col space-y-5 w-full">
            <div className="bg-white-70 p-3 rounded-2xl w-full flex justify-between items-end">
              <div className="flex justify-between space-x-3 w-full font-medium">
                {new Array(5).fill({})?.map((item, itemIndex) => {
                  const isActive = itemIndex + 1 === count;
                  const handleClick = () => {
                    setCount(itemIndex + 1);
                  };
                  return (
                    <button
                      key={itemIndex}
                      onClick={handleClick}
                      className={`rounded-xl p-2 ${isActive ? 'bg-primary-500 text-black' : 'bg-none text-white'}`}
                    >
                      <span className="text-lg p-2">{itemIndex + 1}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      );
    }
  }, [transactionInfo, count, level]);

  const renderButton = useMemo(() => {
    if (transactionInfo?.hash) {
      let hash = EXPLORER_URL + '/tx/' + transactionInfo?.hash;
      return (
        <a
          href={hash}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center text-white-300 poppins font-medium rounded-[16px] bg-white-50 py-5 w-full"
        >
          Explore transaction
        </a>
      );
    }
    return <BuyLevelButton onCallTransaction={onCallTransaction} level={level} count={count} />;
  }, [transactionInfo, level, count]);

  const statusStyle = () => {
    if (transactionInfo?.isSuccess) {
      return {
        bg: 'activateModalBg_success',
        icon: '/icons/transactions/modal/successStar.svg',
      };
    }
    if (transactionInfo?.isError) {
      return {
        bg: 'activateModalBg_error',
        icon: '/icons/transactions/modal/errorStar.svg',
      };
    }
    return {
      bg: 'activateModalBg',
      icon: '/icons/transactions/modal/baseStar.svg',
    };
  };

  return (
    <Modal isOpened={openedModal} onClose={closeModal}>
      <div
        className={`flex p-8 flex-col space-y-5 shadow-item backdrop-blur-[100px] h-[460px] sm:h-[512px] w-[376px] sm:w-full ${
          statusStyle()?.bg
        } items-start justify-start rounded-3xl space-y-11 sm:w-full sm:p-0 sm:px-4 sm:rounded-none sm:rounded-t-3xl sm:justify-end sm:pb-[121px] sm:space-y-10`}
      >
        <div className="flex absolute top-[-50px] left-1/2 -translate-x-1/2 sm:top-[-30px]">
          <img className="" src={statusStyle()?.icon} />
          <span className="whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[27.5px] poppins text-black font-medium">
            {level} Lvl
          </span>
        </div>
        {renderContent}
        {renderButton}
      </div>
    </Modal>
  );
};
