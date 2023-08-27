"use client";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import EyeOpen from "@/app/assets/icons/EyeOpen";
import EyeClose from "@/app/assets/icons/EyeClose";

const BtnTheme = () => {
    const [enabled, setEnabled] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        resolvedTheme === "dark" ? setEnabled(false) : setEnabled(true);
    }, [resolvedTheme]);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-center gap-[5px]">
            <div className="w-[24px] h-[24px] bg-white dark:bg-transparent-with5 flex justify-center items-center rounded-[50%]">
                {resolvedTheme === "dark" ? <EyeClose /> : <EyeOpen />}
            </div>
            <Switch
                checked={enabled}
                onChange={() =>
                    resolvedTheme === "dark"
                        ? setTheme("light")
                        : setTheme("dark")
                }
                className={`${
                    enabled ? "bg-primaryLight" : "bg-transparent-primaryDark20"
                }
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-0 items-center pl-[4px] dark:pr-[4px] border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-transparent-with5 foc  focus:ring-offset-2"
                        `}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-5" : "translate-x-0"}
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-primaryDark  shadow ring-0 transition duration-200 ease-in-out"`}
                />
            </Switch>
        </div>
    );
};

export default BtnTheme;
