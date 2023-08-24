import React from "react";
import LeftChevronIcon from "../../assets/icons/actionIcon/LeftChevronIcon";
import { useRouter } from "next/navigation";

const BtnBack = () => {
    const router = useRouter();

    return (
        <button type="button" onClick={() => router.back()}>
            <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                <LeftChevronIcon className="w-[20px] h-[20px]" />
            </div>
        </button>
    );
};

export default BtnBack;
