"use client";

import React from "react";
import { usePathname } from "next/navigation";

import BtnBack from "../../components/buttons/BtnBack";
import BtnRout from "../../components/buttons/BtnRout";
import ImageListFavourite from "../../components/ImageListFavourite";

const Favourites = () => {
    const router = usePathname();
    const link = "/favourites";
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
                        text={"Favourites"}
                    />
                </div>
            </div>
            <ImageListFavourite />
        </div>
    );
};
export default Favourites;
