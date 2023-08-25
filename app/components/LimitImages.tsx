import { useDispatch } from "react-redux";
import { setLimitImages } from "../redux/searchImages/sliceSearchImages";

const LimitImages = () => {
    const dispatch = useDispatch();

    return (
        <select
            onChange={(e) => {
                dispatch(setLimitImages(e.target.value));
            }}
            name="limit"
            defaultValue={"10"}
            className="bg-grayLight w-[100px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayMedium border outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
        >
            <option value="5">Limit: 5</option>
            <option value="10">Limit: 10</option>
            <option value="15">Limit: 15</option>
            <option value="20">Limit: 20</option>
        </select>
    );
};

export default LimitImages;
