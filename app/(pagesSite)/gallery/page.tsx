"use client";
import { usePathname } from "next/navigation";
import React from "react";
import BtnUpload from "../../components/buttons/BtnUpload";
import BreedList from "../../components/inputsSelect/BreedList";
import ImageList from "../../components/ImageList";
import LimitImages from "../../components/inputsSelect/LimitImages";
import BtnBack from "../../components/buttons/BtnBack";
import BtnRout from "../../components/buttons/BtnRout";
import SortList from "../../components/inputsSelect/SortList";
import TypeList from "../../components/inputsSelect/TypeList";
import BtnUpdate from "../../components/buttons/BtnUpdate";

const Gallery = () => {
    const router = usePathname();
    const link = "/gallery";
    const isActive = router === link;

    return (
        <div className="flex flex-col w-full h-[770px] bg-white dark:bg-transparent-with5 p-[20px] rounded-[20px] gap-[20px]">
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
            <div className="flex justify-between w-full pt-[10px] pb-[20px] px-[20px] bg-grayLight dark:bg-transparent-with5 rounded-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <SortList />
                    <BreedList />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <TypeList />
                    <div className="flex gap-[10px] items-end">
                        <LimitImages />
                        <BtnUpdate />
                    </div>
                </div>
            </div>
            <div className="overflow-y-scroll">
                <ImageList />
            </div>
        </div>
    );
};
export default Gallery;
