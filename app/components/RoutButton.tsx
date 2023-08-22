import BtnRout from "./buttons/BtnRout";
import VoteTable from "../assets/images/imagesRoutBtn/vote-table.png";
import Image from "next/image";

const RoutButton = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-[10px]">
            <div className="flex items-center justify-center bg-accentPrimary border-[4px] border-transparent-white60 rounded-[20px] w-[138px] h-[198px]">
                <Image src={VoteTable} alt="Vote table" />
            </div>
            <BtnRout />
        </div>
    );
};

export default RoutButton;
