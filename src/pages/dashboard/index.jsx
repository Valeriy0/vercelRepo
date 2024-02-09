import React, { useEffect } from 'react';
import { BreadCrumbs, LevelsStatus } from 'components';
import { UserProfit } from '../../features/dashboard/Main/UserProfit';
import { TokenOverview } from '../../features/dashboard/Main/TokenOverview';
import { UserInfo } from '../../features/dashboard/RightBar/UserInfo';
import { BaseLayout } from 'layouts';
import { getUser } from '../../store/userSlice/selectors';
import { useSelector } from 'react-redux';
import { useGetContract } from '../../helpers/hooks/useGetContract';
import { ContractNames } from '../../helpers/constants';
import { useWeb3React } from '@web3-react/core';

export const Dashboard = () => {
  const currentUser = useSelector(getUser);

  return (
    <BaseLayout>
      <BreadCrumbs title="Dashboard">
        <LevelsStatus />
      </BreadCrumbs>
      <div className="z-[10] grid grid-rows-8 grid-cols-3 w-full h-full gap-6 sm:grid-cols-1 z-[1] pt-6">
        <UserProfit />
        <UserInfo {...currentUser} />
        <TokenOverview />
      </div>
      <img
        className="absolute z-[0] top-[33%] left-0 w-full h-screen hidden sm:flex"
        src="/images/dashboard/shadowMob.png"
      />
      <img className="absolute top-0 z-[0] right-[10%] sm:hidden" src="/images/dashboard/topShadow.png" />
      <img className="absolute h-full z-[0] right-0 bottom-0 sm:hidden " src="/images/dashboard/rightShadow.png" />
    </BaseLayout>
  );
};
