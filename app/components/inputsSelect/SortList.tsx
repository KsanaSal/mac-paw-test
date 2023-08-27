import { useDispatch } from "react-redux";

import { setSortOrder } from "../../redux/searchImages/sliceSearchImages";

const SortList = () => {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col">
            <label
                htmlFor="order"
                className="text-[10px] font-medium uppercase text-grayMedium ml-[10px]"
            >
                order
            </label>
            <select
                onChange={(e) => {
                    dispatch(setSortOrder(e.target.value));
                }}
                id="order"
                name="limit"
                defaultValue={"ran"}
                className="bg-white dark:bg-grayLight w-[290px] h-[40px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayDark border-0 outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
            >
                <option value="ran">Random</option>
                <option value="desc">Desc</option>
                <option value="asc">Asc</option>
            </select>
        </div>
    );
};

export default SortList;
