import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

import { setLimitImages } from "../../redux/searchImages/sliceSearchImages";

const LimitImages = () => {
    const dispatch = useDispatch();
    const router = usePathname();
    const link = "/gallery";
    const isActive = router === link;

    useEffect(() => {
        dispatch(setLimitImages(isActive ? "5" : "10"));
    }, [dispatch, isActive]);

    return (
        <div className="flex flex-col">
            {isActive && (
                <label
                    htmlFor="limit"
                    className="text-[10px] font-medium uppercase text-grayMedium ml-[10px]"
                >
                    limit
                </label>
            )}
            <select
                onChange={(e) => {
                    dispatch(setLimitImages(e.target.value));
                }}
                id="limit"
                name="limit"
                defaultValue={isActive ? "5" : "10"}
                className={`${
                    isActive
                        ? "bg-white dark:bg-grayLight text-grayDark w-[240px]"
                        : "bg-grayLight dark:bg-transparent-with5 w-[100px] text-grayMedium"
                } h-[40px] rounded-[10px] py-[8px] pl-[10px] text-[16px]  border-0 outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark`}
            >
                <option value="5">
                    {isActive ? "5 items per page" : "Limit: 5"}
                </option>
                <option value="10">
                    {isActive ? "10 items per page" : "Limit: 10"}
                </option>
                <option value="15">
                    {isActive ? "15 items per page" : "Limit: 15"}
                </option>
                <option value="20">
                    {isActive ? "20 items per page" : "Limit: 20"}
                </option>
            </select>
        </div>
    );
};

export default LimitImages;
