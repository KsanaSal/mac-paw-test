"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BtnRout from "../../components/buttons/BtnRout";
import BtnBack from "../../components/buttons/BtnBack";

const Voting = () => {
    const router = usePathname();
    const link = "/breeds";
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
                    text={"Breeds"}
                />
            </div>
        </div>
    );
};
export default Voting;
