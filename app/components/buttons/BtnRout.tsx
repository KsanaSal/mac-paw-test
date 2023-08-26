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
            className={`flex  justify-center px-[30px] pb-[10px] pt-[14px] rounded-[10px] uppercase font-medium ${extraStyles}`}
        >
            {text}
        </Link>
    );
};

export default BtnRout;
