import React, { useEffect, useState, useMemo } from 'react';
import { BuyLevelButton } from '../../BuyLevelButton';
import { useCallTransaction } from '../../../helpers/hooks/useCallTransaction';
import { updateUser } from '../../../store/userSlice';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_DATA, GET_MATRIX_DATA } from '../../../helpers/graphRequests';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../store/userSlice/selectors';
import { useWeb3React } from '@web3-react/core';
import { Input, TransactionStatuses } from 'components';

export const Register = ({ uplineData }) => {
  const { onCallTransaction, transactionInfo } = useCallTransaction();
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const [upline, setUpline] = useState(uplineData ? uplineData : '');
  const [openedUplineInput, setOpenedUplineInput] = useState(false);
  const [callRequest] = useLazyQuery(GET_USER_DATA, { variables: { user: null }, fetchPolicy: 'cache-and-network' });

  useEffect(() => {
    if (transactionInfo?.isSuccess && account) {
      callRequest({ variables: { user: account.toLocaleLowerCase() } }).then((result) => {
        if (!!result?.data?.user?.id) {
          const { id, refNumber, referral } = result?.data?.user;
          dispatch(updateUser({ id, refNumber, referral }));
        }
      });
    }
  }, [transactionInfo, account]);

  const uplineInputRender = useMemo(() => {
    if (openedUplineInput) {
      return (
        <div className="relative flex items-center w-full">
          <Input placeholder="Enter ID" value={upline} onChange={(e) => setUpline(e.target.value)} />
          <button
            onClick={() => setOpenedUplineInput(false)}
            className="rounded-[12px] flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-500"
          >
            <img src="/icons/registration/rightBottom_arrow.svg" alt="" />
          </button>
        </div>
      );
    }
    return null;
  }, [openedUplineInput, upline]);

  return (
    <div className="flex flex-col justify-center w-full max-w-[460px] h-full text-white">
      {transactionInfo?.hash ? (
        <TransactionStatuses transactionInfo={transactionInfo} />
      ) : (
        <>
          <div className="flex flex-col mb-[56px] space-y-2">
            <h1 className="text-[40px] leading-[48px] font-semibold">Registration</h1>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                {!openedUplineInput && (
                  <>
                    <span className="text-white">
                      <span className="text-white-500 mr-1.5">{upline ? 'Your' : 'Set'} upline</span>
                      {upline}
                    </span>
                    <button
                      onClick={() => setOpenedUplineInput((temp) => !temp)}
                      disabled={transactionInfo?.isSuccess || transactionInfo?.isWaiting}
                    >
                      <img className="h-5 w-5" src="/icons/registration/pensil.svg" alt="" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-full">
            {uplineInputRender}
            <BuyLevelButton isFirstBuy onCallTransaction={onCallTransaction} text="Register" uplineData={upline} />
          </div>
        </>
      )}
    </div>
  );
};
