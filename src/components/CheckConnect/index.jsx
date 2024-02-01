import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';
import Lottie from 'lottie-react';
import { WALLETS } from '../../connectors/wallets';
import { useTryActivation } from '../../helpers/hooks/useTryActivation';
import loadingQornexAnimation from '../../animations/loadingQornex.json';
import { updateUser } from '../../store/userSlice';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_DATA } from '../../helpers/graphRequests';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/userSlice/selectors';
import { useCheckReflink } from '../../helpers/hooks/useCheckReflink';
import { Register } from './Components/Register';

export const CheckConnect = () => {
  const dispatch = useDispatch();
  const { account } = useWeb3React();
  const currentUser = useSelector(getUser);
  const [callRequest, { called, loading, data }] = useLazyQuery(GET_USER_DATA, { variables: { user: null } });

  const isNeedToRegister = account && !data?.user?.id && !loading && called;
  const { uplineKey, checkReflink } = useCheckReflink();

  useEffect(() => {
    if (isNeedToRegister) {
      checkReflink();
    }
  }, [isNeedToRegister]);

  useEffect(() => {
    if (account) {
      callRequest({ variables: { user: account.toLocaleLowerCase() } }).then((result) => {
        if (!!result?.data?.user?.id) {
          const { id, refNumber, referral } = result?.data?.user;
          dispatch(updateUser({ id, refNumber, referral }));
        }
      });
    }
  }, [account]);

  const { tryActivation } = useTryActivation();

  const onWalletClick = (wallet) => () => {
    tryActivation(wallet.connector);
  };

  const styleBg = useMemo(() => {
    if (!account) {
      return {
        backgroundImage: 'url(/images/checkConnect/connectWallet.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    }
    if (!data?.user?.id) {
      return {
        backgroundImage: 'url(/images/checkConnect/connectWallet.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    }
    return null;
  });

  const renderContent = useMemo(() => {
    if (!account) {
      return (
        <div className="flex w-full flex-col max-w-[527px] space-y-[52px]">
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-medium poppins">Connect your wallet</h1>
            <span className="text-base text-white-500 font-light">
              Select your favourite wallet to log in Qornex.{' '}
              <a className="text-white hover:underline cursor-pointer">
                What is a <br />
                wallet?
              </a>
            </span>
          </div>
          <div className="flex w-full flex-col space-y-3.5 max-w-[460px] z-[11] ">
            {WALLETS?.map((wallet) => {
              return (
                <div
                  className="flex items-center space-x-5 rounded-[20px] border border-[1px] border-white-100 w-full p-2 cursor-pointer hover:bg-darkPurple"
                  onClick={onWalletClick(wallet)}
                  key={wallet.title}
                >
                  <img alt="walletIcon" src={wallet.icon} />
                  <div className="flex flex-col ml-5 space-y-3">
                    <span className="poppins text-medium text-white font-medium leading-none">{wallet.title}</span>
                    <span className="text-sm text-white-400 font-light leading-none">{wallet.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (isNeedToRegister) {
      return <Register uplineKey={uplineKey} />;
    }
    return null;
  }, [account, data, loading, called, isNeedToRegister, uplineKey]);

  if (currentUser?.id) {
    return null;
  }
  return (
    <div className="flex items-center justify-center absolute top-0 left-0 w-full h-screen bg-[#0B0B0B] z-[99999] overflow-hidden">
      <div style={styleBg} className="w-[41%] h-full" />
      <div className="z-[10] w-[59%] h-full flex flex-col items-center justify-center p-2.5">
        {account && (loading || !called) ? (
          <Lottie animationData={loadingQornexAnimation} loop={true} />
        ) : (
          renderContent
        )}
      </div>
      <img className="absolute bottom-0 right-0 z-[1]" src="/images/checkConnect/shadow.png" />
    </div>
  );
};
