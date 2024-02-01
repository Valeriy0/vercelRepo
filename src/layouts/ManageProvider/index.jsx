import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import { metaMask } from '../../connectors/wallets';
import config from '../../helpers/config';
import { formatEther } from '@ethersproject/units';
import { CheckConnect } from '../../components';

const addChainEthsParams = {
  56: {
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com'],
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
  },
};

export const ManageProvider = ({ children }) => {
  const { isActive, chainId, account, provider } = useWeb3React();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoaded(true);
    }
  }, []);

  const onSwitchChain = async () => {
    if (Number(chainId) !== Number(config.allowedChainId) && !!account) {
      const chainIntoHex = Number(config.allowedChainId) === 56 ? '0x38' : '0x61';
      try {
        await provider?.send('wallet_switchEthereumChain', [{ chainId: chainIntoHex }, account]);
      } catch (e) {
        if (e.code === 4902) {
          await provider?.send('wallet_addEthereumChain', [
            {
              chainId: chainIntoHex,
              ...addChainEthsParams[config.allowedChainId],
            },
          ]);
        }
      }
    }
  };

  useEffect(() => {
    onSwitchChain();
  }, [provider, chainId, account]);

  useEffect(() => {
    if (isActive) {
      toast.dismiss('unsupportedChainId');
    }
  }, [chainId, isActive]);

  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask');
    });
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
        {children}
        <CheckConnect />
      </>
    );
  }
  return null;
};
