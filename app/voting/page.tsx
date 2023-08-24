"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SearchIcon from "../assets/icons/actionIcon/SearchIcon";
import SmileIcon from "../assets/icons/feelIcons/SmileIcon";
import SadSmileIcon from "../assets/icons/feelIcons/SadSmileIcon";
import HeartIcon from "../assets/icons/feelIcons/HeartIcon";
import LeftChevronIcon from "../assets/icons/actionIcon/LeftChevronIcon";
import BtnRout from "../components/buttons/BtnRout";
import VoteTable from "../assets/images/imagesRoutBtn/vote-table.png";
import HeartSolidIcon from "../assets/icons/feelIcons/HeartSolidIcon";

const Voting = () => {
    const router = usePathname();
    const link = "/voting";
    const isActive = router === link;

    return (
        <div className="flex flex-col">
            <div className="flex">
                <input type="text" placeholder="Search for breeds by name" />
                <button type="button">
                    <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                        <SearchIcon className="w-[20px] h-[20px]" />
                    </div>
                </button>
                <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                    <SmileIcon className="w-[30px] h-[30px]" />
                </div>
                <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                    <HeartIcon className="w-[30px] h-[30px]" />
                </div>
                <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                    <SadSmileIcon className="w-[30px] h-[30px]" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <button type="button">
                        <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                            <LeftChevronIcon className="w-[20px] h-[20px]" />
                        </div>
                    </button>
                    <BtnRout
                        extraStyles={`${
                            isActive
                                ? "bg-primaryDark text-white"
                                : "bg-white text-primaryDark"
                        } group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white`}
                        link={link}
                        text={"Voting"}
                    />
                </div>
                <Image src={VoteTable} alt="Vote table" />
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
export default Voting;
