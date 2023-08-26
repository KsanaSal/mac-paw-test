"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BtnRout from "../../components/buttons/BtnRout";
import BtnBack from "../../components/buttons/BtnBack";
import BtnSort from "../../components/buttons/BtnSort";
import SortUpIcon from "../../assets/icons/actionIcon/SortUpIcon";
import SortDownIcon from "../../assets/icons/actionIcon/SortDownIcon";
import ImageList from "../../components/ImageList";
import BreedList from "../../components/BreedList";
import LimitImages from "../../components/LimitImages";

const Breeds = () => {
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
                <BreedList />
                <LimitImages />
                <BtnSort
                    icon={<SortUpIcon className="w-[18px] h-[22px]" />}
                    sortType="DESC"
                />
                <BtnSort
                    icon={<SortDownIcon className="w-[18px] h-[22px]" />}
                    sortType="ASC"
                />
            </div>
            <div className="overflow-y-scroll">
                <ImageList />
            </div>
        </div>
    );
};
export default Breeds;
