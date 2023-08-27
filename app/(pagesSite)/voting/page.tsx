"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import SmileIcon from "../../assets/icons/feelIcons/SmileIcon";
import SadSmileIcon from "../../assets/icons/feelIcons/SadSmileIcon";
import HeartIcon from "../../assets/icons/feelIcons/HeartIcon";
import BtnRout from "../../components/buttons/BtnRout";
import VoteTable from "../../assets/images/imagesRoutBtn/vote-table.png";
import HeartSolidIcon from "../../assets/icons/feelIcons/HeartSolidIcon";
import BtnBack from "../../components/buttons/BtnBack";
import { useDispatch } from "react-redux";
import { setLimitImages } from "@/app/redux/searchImages/sliceSearchImages";
import { IImage, useGetImages } from "@/app/api/useBreeds";

const Voting = () => {
    const router = usePathname();
    const link = "/voting";
    const isActive = router === link;
    const dispatch = useDispatch();
    dispatch(setLimitImages(1));
    const { data } = useGetImages();
    const [image, setImage] = useState<IImage>();
    console.log(data);

    useEffect(() => {
        if (data) {
            setImage(data[0]);
        }
    }, [data]);

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
                    text={"Voting"}
                />
            </div>
            <div className="relative">
                {image && (
                    <div className="h-[360px] rounded-[20px] overflow-hidden flex justify-center">
                        <Image
                            width={100}
                            height={100}
                            src={image.url}
                            alt="Vote table"
                            objectFit="contain"
                            className="h-full w-[unset] object-contain rounded-[20px] overflow-hidden"
                        />
                    </div>
                )}
                <div className="w-[248px] flex gap-[4px] absolute bottom-[-40px] left-[50%] translate-x-[-50%] bg-white border-[4px] border-white dark:border-[#282828] rounded-[20px]">
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
            {/* <ul className="mt-[52px]">
                <li>Item 1</li>
            </ul> */}
        </div>
    );
};
export default Voting;
