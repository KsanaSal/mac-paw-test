import UploadIcon from "../../assets/icons/actionIcons/UploadIcon";

const BtnUpload = () => {
    return (
        <button
            type="button"
            className="flex items-center justify-center gap-[10px] px-[30px] pb-[10px] pt-[14px] rounded-[10px] uppercase font-medium text-[12px] tracking-[2px] text-primaryDark bg-primaryLight dark:bg-transparent-primaryDark20 hover:bg-primaryDark hover:text-white"
        >
            <UploadIcon />
            <p>Upload</p>
        </button>
    );
};

export default BtnUpload;
