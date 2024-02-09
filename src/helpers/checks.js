import config from './config';
import { MAX_VALUE, ContractNames, CONTRACT_NAMES } from './constants';
import { toWei } from 'helpers/numbers';

export const nameToContractConfig = {
  [ContractNames.FRGX]: 'contractFrgx',
  [ContractNames.MATRIX_B]: 'contractMatrixBase',
  [ContractNames.ROUTER]: 'router',
};

export const checkBalance = async ({ account, getContract, provider, frgxMinPrice = 10 }) => {
  try {
    if (!!account && !!provider) {
      const contract = await getContract(ContractNames.FRGX);
      let balanceFrgx = parseInt(await contract.balanceOf(account)) / 1e18;

      if (balanceFrgx >= Number(frgxMinPrice)) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    }
  } catch (e) {
    return Promise.reject();
  }
};

export const checkApprove = async ({ getContract, account, name = 'frgx', price }) => {
  const MIN_BALANCE = parseInt(MAX_VALUE, 16);
  try {
    const contractToken = await getContract(CONTRACT_NAMES.FRGX);
    const approveBalance = await contractToken.allowance(account, config[nameToContractConfig[name]]);

    const isAllowed = price ? parseInt(approveBalance) >= parseInt(toWei(price)) : approveBalance >= MIN_BALANCE;

    if (isAllowed) {
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  } catch (e) {
    return Promise.reject(e);
  }
};
