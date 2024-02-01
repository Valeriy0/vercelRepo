import { Connector } from '@web3-react/types';
import EventEmitter3 from 'eventemitter3';

import { getBestUrlMap, getChainsWithDefault } from './utils';

export const URI_AVAILABLE = 'URI_AVAILABLE';
const DEFAULT_TIMEOUT = 5000;

/**
 * Options to configure the WalletConnect connector.
 */

export class WalletConnect extends Connector {
  provider;
  events = new EventEmitter3();

  options;

  rpcMap;
  chains;
  defaultChainId;
  timeout;

  eagerConnection;

  constructor({ actions, options, defaultChainId, timeout = DEFAULT_TIMEOUT, onError }) {
    super(actions, onError);

    const { rpcMap, rpc, chains, ...rest } = options;

    this.options = rest;
    this.chains = chains;
    this.defaultChainId = defaultChainId;
    this.rpcMap = rpcMap || rpc;
    this.timeout = timeout;
  }

  disconnectListener = (error) => {
    this.actions.resetState();
    if (error) this.onError?.(error);
  };

  chainChangedListener = (chainId) => {
    this.actions.update({ chainId: Number.parseInt(chainId, 16) });
  };

  accountsChangedListener = (accounts) => {
    this.actions.update({ accounts });
  };

  URIListener = (uri) => {
    this.events.emit(URI_AVAILABLE, uri);
  };

  isomorphicInitialize(desiredChainId = this.defaultChainId) {
    if (this.eagerConnection) return this.eagerConnection;

    const rpcMap = this.rpcMap ? getBestUrlMap(this.rpcMap, this.timeout) : undefined;
    const chains = desiredChainId ? getChainsWithDefault(this.chains, desiredChainId) : this.chains;

    return (this.eagerConnection = import('@walletconnect/ethereum-provider').then(async (ethProviderModule) => {
      const provider = (this.provider = await ethProviderModule.default.init({
        ...this.options,
        chains,
        rpcMap: await rpcMap,
      }));

      return provider
        .on('disconnect', this.disconnectListener)
        .on('chainChanged', this.chainChangedListener)
        .on('accountsChanged', this.accountsChangedListener)
        .on('display_uri', this.URIListener);
    }));
  }

  /** {@inheritdoc Connector.connectEagerly} */
  async connectEagerly() {
    const cancelActivation = this.actions.startActivation();

    try {
      const provider = await this.isomorphicInitialize();
      // WalletConnect automatically persists and restores active sessions
      if (!provider.session) {
        throw new Error('No active session found. Connect your wallet first.');
      }
      this.actions.update({ accounts: provider.accounts, chainId: provider.chainId });
    } catch (error) {
      await this.deactivate();
      cancelActivation();
      throw error;
    }
  }

  /**
   * @param desiredChainId - The desired chainId to connect to.
   */
  async activate(desiredChainId) {
    const provider = await this.isomorphicInitialize(desiredChainId);

    if (provider.session) {
      if (!desiredChainId || desiredChainId === provider.chainId) return;
      // WalletConnect exposes connected accounts, not chains: `eip155:${chainId}:${address}`
      const isConnectedToDesiredChain = provider.session.namespaces.eip155.accounts.some((account) =>
        account.startsWith(`eip155:${desiredChainId}:`),
      );
      if (!isConnectedToDesiredChain) {
        if (this.options.optionalChains?.includes(desiredChainId)) {
          throw new Error(
            `Cannot activate an optional chain (${desiredChainId}), as the wallet is not connected to it.\n\tYou should handle this error in application code, as there is no guarantee that a wallet is connected to a chain configured in "optionalChains".`,
          );
        }
        throw new Error(
          `Unknown chain (${desiredChainId}). Make sure to include any chains you might connect to in the "chains" or "optionalChains" parameters when initializing WalletConnect.`,
        );
      }
      return provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${desiredChainId.toString(16)}` }],
      });
    }

    const cancelActivation = this.actions.startActivation();

    try {
      await provider.enable();
      this.actions.update({ chainId: provider.chainId, accounts: provider.accounts });
    } catch (error) {
      await this.deactivate();
      cancelActivation();
      throw error;
    }
  }

  async deactivate() {
    this.provider
      ?.removeListener('disconnect', this.disconnectListener)
      .removeListener('chainChanged', this.chainChangedListener)
      .removeListener('accountsChanged', this.accountsChangedListener)
      .removeListener('display_uri', this.URIListener)
      .disconnect();
    this.provider = undefined;
    this.eagerConnection = undefined;
    this.actions.resetState();
  }
}
