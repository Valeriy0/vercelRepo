import { useMemo, useState } from 'react';
import { STATUSES_ENUM, useChecks } from './useChecks';
import { MAX_VALUE, CONTRACT_NAMES } from '../constants';
import { callNotification } from '../notification';
import { nameToContractConfig } from '../checks';
import config from '../config';
import { isNil, reject } from 'ramda';

const initialApproveInfo = {
  isCallApprove: false,
  isApproved: false,
  isWaitingApprove: false,
};

export const useApproveWithChecks = ({ callbacks, name, getContract }) => {
  const { statuses, callChecks, statusMeta } = useChecks(callbacks);
  const [approveInfo, setApproveInfo] = useState({ ...initialApproveInfo });

  const callApprove = async () => {
    setApproveInfo(() => ({ ...initialApproveInfo, isCallApprove: true }));
    try {
      const contractToken = await getContract(CONTRACT_NAMES.FRGX);

      const result = await contractToken.approve(config[nameToContractConfig[name]], MAX_VALUE);

      setApproveInfo((prev) => ({ ...prev, isWaitingApprove: true }));

      callNotification({ type: 'info', message: 'Transaction was sent. Please wait', autoClose: 10000 });

      await result.wait();

      setApproveInfo((prev) => ({ ...prev, isApproved: true }));

      callChecks();
    } catch (e) {
      callNotification({ type: 'error', message: 'Transaction rejected by user' });
    } finally {
      setApproveInfo({ ...initialApproveInfo });
    }
  };

  const statusApproveForCheckApprove = useMemo(() => {
    if (approveInfo.isWaitingApprove) {
      return STATUSES_ENUM.WAIT;
    }

    if (approveInfo.isApproved) {
      return STATUSES_ENUM.SUCCESS;
    }

    return statuses.checkApprove;
  }, [statuses, approveInfo]);

  return {
    statuses: reject(isNil, { ...statuses, checkApprove: statusApproveForCheckApprove }),
    callChecks,
    statusMeta,
    callApprove,
    approveInfo,
  };
};
