import { useWeb3React } from '@web3-react/core';

export const useDeactivationWallet = () => {
  const { account, connector } = useWeb3React();

  const deactivationWallet = async () => {
    if (!!account) {
      try {
        if (connector?.deactivate) {
          void connector.deactivate();
        } else {
          void connector.resetState();
        }
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  return {
    deactivationWallet,
  };
};
