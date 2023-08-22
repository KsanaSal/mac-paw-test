import EyeOpen from "../assets/icons/EyeOpen";
import Logo from "../assets/icons/Logo";
import RoutButton from "./RoutButton";

const Sidebar = () => {
    return (
        <div className="flex flex-col ml-[147px]">
            <div className="flex mt-[30px] items-center justify-between">
                <a href="/" title="Logo page">
                    <Logo />
                </a>
                <div className="flex items-center gap-[5px]">
                    <div className="w-[24px] h-[24px] bg-white flex justify-center items-center rounded-[50%]">
                        <EyeOpen />
                    </div>
                    <div className="bg-primaryLight w-[44px] h-[24px] rounded-[50px] flex justify-end items-center p-[4px]">
                        <div className="w-[16px] h-[16px] rounded-[50%] bg-primaryDark"></div>
                    </div>
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
                <RoutButton />
                <RoutButton />
                <RoutButton />
            </div>
        </div>
    );
};

export default Sidebar;
