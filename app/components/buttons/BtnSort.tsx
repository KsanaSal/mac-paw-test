const BtnSort = ({ icon }: { icon: JSX.Element }) => {
    return (
        <button
            type="button"
            className="flex items-center justify-center bg-grayLight w-[40px] h-[40px] rounded-[10px] text-grayMedium  hover:border-[2px] hover:border-primaryLight hover:text-primaryDark"
        >
            {icon}
        </button>
    );
};

export default BtnSort;
