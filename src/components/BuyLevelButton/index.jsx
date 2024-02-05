import React, { useEffect, useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';
import { checkBalance, checkApprove } from 'helpers/checks';
import { STATUSES_ENUM } from 'helpers/hooks/useChecks';
import { useGetContract } from 'helpers/hooks/useGetContract';
import { CONTRACT_NAMES, PROGRAM_NAMES, PROGRAM_PRICES, SERVICE_FEE } from 'helpers/constants';
import { useApproveWithChecks } from 'helpers/hooks/useApproveWithChecks';
import { useRegistration } from '../../helpers/hooks/useRegistration';
import { useUpgradeLvl } from '../../helpers/hooks/useUpgradeLvl';
import { useApolloClient } from '@apollo/client';

const getChecksCallbacks = (web3Props, getContract, level = 1) => {
  const contractType = CONTRACT_NAMES.MATRIX_B;
  const funcProps = { getContract, ...web3Props, contractType };

  return {
    name: PROGRAM_NAMES.MATRIX_B,
    getContract,
    callbacks: [
      {
        func: checkBalance,
        key: 'checkBalance',
        funcProps: {
          ...funcProps,
          frgxMinPrice: PROGRAM_PRICES[PROGRAM_NAMES.MATRIX_B][level],
        },
      },
      {
        func: checkApprove,
        key: 'checkApprove',
        funcProps: {
          ...funcProps,
          name: CONTRACT_NAMES.MATRIX_B,
          price: PROGRAM_PRICES[PROGRAM_NAMES.MATRIX_B][level],
        },
      },
    ],
  };
};

export const BuyLevelButton = ({
  onCallTransaction,
  text = 'Activate',
  buttonType = 'base',
  count = 1,
  level = 1,
  uplineData = null,
  isFirstBuy = false,
}) => {
  const web3Props = useWeb3React();
  const client = useApolloClient();
  const { account, active, chainId } = web3Props;
  const { getContract } = useGetContract();
  const { registration } = useRegistration();
  const { upgradeLvl } = useUpgradeLvl();
  const { statuses, callChecks, approveInfo, callApprove } = useApproveWithChecks(
    getChecksCallbacks(web3Props, getContract, level * count),
  );
  const isSuccessAll = Object.values(statuses).every((status) => status === STATUSES_ENUM.SUCCESS);
  const isLoadingAny = Object.values(statuses).some((status) => status === STATUSES_ENUM.WAIT);

  useEffect(() => {
    client.resetStore();
    callChecks();
  }, [active, account, chainId, count]);

  const handleClickAction = () => {
    if (isSuccessAll) {
      if (level === 1 && isFirstBuy) {
        registration(uplineData).then((result) => {
          onCallTransaction(result);
        });
      } else {
        upgradeLvl(level).then((result) => {
          onCallTransaction(result);
        });
      }
    }

    if (statuses.checkApprove === STATUSES_ENUM.ERROR) {
      callApprove();
    }
  };

  const renderButtonAction = useMemo(() => {
    if (isLoadingAny) {
      return <span className="text-black poppins font-medium">Loading ...</span>;
    }

    if (isSuccessAll) {
      return (
        <span className="text-black poppins font-medium">
          {text} for {PROGRAM_PRICES?.[PROGRAM_NAMES.MATRIX_B]?.[level] * count} FRGX
        </span>
      );
    }

    if (statuses.checkApprove === STATUSES_ENUM.ERROR) {
      return <span className="text-black poppins font-medium">Approve FRGX</span>;
    }

    if (statuses.checkBalance === STATUSES_ENUM.ERROR) {
      return <span className="text-black poppins font-medium">Insufficient Balance</span>;
    }

    return null;
  }, [statuses, count, isSuccessAll, isLoadingAny, text]);

  return (
    <button onClick={() => handleClickAction()} className="rounded-[16px] bg-primary-500 text-primary-950 py-5 w-full">
      {renderButtonAction}
    </button>
  );
};
