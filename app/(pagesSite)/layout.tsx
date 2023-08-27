"use client";

import { Provider } from "react-redux";
import { SWRConfig } from "swr";

import Header from "../components/Header";
import store from "../redux/store";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SWRConfig
            value={{ revalidateOnFocus: false, revalidateIfStale: false }}
        >
            <Provider store={store}>
                <div className="flex flex-col my-[30px] mr-[30px] gap-[10px] relative">
                    <Header />
                    {children}
                </div>
            </Provider>
        </SWRConfig>
    );
}
