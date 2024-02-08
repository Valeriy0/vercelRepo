import React from "react";
import { useState } from "react";

export const Days = () => {
    const stakingDays = [
        {
            days: 30,
        },
        {
            days: 60,
        },
        {
            days: 90,
        },
        {
            days: 180,
        },
        {
            days: 360,
        },
    ]

    const [currentDay, setCurrentDay] = useState(0);

    return (
        <div className="flex flex-col space-y-6 w-full">
            <div className="flex flex-col space-y-2 w-full ">
                <span className="text-xs text-white-500 font-light">Stake, <span className="text-white">Days</span></span>
                <div className="flex justify-between w-full ">
                {stakingDays?.map((item, itemIndex) => {
                    const isActive = itemIndex === currentDay;
                    return (
                        <button 
                        onClick={() => {setCurrentDay(itemIndex)}} 
                        className={`${isActive ? "bg-[#EBFF29] text-black" : "bg-white-70 text-white-500"} rounded-xl min-w-[86px] py-2 sm:min-w-[62px]`} key={itemIndex}>
                            <span className="text-base ">{item?.days}</span>
                        </button>
                    )
                })}
                </div>
            </div>
            <button className="flex items-center justify-center w-full bg-secondary-500 rounded-2xl py-3.5">
                <span className="text-white poppins font-medium leading-5">Stake</span>
            </button>
        </div>
    )
}