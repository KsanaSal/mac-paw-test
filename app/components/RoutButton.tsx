import BtnRout from "./buttons/BtnRout";

const RoutButton = ({
    img,
    bgColor,
}: {
    img: JSX.Element;
    bgColor: string;
}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-[10px] group cursor-pointer">
            <div
                className={`${bgColor} flex items-center justify-center border-[4px] border-transparent-white60 rounded-[20px] w-[138px] h-[198px] group-hover:border-white group-active:border-primaryLight`}
            >
                {img}
            </div>
            <BtnRout extraStyles="group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white" />
        </div>
    );
};

export default RoutButton;
