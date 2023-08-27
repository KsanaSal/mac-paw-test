import { usePathname } from "next/navigation";

import BtnRout from "./buttons/BtnRout";

const RoutButton = ({
    img,
    bgColor,
    link,
    text,
}: {
    img: JSX.Element;
    bgColor: string;
    link: string;
    text: string;
}) => {
    const router = usePathname();
    const isActive = router.includes(link);

    return (
        <div className="flex flex-col items-center justify-center gap-[10px] group cursor-pointer">
            <div
                className={`${bgColor} flex items-center justify-center border-[4px] border-transparent-white60 rounded-[20px] w-[138px] h-[198px] group-hover:border-white group-active:border-primaryLight ${
                    isActive && "border-primaryLight"
                }`}
            >
                {img}
            </div>
            <BtnRout
                extraStyles={`${
                    isActive
                        ? "bg-primaryDark text-white"
                        : "bg-white dark:bg-transparent-with10 text-primaryDark"
                } group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white`}
                link={link}
                text={text}
            />
        </div>
    );
};

export default RoutButton;
