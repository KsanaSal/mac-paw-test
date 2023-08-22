import BtnRout from "./buttons/BtnRout";
import VoteTable from "../assets/images/imagesRoutBtn/vote-table.png";
import Image from "next/image";

const RoutButton = () => {
    return (
        <div>
            <div>
                <Image src={VoteTable} alt="Vote table" />
            </div>
            <BtnRout />
        </div>
    );
};

export default RoutButton;
