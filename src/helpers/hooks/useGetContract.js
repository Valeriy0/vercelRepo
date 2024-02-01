import { useWeb3React } from '@web3-react/core';
import config from '../config';
import { Contract } from '@ethersproject/contracts';
import { ContractNames } from '../constants';

export const useGetContract = () => {
  const { account, provider } = useWeb3React();

  const types = {
    [ContractNames?.MATRIX_B]: [config.contractMatrixBase, config.contractMatrixBaseAbi],
    [ContractNames?.FRGX]: [config.contractFrgx, config.contractFrgxAbi],
  };

  const getContract = (type) => {
    return new Promise(function (resolve, rejected) {
      if (types[type] && provider) {
        const contract = new Contract(...types[type], provider?.getSigner(account).connectUnchecked() || provider);

        resolve(contract);
      } else {
        rejected('error init contract: ' + type);
      }
    });
  };

  return {
    getContract,
  };
};
