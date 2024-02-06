import React from 'react';
import { BreadCrumbs, LevelsStatus } from 'components';
import { BaseLayout } from 'layouts';
import { Claiming } from '../../features/farming/Claiming';
import { Statics } from '../../features/farming/Statics';

export const Farming = () => {

  return (
    <BaseLayout>
      <div className="flex items-center space-x-6 pb-6 relative sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-start">
        <BreadCrumbs title="Farming">
          <LevelsStatus />
        </BreadCrumbs>
      </div>
      <div className="flex flex-col space-y-6">
        <Claiming />
        <Statics />
      </div>
    </BaseLayout>
  );
};
