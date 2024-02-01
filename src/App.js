import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { RoutesFind } from './RoutesFind';
import { ManageProvider } from './layouts';
import { getOrCreateStore } from './store';
import { Web3ReactProvider } from '@web3-react/core';
import { metaMask, metaMaskHooks, walletConnectV2Hooks, walletConnectV2 } from './connectors/wallets';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import config from './helpers/config';

const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
];

function App({ initialReduxState }) {
  const store = getOrCreateStore(initialReduxState);

  const client = new ApolloClient({
    uri: config.apiQraph,
    cache: new InMemoryCache(),
  });

  return (
    <Web3ReactProvider connectors={connectors}>
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <ManageProvider>
            <RoutesFind />
          </ManageProvider>
        </ApolloProvider>
      </ReduxProvider>
    </Web3ReactProvider>
  );
}

export default App;
