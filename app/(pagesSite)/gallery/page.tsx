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
// import BtnClose from "../../components/buttons/BtnClose";
// import Photo from "../../assets/images/Photo.png";
// import BtnUploadPhoto from "../../components/buttons/BtnUploadPhoto";
// import TickIcon from "../../assets/icons/warningIcons/TickIcon";
// import CircleCrossIcon from "../../assets/icons/warningIcons/CircleCrossIcon";

const Gallery = () => {
    const router = usePathname();
    const link = "/gallery";
    const isActive = router === link;

    return (
        <>
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
                <ImageList />
            </div>
            {/* Modal window */}
            {/* <div className="flex justify-center w-full h-[840px] rounded-[20px] bg-grayLight z-20 absolute top-0 right-0  border-2 border-green-700">
                <BtnClose />
                <div className="flex flex-col items-center mt-[100px]">
                    <h2 className="text-[36px] text-grayDark font-medium">
                        Upload a .jpg or .png Cat Image
                    </h2>
                    <p className="text-[20px] leading-[30px] text-grayMedium mt-[10px]">
                        Any uploads must comply with the{" "}
                        <Link
                            href={"https://thecatapi.com/privacy"}
                            className="text-primaryDark"
                            target="_blank"
                        >
                            upload guidelines
                        </Link>{" "}
                        or face deletion.
                    </p>
                    <div className=" flex items-center justify-center mt-[40px] w-[620px] h-[320px] bg-white rounded-[20px] border-2 border-primaryLight border-dashed relative">
                        <Image
                            src={Photo}
                            alt="Photo"
                            width={200}
                            height={200}
                            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                        />
                        <p className="text-[20px] z-30 text-grayMedium">
                            <span className="text-grayDark font-medium">
                                Drag here
                            </span>{" "}
                            your file or{" "}
                            <span className="text-grayDark font-medium">
                                Click here
                            </span>{" "}
                            to upload
                        </p>
                    </div>
                    <p className="text-[20px] text-grayMedium mt-[20px]">
                        No file selected
                    </p>
                    <div className="flex flex-col mt-[20px] items-center">
                        <BtnUploadPhoto />
                        <div className="flex flex-col">
                            <div className="flex gap-[10px] p-[20px] bg-white w-[640px] h-[60px] rounded-[10px]">
                                <TickIcon className="w-[20px] h-[20px]" />
                                <p className="text-[16px] text-grayMedium leading-[16px]">
                                    Thanks for the Upload - Cat found!
                                </p>
                            </div>
                            <div className="flex gap-[10px] p-[20px] bg-white w-[640px] h-[60px] rounded-[10px]">
                                <CircleCrossIcon className="w-[20px] h-[20px]" />
                                <p className="text-[16px] text-grayMedium leading-[16px]">
                                    No Cat found - try a different one
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-screen bg-transparent-grayDark60 z-10 fixed"></div>
            </div> */}
        </>
    );
};
export default Gallery;
