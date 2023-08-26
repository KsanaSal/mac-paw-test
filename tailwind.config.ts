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
                accentSecondary: "#FFD280",
                accentThird: "#97EAB9",
                transparent: {
                    accentPrimary30: "#B4B7FF4D",
                    accentSecondary30: "#FFD2804D",
                    accentThird30: "#97EAB94D",
                    white60: "#FFFFFF99",
                    primaryDark20: "#FF868E33",
                    primaryLight60: "#FF868E99",
                },
            },
            dropShadow: {
                textLight: "5px 5px 3px rgba(251, 224, 220, 0.7)",
                textDark: "5px 5px 3px rgba(255, 134, 142, 0.7)",
            },
            fontFamily: { serif: ["Jost", "serif"] },
        },
    },
    plugins: [],
};
export default config;
