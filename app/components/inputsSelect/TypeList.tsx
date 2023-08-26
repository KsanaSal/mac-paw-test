import { useDispatch } from "react-redux";
import { setMimeTypes } from "../../redux/searchImages/sliceSearchImages";

const TypeList = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col">
            <label
                htmlFor="type"
                className="text-[10px] font-medium uppercase text-grayMedium ml-[10px]"
            >
                type
            </label>
            <select
                onChange={(e) => {
                    dispatch(setMimeTypes(e.target.value));
                }}
                id="type"
                name="limit"
                defaultValue={"jpg,png"}
                className="bg-white w-[290px] h-[40px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayDark border outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
            >
                <option value="all">All</option>
                <option value="jpg,png">Static</option>
                <option value="gif">Animated</option>
            </select>
        </div>
    );
};

export default TypeList;
