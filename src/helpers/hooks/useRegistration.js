import React, { useState } from 'react';
import { useGetContract } from './useGetContract';
import { DEFAULT_GAS_LIMIT, ContractNames } from '../constants';

export const useRegistration = () => {
  const [isLoadingRegistration, setIsLoadingRegistration] = useState(false);
  const { getContract } = useGetContract();

  const registrationRefNumber = async (uplineKey) => {
    if (!isLoadingRegistration) {
      setIsLoadingRegistration(true);
      try {
        const contract = await getContract(ContractNames.MATRIX_B);

        let gas = null;
        try {
          gas = await contract.estimateGas.registrationRefNumber(uplineKey);
        } catch (e) {
          //
        }

        return await contract.registrationRefNumber(uplineKey, {
          gasLimit: DEFAULT_GAS_LIMIT,
        });
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      } finally {
        setIsLoadingRegistration(false);
      }
    }
  };

  return {
    registrationRefNumber,
    isLoadingRegistration,
  };
};
