import React, { useEffect } from 'react';
import { BuyLevelButton } from '../../BuyLevelButton';
import { useCallTransaction } from '../../../helpers/hooks/useCallTransaction';
import { updateUser } from '../../../store/userSlice';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_DATA } from '../../../helpers/graphRequests';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../store/userSlice/selectors';
import { useWeb3React } from '@web3-react/core';

export const Register = ({ uplineKey }) => {
  const { onCallTransaction, transactionInfo } = useCallTransaction();
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const [callRequest, { called, loading, data }] = useLazyQuery(
    GET_USER_DATA,
    { variables: { user: null } }
  );

  console.log(transactionInfo);

  useEffect(() => {
    if (transactionInfo?.isSuccess) {
      callRequest({ variables: { user: account.toLocaleLowerCase() } }).then((result) => {
        if (!!result?.data?.user?.id) {
          console.log(result);
          const { id, refNumber, referral } = result?.data?.user;
          dispatch(updateUser({ id, refNumber, referral }));
        }
      });
    }
  }, [transactionInfo]);

  return (
    <div className="flex flex-col w-full max-w-[460px] text-white">
      <div className="flex flex-col mb-[56px] space-y-2">
        <h1 className="text-[40px] leading-[48px] font-semibold">Registration</h1>
        <div className="flex flex-col">
          <div className="flex items-center space-x-1.5">
            <span className="text-white">
              <span className="text-white-500 mr-1.5">You upline key</span>
              {uplineKey}
            </span>
            <button disabled={transactionInfo?.isSuccess || transactionInfo?.isWaiting}>
              <img className="h-5 w-5" src="/icons/registration/pensil.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <BuyLevelButton onCallTransaction={onCallTransaction} text="Register" uplineKey={uplineKey} />
    </div>
  );
};
