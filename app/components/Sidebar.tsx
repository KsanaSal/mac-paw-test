"use client";

import Image from "next/image";
import EyeOpen from "../assets/icons/EyeOpen";
import Logo from "../assets/icons/Logo";
import RoutButton from "./RoutButton";
import VoteTable from "../assets/images/imagesRoutBtn/vote-table.png";
import PetBreeds from "../assets/images/imagesRoutBtn/pet-breeds.png";
import ImagesSearch from "../assets/images/imagesRoutBtn/images-search.png";
import BtnTheme from "./buttons/BtnTheme";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const Sidebar = () => {
    return (
        <div className="flex flex-col ml-[147px]">
            <div className="flex mt-[30px] items-center justify-between">
                <a
                    href="/"
                    title="Logo page"
                    className="transition ease-in-out delay-150 text-grayDark hover:-translate-y-1 duration-300 hover:drop-shadow-textDark hover:scale-110 hover:text-primaryDark"
                >
                    <Logo />
                </a>
                <BtnTheme />
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
                    link={"/voting"}
                    text={"Voting"}
                />
                <RoutButton
                    img={<Image src={PetBreeds} alt="Pet breeds" />}
                    bgColor="bg-accentThird"
                    link={"/breeds"}
                    text={"Breeds"}
                />
                <RoutButton
                    img={<Image src={ImagesSearch} alt="Images search" />}
                    bgColor="bg-accentSecondary"
                    link={"/gallery"}
                    text={"Gallery"}
                />
            </div>
        </div>
    );
};

export default Sidebar;
