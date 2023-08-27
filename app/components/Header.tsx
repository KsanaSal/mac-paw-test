"use client";

import HeartIcon from "../assets/icons/feelIcons/HeartIcon";
import SadSmileIcon from "../assets/icons/feelIcons/SadSmileIcon";
import SmileIcon from "../assets/icons/feelIcons/SmileIcon";
import SearchInput from "./SearchInput";
import BtnFeel from "./buttons/BtnFeel";

const Header = () => {
    return (
        <div className="flex gap-[10px]">
            <SearchInput />
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
