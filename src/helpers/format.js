import { keccak256 } from '@ethersproject/keccak256';
import { arrayify } from '@ethersproject/bytes';
import { _base36To16 } from '@ethersproject/bignumber';

function getChecksumAddress(address) {
  address = address.toLowerCase();

  const chars = address.substring(2).split('');

  const expanded = new Uint8Array(40);
  for (let i = 0; i < 40; i++) {
    expanded[i] = chars[i].charCodeAt(0);
  }

  const hashed = arrayify(keccak256(expanded));

  for (let i = 0; i < 40; i += 2) {
    if (hashed[i >> 1] >> 4 >= 8) {
      chars[i] = chars[i].toUpperCase();
    }
    if ((hashed[i >> 1] & 0x0f) >= 8) {
      chars[i + 1] = chars[i + 1].toUpperCase();
    }
  }

  return '0x' + chars.join('');
}

export function getAddress(address) {
  let result = null;

  if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    // Missing the 0x prefix
    if (address.substring(0, 2) !== '0x') {
      address = '0x' + address;
    }

    result = getChecksumAddress(address);
  } else if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    result = _base36To16(address.substring(4));
    while (result.length < 40) {
      result = '0' + result;
    }
    result = getChecksumAddress('0x' + result);
  }

  return result;
}

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
