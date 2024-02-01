import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';
import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { UAParser } from 'ua-parser-js';

import config from '../helpers/config';
// import { WalletConnect } from '../libs/wc2';

export const supportedChainIds = [1, 56, 97];

export const RPC = {
  56: 'https://bsc-dataseed1.bnbchain.org/',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

export const [metaMask, metaMaskHooks] = initializeConnector((actions) => new MetaMask({ actions }));

export const [walletConnectV2, walletConnectV2Hooks] = initializeConnector(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: '85fd7aa40214224409524949cfa4968a',
        chains: [config.allowedChainId],
        optionalChains: [config.allowedChainId],
        showQrModal: true,
      },
    }),
);

export const injectedConnector = new InjectedConnector({
  supportedChainIds,
});

const UA = typeof window !== 'undefined' ? new UAParser(navigator.userAgent) : new UAParser('');

export const WALLETS = [
  {
    title: 'Trust Wallet',
    subtitle: 'DApp in app',
    connector: metaMask,
    icon: '/icons/walletsIcons/TW.svg',
  },
  {
    title: 'TokenPocket',
    subtitle: 'DApp in app',
    connector: metaMask,
    icon: '/icons/walletsIcons/TP.svg',
  },
  {
    title: 'MetaMask',
    subtitle: 'Desktop / DApp in app',
    connector: metaMask,
    icon: '/icons/walletsIcons/MT.svg',
  },
  {
    title: 'WalletConnect',
    subtitle: 'Any wallet and browser',
    connector: walletConnectV2,
    icon: '/icons/walletsIcons/WC.svg',
    disabled:
      (UA.getBrowser().name === 'Chrome WebView' || UA.getBrowser().name === 'Chrome') &&
      parseInt(UA?.getBrowser?.()?.major) <= 87,
  },
];
