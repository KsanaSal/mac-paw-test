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
            className={`flex  justify-center px-[30px] pb-[5px] pt-[9px] rounded-[10px] uppercase font-medium text-[20px] ${extraStyles}`}
        >
            {text}
        </Link>
    );
};

export default BtnRout;
