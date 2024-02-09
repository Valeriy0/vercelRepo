import React, { useEffect, useRef, useState, useMemo } from 'react';
import { BreadCrumbs, LevelsStatus } from 'components';
import { BaseLayout } from 'layouts';
import { Claiming } from '../../features/farming/Claiming';
import { Statics } from '../../features/farming/Statics';
import { useGetContract } from '../../helpers/hooks/useGetContract';
import { CONTRACT_NAMES } from '../../helpers/constants';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';
import { LoadingAnimation } from '../../components';

export const Farming = () => {
  const tm = useRef(null);
  const [isLoadingFirst, setIsLoadingFirst] = useState(true);

  const [farmState, setFarmState] = useState({
    limit: 0,
    available: 0,
    historicalReceived: 0,
  });
  const { account } = useWeb3React();
  const { getContract } = useGetContract();

  const callReadInfo = async () => {
    if (isLoadingFirst) {
      setIsLoadingFirst(false);
    }

    try {
      const contract = await getContract(CONTRACT_NAMES.FARMING_POOL);
      const available = await contract.cumulativeDividendsOf(account);
      const limit = await contract.userRewardsLimit(account);
      const historicalReceived = await contract.historicalRewardReceived(account);

      setFarmState({
        available: parseFloat(Number(formatEther(available))?.toFixed(4)),
        limit: parseFloat(Number(formatEther(limit))?.toFixed(4)),
        historicalReceived: parseFloat(Number(formatEther(historicalReceived))?.toFixed(4)),
      });

      tm.current && clearTimeout(tm.current);
      tm.current = setTimeout(callReadInfo, 5000);
    } catch (e) {
      console.log(e);
      tm.current && clearTimeout(tm.current);
      tm.current = setTimeout(callReadInfo, 5000);
    }
  };

  useEffect(() => {
    if (account) {
      callReadInfo();
    }

    return () => {
      tm.current && clearTimeout(tm.current);
    };
  }, [account]);

  const renderContent = useMemo(() => {
    if (isLoadingFirst || !farmState) {
      return <LoadingAnimation />;
    }
    return (
      <div className="flex flex-col space-y-6">
        <Claiming farmState={farmState} isLoadingFirst={isLoadingFirst} />
        <Statics farmState={farmState} isLoadingFirst={isLoadingFirst} />
      </div>
    )
  }, [farmState, isLoadingFirst]);

  return (
    <BaseLayout>
      <div className="flex items-center space-x-6 pb-6 relative sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-start">
        <BreadCrumbs title="Farming">
          <LevelsStatus />
        </BreadCrumbs>
      </div>
      {renderContent}
    </BaseLayout>
  );
};
