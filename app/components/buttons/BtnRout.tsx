import Link from "next/link";

const BtnRout = ({
    extraStyles,
    link,
    text,
}: {
    extraStyles?: string;
    link: string;
    text: string;
}) => {
    return (
        <Link
            href={link}
            type="button"
            className={`${extraStyles} flex  justify-center bg-white w-[138px] pb-[10px] pt-[14px] rounded-[10px] text-primaryDark uppercase font-medium `}
        >
            {text}
        </Link>
    );
};

export default BtnRout;
