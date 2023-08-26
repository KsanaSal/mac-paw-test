"use client";
import BtnUpload from "../../components/buttons/BtnUpload";
import SortDownIcon from "../../assets/icons/actionIcon/SortDownIcon";
import SortUpIcon from "../../assets/icons/actionIcon/SortUpIcon";
import BreedList from "../../components/BreedList";
import ImageList from "../../components/ImageList";
import LimitImages from "../../components/LimitImages";
import BtnBack from "../../components/buttons/BtnBack";
import BtnRout from "../../components/buttons/BtnRout";
import BtnSort from "../../components/buttons/BtnSort";
import { usePathname } from "next/navigation";
import React from "react";

const Gallery = () => {
    const router = usePathname();
    const link = "/gallery";
    const isActive = router === link;

    return (
        <div className="flex flex-col w-full h-[770px] bg-white p-[20px] rounded-[20px] gap-[20px]">
            <div className="flex justify-between">
                <div className="flex gap-[10px]">
                    <BtnBack />
                    <BtnRout
                        extraStyles={`${
                            isActive
                                ? "bg-primaryDark text-white"
                                : "bg-white text-primaryDark"
                        } group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white`}
                        link={link}
                        text={"Gallery"}
                    />
                </div>
                <BtnUpload />
            </div>
            <div className="flex gap-[10px]">
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
export default Gallery;
