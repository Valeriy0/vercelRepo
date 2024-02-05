import React, { useEffect, useState, useMemo } from 'react';
import { BaseLayout } from '../../layouts/BaseLayout';
import { BreadCrumbs } from 'components';
import { Input } from '../../components/Input';


export const Settings = () => {
    const settingsList = [
        {
            title: "Username",
            placeholder: "Enter username",
        },
        {
            title: "Email Address",
            placeholder: "Enter your email",
        },
        {
            title: "X (Twitter)",
            placeholder: "Enter your twitter",
        },
        {
            title: "Instagram",
            placeholder: "Enter your instagram",
        },
    ]

  return (
    <BaseLayout >
            <div className="flex flex-col items-start pb-6 relative space-y-9 sm:flex-col sm:space-x-0 sm:space-y-8 sm:items-start z-[1] ">
                <BreadCrumbs title="Settings" />
                <div className="flex space-x-[80px] sm:flex-col-reverse sm:space-x-0 sm:w-full">
                    <div className="flex flex-col space-y-12 sm:pt-8 sm:space-y-8">
                        <div className="flex flex-col space-y-8 ">
                        {settingsList?.map((item, itemIndex) => {
                            return (
                            <div key={itemIndex} className="flex flex-col space-y-4 sm:space-y-3 min-w-[450px] sm:min-w-full">
                                <span className="poppins text-lg text-white">{item?.title}</span>
                                <Input placeholder={item?.placeholder}/>
                            </div>
                            );
                        })}
                        </div>
                        <button className="flex items-center justify-center bg-secondary-500 px-5 h-[48px] rounded-2xl max-w-[150px] sm:max-w-full">
                            <span className="text-base text-white poppins">Save settings</span>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-6 sm:space-y-4">
                        <span className="poppins text-lg text-white">Profile Image</span>
                        <div className="bg-white-30 w-[152px] h-[152px] p-2.5 rounded-3xl">
                            <button className="flex items-center justify-center w-full h-full bg-white-70 rounded-2xl">
                                <img src="/icons/settings/pencil.svg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute h-full top-0 right-0 sm:hidden" src="/images/settings/topShadow.png"/>
            <img className="absolute h-full bottom-0 right-0 " src="/images/settings/bottomShadow.png"/>
    </BaseLayout>
  );
};
