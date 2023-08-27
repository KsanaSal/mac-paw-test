import React from "react";
import { useRouter } from "next/navigation";

import LeftChevronIcon from "../../assets/icons/actionIcons/LeftChevronIcon";

const BtnBack = () => {
    const router = useRouter();

    return (
        <button type="button" onClick={() => router.back()}>
            <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight dark:bg-transparent-primaryDark20 hover:bg-primaryDark hover:text-white ">
                <LeftChevronIcon className="w-[20px] h-[20px]" />
            </div>
        </button>
    );
};

export default BtnBack;
