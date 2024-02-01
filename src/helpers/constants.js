import { BigNumber } from '@ethersproject/bignumber';

export const MAX_VALUE = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
export const DEFAULT_GAS_LIMIT = BigNumber.from(2000000);

export const ContractNames = {
  MATRIX_B: 'matrixBase',
  FRGX: 'frgx',
  ROUTER: 'router',
};

export const PROGRAM_NAMES = {
  MATRIX_B: 'matrixBase',
  FRGX: 'frgx',
};

export const CONTRACT_NAMES = {
  MATRIX_B: 'matrixBase',
  FRGX: 'frgx',
  ROUTER: 'router',
};

export const nameToType = {
  [PROGRAM_NAMES.MATRIX_B]: CONTRACT_NAMES.MATRIX_B,
};

export const PROGRAM_MAX_LEVELS = {
  [PROGRAM_NAMES.MATRIX_B]: 9,
};

export const PROGRAM_PRICES = {
  [PROGRAM_NAMES.MATRIX_B]: {
    1: 30,
    2: 55,
    3: 100,
    4: 175,
    5: 320,
    6: 550,
    7: 1100,
    8: 2000,
    9: 3500,
    // 10: 6000,
  },
};

export const PROGRAM_EXPIRED = {
  [PROGRAM_NAMES.MATRIX_B]: {
    1: 14,
    2: 16,
    3: 18,
    4: 22,
    5: 28,
    6: 36,
    7: 46,
    8: 58,
    9: 70,
    // 10: 82,
  },
};

export const PROGRAM_COMMISIONS = {
  [PROGRAM_NAMES.MATRIX_B]: {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
  },
};

export const ADD_CHAIN_ETHS_PARAMS = {
  56: {
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com'],
    chainId: '0x38',
  },
  97: {
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-2-s3.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    chainId: '0x61',
  },
};
