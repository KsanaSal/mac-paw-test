"use client";
import SearchIcon from "../assets/icons/actionIcon/SearchIcon";
import HeartIcon from "../assets/icons/feelIcons/HeartIcon";
import SadSmileIcon from "../assets/icons/feelIcons/SadSmileIcon";
import SmileIcon from "../assets/icons/feelIcons/SmileIcon";
import BtnFeel from "./buttons/BtnFeel";

const Header = () => {
    return (
        <div className="flex gap-[10px]">
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search for breeds by name"
                    className="w-[470px] py-[15px] pl-[20px] text-[20px] bg-white dark:bg-transparent-with5 rounded-[20px] border-0 outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
                />
                <button
                    type="button"
                    className="absolute right-[10px] top-[50%] translate-y-[-50%]"
                >
                    <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight dark:bg-transparent-primaryDark20 hover:bg-primaryDark hover:text-white ">
                        <SearchIcon className="w-[20px] h-[20px]" />
                    </div>
                </button>
            </div>
            <BtnFeel
                link={"/likes"}
                icon={<SmileIcon className="w-[30px] h-[30px]" />}
            />
            <BtnFeel
                link={"/favourites"}
                icon={<HeartIcon className="w-[30px] h-[30px]" />}
            />
            <BtnFeel
                link={"/dislikes"}
                icon={<SadSmileIcon className="w-[30px] h-[30px]" />}
            />
        </div>
    );
};

export default Header;
