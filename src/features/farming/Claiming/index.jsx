import React from "react";
import { ClaimInfo } from "./ClaimInfo";
import { YourFarms } from "./YourFarms";


export const Claiming = () => {
    return (
        <div className="w-full border-[1px] border-white-100 rounded-3xl overflow-hidden sm:relative">
            <div className="relative flex w-full overflow-hidden claiming-bg ">
                <ClaimInfo />
                <YourFarms />
                <img className="absolute right-0 z-[0] h-full w-full sm:hidden" src="/images/farming/claiming/cubes.png"/>
                <img className="hidden sm:flex absolute right-0 z-[1]  " src="/images/farming/claiming/mobCubes.png"/>
            </div>
        </div>
    )
}