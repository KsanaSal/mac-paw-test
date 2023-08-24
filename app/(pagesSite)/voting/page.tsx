"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SmileIcon from "../../assets/icons/feelIcons/SmileIcon";
import SadSmileIcon from "../../assets/icons/feelIcons/SadSmileIcon";
import HeartIcon from "../../assets/icons/feelIcons/HeartIcon";
import BtnRout from "../../components/buttons/BtnRout";
import VoteTable from "../../assets/images/imagesRoutBtn/vote-table.png";
import HeartSolidIcon from "../../assets/icons/feelIcons/HeartSolidIcon";
import BtnBack from "../../components/buttons/BtnBack";

const Voting = () => {
    const router = usePathname();
    const link = "/voting";
    const isActive = router === link;

    return (
        <div className="flex flex-col w-full bg-white p-[20px] rounded-[20px] gap-[20px]">
            <div className="flex gap-[10px]">
                <BtnBack />
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
            <div className="relative">
                <Image
                    src={VoteTable}
                    alt="Vote table"
                    className="w-[640px] h-[360px] rounded-[20px] bg-green-500"
                />
                <div className="w-[256px] h-20 flex gap-[4px] absolute bottom-[-40px] left-[50%] translate-x-[-50%] bg-white rounded-[20px] p-[4px]">
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
            <ul className="mt-[52px]">
                <li>Item 1</li>
            </ul>
        </div>
    );
};
export default Voting;
