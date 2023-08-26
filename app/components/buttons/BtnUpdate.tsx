import ArrowLoaderIcon from "../../assets/icons/actionIcon/ArrowLoaderIcon";

const BtnUpdate = () => {
    return (
        <button
            type="button"
            className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-[10px] text-primaryDark"
        >
            <ArrowLoaderIcon className="w-[20px] h-[20px]" />
        </button>
    );
};

export default BtnUpdate;
