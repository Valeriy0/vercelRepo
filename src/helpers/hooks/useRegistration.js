import React, { useState } from 'react';
import { useGetContract } from './useGetContract';
import { DEFAULT_GAS_LIMIT, ContractNames } from '../constants';
import { getAddress } from '../format';

export const useRegistration = () => {
  const [isLoadingRegistration, setIsLoadingRegistration] = useState(false);
  const { getContract } = useGetContract();

  const registration = async (uplineData) => {
    if (!isLoadingRegistration) {
      setIsLoadingRegistration(true);

      const isAddress = !!getAddress(uplineData);

      if (isAddress) {
        try {
          const contract = await getContract(ContractNames.MATRIX_B);

          let gas = null;
          try {
            gas = await contract.estimateGas.registration(uplineData);
          } catch (e) {
            //
          }

          return await contract.registration(uplineData, {
            gasLimit: DEFAULT_GAS_LIMIT,
          });
        } catch (e) {
          console.log(e);
          return Promise.reject(e);
        } finally {
          setIsLoadingRegistration(false);
        }
      } else {
        try {
          const contract = await getContract(ContractNames.MATRIX_B);
          const upline = Number.isFinite(uplineData) ? uplineData : 0;

          let gas = null;
          try {
            gas = await contract.estimateGas.registrationRefNumber(upline);
          } catch (e) {
            //
          }

          return await contract.registrationRefNumber(upline, {
            gasLimit: DEFAULT_GAS_LIMIT,
          });
        } catch (e) {
          console.log(e);
          return Promise.reject(e);
        } finally {
          setIsLoadingRegistration(false);
        }
      }
    }
  };

  return {
    registration,
    isLoadingRegistration,
  };
};
