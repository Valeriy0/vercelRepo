import React, { useEffect, useState, useMemo } from 'react';
import { BreadCrumbs, LeftBar, LevelsStatus, Header } from 'components';
import { LevelActivating, ActiveLvl, NonActiveLvlList } from 'features/Instrument';
import { BaseLayout } from 'layouts';
import { PROGRAM_MAX_LEVELS, PROGRAM_NAMES } from '../../helpers/constants';
import { useWeb3React } from '@web3-react/core';
import Lottie from 'lottie-react';
import loadingQornexAnimation from '../../animations/loadingQornex.json';
import { useSelector } from 'react-redux';
import { getMatrixB } from '../../store/matrixBSlice/selectors';

export const Instrument = () => {
  const { account } = useWeb3React();
  const matrixInfo = useSelector(getMatrixB);

  const allActiveLvls = useMemo(() => {
    return !!matrixInfo?.levels &&
      matrixInfo?.levels.filter((item) => {
        if (Number(item?.expiredAt) !== 0) {
          return item;
        }
      });
  }, [matrixInfo]);

  const nextLvlToActivate =
    allActiveLvls.length < PROGRAM_MAX_LEVELS?.[PROGRAM_NAMES.MATRIX_B] ? allActiveLvls.length + 1 : null;

    console.log(nextLvlToActivate);

  const renderContent = useMemo(() => {
    if (matrixInfo?.loading) {
      return (
        <div className="flex items-center justify-center h-full w-full">
          <Lottie className="h-[150px]" animationData={loadingQornexAnimation} loop={true} />
        </div>
      );
    } else {
      return (
        <>
          <div className="flex flex-col items-start rounded-large sm:rounded-3xl instrument-main-bg border-[1px] border-white-100">
            {!!allActiveLvls &&
              allActiveLvls?.map((item, itemIndex) => (
                <ActiveLvl key={itemIndex} {...item} matrixs={item.matrixs[itemIndex]} />
              ))}
            {nextLvlToActivate && <LevelActivating nextLvl={nextLvlToActivate} />}
          </div>
          {nextLvlToActivate && <NonActiveLvlList activeLvls={allActiveLvls} nextLvl={nextLvlToActivate} />}
        </>
      );
    }
  }, [allActiveLvls, matrixInfo]);

  return (
      <BaseLayout>
        <div className="flex items-center space-x-6 pb-6 relative sm:flex-col sm:space-x-0 sm:space-y-4 sm:items-start">
          <BreadCrumbs title="Instrument">
            <LevelsStatus />
          </BreadCrumbs>
        </div>
        {renderContent}
        <img className="absolute right-0 z-[-1] top-0" src="/images/instrument/main/purpleShadow.png"/>
        <img className="absolute left-[8%]  z-[-1] top-0" src="/images/instrument/main/yellowShadow.png"/>
      </BaseLayout>
  );
};
