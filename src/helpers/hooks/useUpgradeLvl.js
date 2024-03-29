import React, { useState } from 'react';
import { useGetContract } from './useGetContract';
import { DEFAULT_GAS_LIMIT, ContractNames } from '../constants';

export const useUpgradeLvl = () => {
  const [isLoadingUpgrade, setIsLoadingUpgrade] = useState(false);
  const { getContract } = useGetContract();

  const upgradeLvl = async (level = 2, count = 1) => {
    if (!isLoadingUpgrade) {
      setIsLoadingUpgrade(true);
      try {
        const contract = await getContract(ContractNames.MATRIX_B);

        let gas = null;
        try {
          gas = await contract.estimateGas.buyNewLevel(level);
        } catch (e) {
          //
        }

        const result = await contract.buyNewLevel(level, {
          gasLimit: DEFAULT_GAS_LIMIT,
        });
        return result;
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      } finally {
        setIsLoadingUpgrade(false);
      }
    }
  };

  return {
    upgradeLvl,
    isLoadingUpgrade,
  };
};
