import { useDispatch, useSelector } from "react-redux";
import ArrowLoaderIcon from "../../assets/icons/actionIcons/ArrowLoaderIcon";
import { fetchTriggerSelector } from "../../redux/searchImages/selectorSearchImages";
import { setFetchTrigger } from "../../redux/searchImages/sliceSearchImages";

const BtnUpdate = () => {
    const dispatch = useDispatch();
    const fetchTrigger = useSelector(fetchTriggerSelector);
    return (
        <button
            onClick={() => {
                dispatch(setFetchTrigger(fetchTrigger + 1));
            }}
            type="button"
            className="flex items-center justify-center w-[40px] h-[40px] bg-white dark:bg-grayLight rounded-[10px] text-primaryDark hover:bg-primaryDark hover:text-white"
        >
            <ArrowLoaderIcon className="w-[20px] h-[20px]" />
        </button>
    );
};

export default BtnUpdate;
