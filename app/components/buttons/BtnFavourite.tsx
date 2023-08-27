import { useDispatch, useSelector } from "react-redux";
import HeartIcon from "../../assets/icons/feelIcons/HeartIcon";
import {
    setFavoriteImageId,
    setFavoriteImageIdRemove,
    setFetchTrigger,
} from "../../redux/searchImages/sliceSearchImages";
import HeartSolidIcon from "../../assets/icons/feelIcons/HeartSolidIcon";
import { fetchTriggerSelector } from "../../redux/searchImages/selectorSearchImages";
import { useDeleteFavorites, useGetFavorites } from "../../api/useFavourites";

const BtnFavourite = ({ imageId }: { imageId: string }) => {
    const dispatch = useDispatch();
    const { data } = useGetFavorites();
    useDeleteFavorites();
    const fetchTrigger = useSelector(fetchTriggerSelector);

    return (
        <button
            onClick={() => {
                if (
                    data &&
                    data.findIndex((item) => item.image_id === imageId) > -1
                ) {
                    dispatch(
                        setFavoriteImageIdRemove(
                            data.find((item) => item.image_id === imageId)?.id
                        )
                    );
                } else {
                    dispatch(setFavoriteImageId(imageId));
                }

                dispatch(setFetchTrigger(fetchTrigger + 1));
            }}
            type="button"
            className="w-[40px] h-[40px] bg-white dark:bg-grayLight rounded-[10px] text-primaryDark flex items-center justify-center"
        >
            {data &&
            data.findIndex((item) => item.image_id === imageId) > -1 ? (
                <HeartSolidIcon className="w-[20px] h-[18px]" />
            ) : (
                <HeartIcon className="w-[20px] h-[18px]" />
            )}
        </button>
    );
};

export default BtnFavourite;
