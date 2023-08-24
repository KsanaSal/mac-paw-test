import SearchIcon from "../assets/icons/actionIcon/SearchIcon";
import HeartIcon from "../assets/icons/feelIcons/HeartIcon";
import SadSmileIcon from "../assets/icons/feelIcons/SadSmileIcon";
import SmileIcon from "../assets/icons/feelIcons/SmileIcon";

const Header = () => {
    return (
        <div className="flex gap-[10px]">
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search for breeds by name"
                    className="w-[470px] py-[15px] pl-[20px] text-[20px] rounded-[20px]"
                />
                <button
                    type="button"
                    className="absolute right-[10px] top-[50%] translate-y-[-50%]"
                >
                    <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight hover:bg-primaryDark hover:text-white ">
                        <SearchIcon className="w-[20px] h-[20px]" />
                    </div>
                </button>
            </div>
            <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                <SmileIcon className="w-[30px] h-[30px]" />
            </div>
            <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                <HeartIcon className="w-[30px] h-[30px]" />
            </div>
            <div className="w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center text-primaryDark bg-white hover:bg-primaryLight active:bg-primaryDark active:text-white ">
                <SadSmileIcon className="w-[30px] h-[30px]" />
            </div>
        </div>
    );
};

export default Header;
