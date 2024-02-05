import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Profit, LevelInfo, PartnersStructure } from './components';
import { PROGRAM_MAX_LEVELS, PROGRAM_NAMES } from '../../../helpers/constants';

export const ActiveLvl = ({ levelNumber, activationTimes, totalReward, matrixs, expiredAt }) => {
  const isMaxLvl = levelNumber === PROGRAM_MAX_LEVELS?.[PROGRAM_NAMES?.MATRIX_B];
  return (
        <Accordion
          allowZeroExpanded
          allowMultipleExpanded
          className={`flex flex-col w-full sm:rounded-3xl pb-6  ${
            isMaxLvl ? '' : 'mb-[-100px] pb-[100px]'
          }`}
        >
          <AccordionItem className="flex flex-col  ">
            <AccordionItemHeading className="w-full">
              <AccordionItemButton className="flex items-center justify-between w-full sm:flex-col sm:space-y-4 sm:items-start p-9 sm:p-0 sm:py-6 sm:px-4">
                <Profit
                  endTime={Number(expiredAt)}
                  levelNumber={levelNumber}
                  activationTimes={activationTimes}
                  totalReward={totalReward}
                />
                <LevelInfo levelNumber={levelNumber} />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="px-9 sm:px-4 pb-[34px]">
              <PartnersStructure matrixs={matrixs} />
            </AccordionItemPanel>
          </AccordionItem>
            
        </Accordion>
  );
};
