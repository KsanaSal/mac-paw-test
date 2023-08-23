"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import EyeOpen from "../assets/icons/EyeOpen";
import Logo from "../assets/icons/Logo";
import RoutButton from "./RoutButton";
import VoteTable from "../assets/images/imagesRoutBtn/vote-table.png";
import PetBreeds from "../assets/images/imagesRoutBtn/pet-breeds.png";
import ImagesSearch from "../assets/images/imagesRoutBtn/images-search.png";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const Sidebar = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex flex-col ml-[147px]">
            <div className="flex mt-[30px] items-center justify-between">
                <a
                    href="/"
                    title="Logo page"
                    className="transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:drop-shadow-textDark hover:scale-110 hover:fill-primaryDark"
                >
                    <Logo />
                </a>
                <div className="flex items-center gap-[5px]">
                    <div className="w-[24px] h-[24px] bg-white flex justify-center items-center rounded-[50%]">
                        <EyeOpen />
                    </div>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                            enabled
                                ? "bg-primaryLight"
                                : "bg-transparent-primaryDark20"
                        }
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primaryLight focus:ring-offset-2"
                        `}
                    >
                        <span className="sr-only">Use setting</span>
                        <span
                            aria-hidden="true"
                            className={`${
                                enabled ? "translate-x-5" : "translate-x-0"
                            }
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-primaryDark shadow ring-0 transition duration-200 ease-in-out"`}
                        />
                    </Switch>
                </div>
            </div>
            <h1 className="text-grayDark text-[44px] font-medium mt-[80px]">
                Hi! 👋
            </h1>
            <p className="text-grayMedium text-[20px] mt-[10px]">
                Welcome to MacPaw Bootcamp 2023
            </p>
            <p className="text-grayDark text-[20px] mt-[60px]">
                Lets start using The Cat API
            </p>
            <div className="flex mt-[20px] gap-[16px]">
                <RoutButton
                    img={<Image src={VoteTable} alt="Vote table" />}
                    bgColor="bg-accentPrimary"
                />
                <RoutButton
                    img={<Image src={PetBreeds} alt="Vote table" />}
                    bgColor="bg-accentThird"
                />
                <RoutButton
                    img={<Image src={ImagesSearch} alt="Vote table" />}
                    bgColor="bg-accentSecondary"
                />
            </div>
        </div>
    );
};

export default Sidebar;
