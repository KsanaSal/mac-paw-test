import UploadIcon from "../../assets/icons/actionIcon/UploadIcon";

const BtnUpload = () => {
    return (
        <button
            type="button"
            className="flex items-center justify-center gap-[10px] px-[30px] pb-[10px] pt-[14px] rounded-[10px] uppercase font-medium text-[12px] tracking-[2px] text-primaryDark bg-primaryLight hover:bg-primaryDark hover:text-white"
        >
            <UploadIcon />
            <p>Upload</p>
        </button>
    );
};

export default BtnUpload;
