import React, { useEffect, useState, useMemo } from 'react';
import { BreadCrumbs, LeftBar, LevelsStatus, Header } from 'components';
import { LevelActivating, ActiveLvl, NonActiveLvlList } from 'features/Instrument';
import { BaseLayout } from 'layouts';
import { PROGRAM_MAX_LEVELS, PROGRAM_NAMES } from '../../helpers/constants';
import { useWeb3React } from '@web3-react/core';
import Lottie from 'lottie-react';
import loadingQornexAnimation from '../../animations/loadingQornex.json';

import { GET_MATRIX_DATA } from '../../helpers/graphRequests';
import { useLazyQuery } from '@apollo/client';

export const Instrument = () => {
  const { account } = useWeb3React();

  useEffect(() => {
    if (account) {
      callRequest({ variables: { user: account.toLocaleLowerCase() } });
    }
  }, [account]);

  const [callRequest, { called, loading, data }] = useLazyQuery(
    GET_MATRIX_DATA,
    { variables: { user: null } }
  );

  const allActiveLvls =
    !!data?.user?.levels &&
    data?.user?.levels.filter((item) => {
      if (Number(item?.expiredAt) !== 0) {
        return item;
      }
    });

  const nextLvlToActivate =
    allActiveLvls.length < PROGRAM_MAX_LEVELS?.[PROGRAM_NAMES.MATRIX_B] ? allActiveLvls.length + 1 : null;

  const renderContent = useMemo(() => {
    if (loading || !called) {
      return (
        <div className="flex items-center justify-center h-full w-full">
          <Lottie className="h-[150px]" animationData={loadingQornexAnimation} loop={true} />
        </div>
      );
    } else {
      return (
        <>
          <div className="flex flex-col items-start">
            {!!allActiveLvls &&
              allActiveLvls?.map((item, itemIndex) => (
                <ActiveLvl key={itemIndex} {...item} matrixs={item.matrixs[itemIndex]} />
              ))}
            {nextLvlToActivate && <LevelActivating nextLvl={nextLvlToActivate} />}
          </div>
          <NonActiveLvlList activeLvls={allActiveLvls} nextLvl={nextLvlToActivate} />
        </>
      );
    }
  }, [loading, called]);

  return (
    <BaseLayout>
      <div className="flex items-center space-x-6 pb-6 sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-start">
        <BreadCrumbs title="Instrument">
          <LevelsStatus />
        </BreadCrumbs>
      </div>
      {renderContent}
    </BaseLayout>
  );
};
