"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BtnRout from "../../components/buttons/BtnRout";
import BtnBack from "../../components/buttons/BtnBack";
import BtnSort from "../../components/buttons/BtnSort";
import SortUpIcon from "../../assets/icons/actionIcon/SortUpIcon";
import SortDownIcon from "../../assets/icons/actionIcon/SortDownIcon";
import Breeds from "@/app/components/Breeds";

const Voting = () => {
    const router = usePathname();
    const link = "/breeds";
    const isActive = router === link;

    return (
        <div className="flex flex-col w-full h-[770px] bg-white p-[20px] rounded-[20px] gap-[20px]">
            <div className="flex gap-[10px]">
                <BtnBack />
                <BtnRout
                    extraStyles={`${
                        isActive
                            ? "bg-primaryDark text-white"
                            : "bg-white text-primaryDark"
                    } group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white`}
                    link={link}
                    text={"Breeds"}
                />
                <select
                    name="breeds"
                    defaultValue={"allBreeds"}
                    className="bg-grayLight w-[226px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayMedium border outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
                >
                    <option value="allBreeds">All breeds</option>
                    <option value="abyssinian">Abyssinian</option>
                    <option value="aegean">Aegean</option>
                    <option value="americanBobtail">American Bobtail</option>
                </select>
                <select
                    name="limit"
                    defaultValue={"lim10"}
                    className="bg-grayLight w-[100px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayMedium hover:border-primaryLight"
                >
                    <option value="lim5">Limit: 5</option>
                    <option value="lim10">Limit: 10</option>
                    <option value="lim15">Limit: 15</option>
                    <option value="lim20">Limit: 20</option>
                </select>
                <BtnSort icon={<SortUpIcon className="w-[18px] h-[22px]" />} />
                <BtnSort
                    icon={<SortDownIcon className="w-[18px] h-[22px]" />}
                />
            </div>
            <div className="overflow-y-scroll">
                <Breeds />
            </div>
        </div>
    );
};
export default Voting;
