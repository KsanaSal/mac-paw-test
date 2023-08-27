import CrossIcon from "../../assets/icons/actionIcons/CrossIcon";

const BtnClose = () => {
    return (
        <button
            type="button"
            className="absolute top-[20px] right-[20px] w-10 h-10 rounded-[10px] flex justify-center items-center text-primaryDark  bg-white hover:bg-primaryDark hover:text-white "
        >
            <CrossIcon className="w-[20px] h-[20px]" />
        </button>
    );
};

export default BtnClose;
