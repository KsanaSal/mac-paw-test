import { useState } from "react";
import SearchIcon from "../assets/icons/actionIcon/SearchIcon";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../redux/searchImages/sliceSearchImages";

const SearchInput = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="relative flex items-center">
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
                placeholder="Search for breeds by name"
                className="w-[470px] py-[15px] pl-[20px] text-[20px] bg-white dark:bg-transparent-with5 rounded-[20px] border-0 outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
            />
            <button
                onClick={() => {
                    dispatch(setSearchValue(value));
                    setValue("");
                }}
                type="button"
                className="absolute right-[10px] top-[50%] translate-y-[-50%]"
            >
                <div className="w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-primaryLight dark:bg-transparent-primaryDark20 hover:bg-primaryDark hover:text-white ">
                    <SearchIcon className="w-[20px] h-[20px]" />
                </div>
            </button>
        </div>
    );
};

export default SearchInput;
