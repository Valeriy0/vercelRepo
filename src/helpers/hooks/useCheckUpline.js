import { useState } from 'react';
import { CHECK_UPLINE_ADDRESS, CHECK_UPLINE_REFNUMBER } from '../graphRequests';
import { useLazyQuery } from '@apollo/client';
import { getAddress } from '../format';

export const useModal = () => {
  const [isAllowToSet, setAllowToSet] = useState(null);

  const [callUplineAddress, propsAddress] = useLazyQuery(CHECK_UPLINE_ADDRESS, {
    variables: { user: null },
    fetchPolicy: 'cache-and-network',
  });
  const [callUplineNumber, propsNumber] = useLazyQuery(CHECK_UPLINE_REFNUMBER, {
    variables: { user: null },
    fetchPolicy: 'cache-and-network',
  });

  const checkUpline = (uplineData) => {
    if (getAddress()) {
      try {
        
      } catch (e) {

      }
    } else {

    }
  };

  const { loadingAddress, dataAddress, calledAddress } = propsAddress ?? {};
  const { loadingNumber, dataNumber, calledNumber } = propsNumber ?? {};

  return {
    isAllowToSet,
    onOpen,
    onClose,
  };
};
