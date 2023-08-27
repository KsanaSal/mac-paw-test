"use client";

import React from "react";
import { usePathname } from "next/navigation";

import BtnRout from "../../components/buttons/BtnRout";
import BtnBack from "../../components/buttons/BtnBack";
import BtnSort from "../../components/buttons/BtnSort";
import SortUpIcon from "../../assets/icons/actionIcons/SortUpIcon";
import SortDownIcon from "../../assets/icons/actionIcons/SortDownIcon";
import ImageList from "../../components/ImageList";
import BreedList from "../../components/inputsSelect/BreedList";
import LimitImages from "../../components/inputsSelect/LimitImages";

const Breeds = () => {
    const router = usePathname();
    const link = "/breeds";
    const isActive = router === link;

    return (
        <div className="flex flex-col w-full h-[770px] bg-white dark:bg-transparent-with5 p-[20px] rounded-[20px] gap-[20px]">
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
            <ImageList />
        </div>
    );
};
export default Breeds;
