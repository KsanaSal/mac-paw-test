const BtnRout = ({ extraStyles }: { extraStyles?: string }) => {
    return (
        <button
            type="button"
            className={`${extraStyles} bg-white w-[138px] py-[10px] rounded-[10px] text-primaryDark uppercase font-medium `}
        >
            VOTING
        </button>
    );
};

export default BtnRout;
