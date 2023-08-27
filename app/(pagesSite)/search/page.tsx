"use client";

import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

import ImageList from "../../components/ImageList";
import BtnBack from "../../components/buttons/BtnBack";
import BtnRout from "../../components/buttons/BtnRout";
import { searchNameSelector } from "../../redux/searchImages/selectorSearchImages";

const Search = () => {
    const router = usePathname();
    const link = "/search";
    const isActive = router === link;
    const searchName = useSelector(searchNameSelector);

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
                        text={"Search"}
                    />
                </div>
            </div>
            <p className="text-[20px] text-grayMedium">
                Search results for:{" "}
                <span className="text-grayDark font-medium">{searchName}</span>
            </p>
            <ImageList />
        </div>
    );
};

export default Search;
