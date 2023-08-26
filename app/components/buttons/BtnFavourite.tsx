import HeartIcon from "../../assets/icons/feelIcons/HeartIcon";

const BtnFavourite = () => {
    return (
        <button
            type="button"
            className="w-[40px] h-[40px] bg-white dark:bg-grayLight rounded-[10px] text-primaryDark flex items-center justify-center"
        >
            <HeartIcon className="w-[20px] h-[18px]" />
        </button>
    );
};

export default BtnFavourite;
