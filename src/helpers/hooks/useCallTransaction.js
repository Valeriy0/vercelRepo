import { useState } from 'react';

const initTransactionInfo = {
  hash: null,
  isWaiting: false,
  isError: false,
  isSuccess: false,
};

export const useCallTransaction = () => {
  const [transactionInfo, setTransactionInfo] = useState(initTransactionInfo);

  const resetTransactionInfo = () => {
    setTransactionInfo(initTransactionInfo);
  };

  const onCallTransaction = async (result) => {
    try {
      setTransactionInfo((prev) => ({
        ...prev,
        isSuccess: false,
        isError: false,
        isWaiting: true,
        hash: result?.hash,
      }));

      const waitResult = await result.wait();

      if (waitResult.status === 0) {
        setTransactionInfo((prev) => ({ ...prev, isSuccess: false, isError: true, isWaiting: false }));
      } else {
        setTransactionInfo((prev) => ({
          ...prev,
          isSuccess: true,
          isError: false,
          isWaiting: false,
          hash: waitResult.transactionHash,
        }));
      }
    } catch (e) {
      setTransactionInfo({ isSuccess: false, isError: false, isWaiting: false, data: null });
    }
  };

  return {
    transactionInfo,
    onCallTransaction,
    setTransactionInfo,
    resetTransactionInfo,
  };
};
