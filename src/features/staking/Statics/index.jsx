import React from "react";


export const Statics = () => {

    const statics = [
        {  
            title: 'Total staked tokens',
            count: '752,513,921',
        },
        {  
            title: 'Total rewards paid',
            count: '175,574,107',
        },
        {  
            title: 'Stakers',
            count: '349,767',
        },
    ]

    return (
        <div className="flex items-center justify-center min-h-[108px] w-full rounded-full staking-static-bg space-x-[100px] sm:space-x-[60px] sm:overflow-auto sm:justify-start sm:px-10 sm:min-h-fit sm:py-2">
             {statics?.map((item, itemIndex) => {
                return (
                    <div className="flex flex-col items-center space-y-2" key={itemIndex}>
                        <span className="text-white leading-5 sm:text-xs">{item?.title}</span>
                        <span className="text-[40px] text-[#D9E854] leading-[48px] font-medium sm:text-xl">{item?.count}</span>
                    </div>
                )
            })}
        </div>
    )
}