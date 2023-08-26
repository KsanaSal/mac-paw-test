import Link from "next/link";
import { usePathname } from "next/navigation";

const BtnFeel = ({ link, icon }: { link: string; icon: JSX.Element }) => {
    const router = usePathname();
    const isActive = router.includes(link);

    return (
        <Link
            href={link}
            type="button"
            className={`w-[60px] h-[60px]  rounded-[20px] flex justify-center items-center hover:bg-primaryLight active:bg-primaryDark active:text-white ${
                isActive
                    ? "bg-primaryDark text-white"
                    : "bg-white dark:bg-transparent-with5 text-primaryDark"
            }`}
        >
            {icon}
        </Link>
    );
};

export default BtnFeel;
