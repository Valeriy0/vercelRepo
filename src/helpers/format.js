export const shortenAddress = (address, chars = 4) => {
  try {
    return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
  } catch (error) {
    // throw Error(`Invalid 'address' parameter '${address}'.`);
  }
};

const providerErrors = {
  userRejectedRequest: 4001,
  unauthorized: 4100,
  unsupportedMethod: 4200,
  disconnected: 4900,
  chainDisconnected: 4901,
};

export const parseErrorToUserReadableMessage = (error) => {
  if (error?.code) {
    switch (error.code) {
      case providerErrors.userRejectedRequest:
        return 'The request was rejected. Try again and sign transaction.';
      case providerErrors.unauthorized:
        return 'The requested account and/or method has not been authorized by the user.';
      case providerErrors.unsupportedMethod:
        return 'The requested method is not supported by this Ethereum provider.';
      case providerErrors.disconnected:
        return 'The provider is disconnected from all chains.';
      case providerErrors.chainDisconnected:
        return 'The provider is disconnected from the specified chain.';
    }
  }

  const reason =
    error.reason ?? error?.data?.message ?? error?.response?.data?.message ?? error?.response?.message ?? error.message;

  if (error?.data?.message?.toLowerCase?.()?.includes('insufficient funds')) {
    return 'Insufficient funds. Please top up your wallet.';
  }

  return reason;
};
