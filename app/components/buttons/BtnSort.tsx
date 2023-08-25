import { sortOrderSelector } from "@/app/redux/searchImages/selectorSearchImages";
import { setSortOrder } from "@/app/redux/searchImages/sliceSearchImages";
import { useDispatch, useSelector } from "react-redux";

const BtnSort = ({
    icon,
    sortType,
}: {
    icon: JSX.Element;
    sortType: string;
}) => {
    const dispatch = useDispatch();
    const sortOrder = useSelector(sortOrderSelector);

    return (
        <button
            onClick={() => {
                dispatch(setSortOrder(sortType));
            }}
            type="button"
            className={`flex items-center justify-center bg-grayLight w-[40px] h-[40px] rounded-[10px] text-grayMedium  hover:border-[2px] hover:border-primaryLight hover:text-primaryDark ${
                sortOrder === sortType &&
                "border-primaryDark text-primaryDark border-[2px]"
            }`}
        >
            {icon}
        </button>
    );
};

export default BtnSort;
