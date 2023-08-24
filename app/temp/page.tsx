import React from "react";
import {
    CrossIcon,
    HeartIcon,
    HeartSolidIcon,
    LeftChevronIcon,
    SadSmileIcon,
    SearchIcon,
    SmileIcon,
} from "./icons";

const Page = () => {
    return (
        <div>
            <div className="flex items-center gap-2 bg-slate-100 flex-wrap">
                <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                    <SmileIcon className="w-[30px] h-[30px]" />
                </div>
                <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                    <SadSmileIcon className="w-[30px] h-[30px]" />
                </div>
                <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                    <HeartIcon className="w-[30px] h-[30px]" />
                </div>
                <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                    <LeftChevronIcon className="w-[20px] h-[20px]" />
                </div>
                <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                    <SearchIcon className="w-[20px] h-[20px]" />
                </div>
                <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                    <CrossIcon className="w-[20px] h-[20px]" />
                </div>
                <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                    <HeartIcon className="w-[20px] h-[20px]" />
                </div>
                <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                    <HeartSolidIcon className="w-[20px] h-[20px]" />
                </div>
                <div className="w-[248px] h-20 flex gap-[4px]">
                    <div className="w-20 h-20  rounded-l-[20px] flex justify-center items-center text-white bg-accentThird hover:bg-[#97EAB94D] hover:text-accentThird active:text-white active:bg-accentThird ">
                        <SmileIcon className="w-[30px] h-[30px] z-10" />
                    </div>
                    <div className="w-20 h-20  flex justify-center items-center text-white  bg-primaryDark hover:bg-[#FF868E4D] hover:text-primaryDark active:text-white active:bg-primaryDark group">
                        <HeartIcon className="w-[30px] h-[26px] group-active:hidden" />
                        <HeartSolidIcon className="w-[30px] h-[26px] hidden group-active:block" />
                    </div>
                    <div className="w-20 h-20  rounded-r-[20px] flex justify-center items-center text-white bg-accentSecondary hover:bg-[#FFD2804D] hover:text-accentSecondary active:text-white active:bg-accentSecondary ">
                        <SadSmileIcon className="w-[30px] h-[30px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
