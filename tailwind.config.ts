import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                grayLight: "#F8F8F7",
                grayMedium: "#8C8C8C",
                grayDark: "#1D1D1D",
                primaryLight: "#FBE0DC",
                primaryDark: "#FF868E",
                accentPrimary: "#B4B7FF",
                transparent: {
                    accentPrimary30: "#B4B7FF4D",
                    accentSecondary30: "#FFD2804D",
                    accentThird30: "#97EAB94D",
                    white60: "#FFFFFF99",
                },
                accentSecondary: "#FFD280",
                accentThird: "#97EAB9",
            },
            fontFamily: { serif: ["Jost", "serif"] },
        },
    },
    plugins: [],
};
export default config;
