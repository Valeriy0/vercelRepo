// import { UnsupportedChainIdError } from '@web3-react/core';
// import { WalletConnect } from '@web3-react/walletconnect-v2';

export const useTryActivation = () => {
  const tryActivation = async (connector) => {
    // if (connector instanceof WalletConnect) {
    //   connector.walletConnectProvider = undefined;
    // }

    try {
      connector && (await connector.activate());
    } catch (e) {
      // if (e instanceof UnsupportedChainIdError) {
      //   callNotification({
      //     type: 'error',
      //     message: 'Unsupported network! Switch to Smart Chain',
      //     autoClose: false,
      //     toastId: 'unsupportedChainId',
      //   });
      // } else {
      //   console.log(e);
      // }
    }
  };

  return {
    tryActivation,
  };
};
