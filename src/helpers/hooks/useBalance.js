import { useState } from 'react';
import { CONTRACT_NAMES } from '../constants';
import { useGetContract } from './useGetContract';
import { useWeb3React } from '@web3-react/core';

export const useBalance = () => {
  const [balance, setBalance] = useState(null);
  const [isLoadingBalance, setIsLoadingBalance] = useState(true);
  const { getContract } = useGetContract();
  const { account } = useWeb3React();

  const fetchBalance = async () => {
    try {
      const contract = await getContract(CONTRACT_NAMES.FRGX);
      const resultBalanceFRGX = await contract?.balanceOf(account);
      console.log(contract, resultBalanceFRGX, account);
      const balanceFrgx = parseInt(resultBalanceFRGX) / 1e18;
      setIsLoadingBalance(false);
      setBalance(balanceFrgx.toFixed(0));
    } catch (e) {
      console.log(e);
    }
  };
  return {
    balance,
    isLoadingBalance,
    fetchBalance,
  };
};
