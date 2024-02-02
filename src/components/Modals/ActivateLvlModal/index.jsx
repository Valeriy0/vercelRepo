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

export const ActivateLvlModal = ({ openedModal, onClose, level }) => {
  const [count, setCount] = useState(1);
  const { account } = useWeb3React();
  const dispatch = useDispatch();
  const { onCallTransaction, transactionInfo } = useCallTransaction();
  const [callRequestMatrix] = useLazyQuery(GET_MATRIX_DATA, { variables: { user: null }, fetchPolicy: "network-only" });

  useEffect(() => {
    if (transactionInfo?.isSuccess && account) {
      callRequestMatrix({ variables: { user: account.toLocaleLowerCase() } }).then((result) => {
        if (!!result?.data?.user?.levels) {
          console.log(result?.data?.user?.levels, 'data after buy');
          dispatch(
            updateMatrixB({
              loading: result?.loading,
              called: result?.called,
              levels: result?.data?.user?.levels,
            }),
          );
          onClose();
        }
      });
    }
  }, [transactionInfo]);

  return (
    <Modal isOpened={openedModal} onClose={onClose}>
      <div className="flex p-8 flex-col space-y-5 shadow-item backdrop-blur-[100px] h-full sm:h-[512px] w-[376px] sm:w-full levelActivateModalBg items-start justify-start rounded-3xl space-y-11 sm:w-full sm:p-0 sm:px-4 sm:rounded-none sm:rounded-t-3xl sm:justify-end sm:pb-[121px] sm:space-y-10">
        <div className="flex absolute top-[-50px] left-1/2 -translate-x-1/2 sm:top-[-30px]">
          <img className="" src="/icons/modal/yellowStar.svg" />
          <span className="whitespace-nowrap absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[27.5px] poppins text-black font-medium">
            {level} Lvl
          </span>
        </div>
        <div className="flex justify-between w-full items-center">
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
          {/* <div className="bg-white-70 p-3 rounded-2xl w-full flex justify-between items-end">
            <div className="flex flex-col space-y-3">
              <span className="text-white opacity-50 text-sm font-light">You will get</span>
              <span className="text-xl text-white font-medium">
                {levelPriceList[level - 1].tokenCounts * count} QRX
              </span>
            </div>
            <button className="p-2 bg-white-70 rounded-xl">
              <img src="/icons/modal/arrowIcon.svg" />
            </button>
          </div> */}
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
        <BuyLevelButton onCallTransaction={onCallTransaction} level={level} count={count} />
      </div>
    </Modal>
  );
};
