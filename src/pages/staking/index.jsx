import React from 'react';
import { BreadCrumbs, LevelsStatus } from 'components';
import { BaseLayout } from 'layouts';
import { MainBanner } from '../../features/staking/MainBanner';
import { Statics } from '../../features/staking/Statics';
import { Farms } from '../../features/staking/Farms';

export const Staking = () => {

  return (
    <BaseLayout>
      <div className="flex items-center space-x-6 pb-6 relative sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-start">
        <BreadCrumbs title="Staking">
          <LevelsStatus />
        </BreadCrumbs>
      </div>
      <div className="flex flex-col space-y-14 sm:space-y-6">
        <MainBanner />
        <Statics />
        <Farms />
      </div>
    </BaseLayout>
  );
};
