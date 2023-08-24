"use client";
import React from "react";
import { usePathname } from "next/navigation";
import BtnRout from "../../components/buttons/BtnRout";
import BtnBack from "../../components/buttons/BtnBack";
import Image from "next/image";

const Voting = () => {
    const router = usePathname();
    const link = "/breeds";
    const isActive = router === link;

    const images = [
        {
            src: "/path/to/first-image.jpg",
            alt: "Image 0",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/second-image.jpg",
            alt: "Image 1",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/third-image.jpg",
            alt: "Image 2",
            width: 200,
            height: 200,
        },

        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 14",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 15",
            width: 200,
            height: 200,
        },

        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 5",
            width: 200,
            height: 200,
        },

        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 14",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 15",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 16",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 17",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 18",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 19",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 20",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 20",
            width: 200,
            height: 200,
        },
        {
            src: "/path/to/fifth-image.jpg",
            alt: "Image 20",
            width: 200,
            height: 200,
        },
        // Add more images as needed
    ];

    const chunkSize = 10;
    const chunkedImages = [];

    for (let i = 0; i < images.length; i += chunkSize) {
        const chunk = images.slice(i, i + chunkSize);
        chunkedImages.push(chunk);
    }

    return (
        <div className="flex flex-col w-full h-[770px] bg-white p-[20px] rounded-[20px] gap-[20px]">
            <div className="flex gap-[10px]">
                <BtnBack />
                <BtnRout
                    extraStyles={`${
                        isActive
                            ? "bg-primaryDark text-white"
                            : "bg-white text-primaryDark"
                    } group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white`}
                    link={link}
                    text={"Breeds"}
                />
                <select
                    name="breeds"
                    defaultValue={"allBreeds"}
                    className="bg-grayLight w-[226px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayMedium border outline-none hover:outline-none hover:border-primaryLight active:outline-none active:border-primaryDark"
                >
                    <option value="allBreeds">All breeds</option>
                    <option value="abyssinian">Abyssinian</option>
                    <option value="aegean">Aegean</option>
                    <option value="americanBobtail">American Bobtail</option>
                </select>
                <select
                    name="limit"
                    defaultValue={"lim10"}
                    className="bg-grayLight w-[100px] rounded-[10px] py-[8px] pl-[10px] text-[16px] text-grayMedium hover:border-primaryLight"
                >
                    <option value="lim5">Limit: 5</option>
                    <option value="lim10">Limit: 10</option>
                    <option value="lim15">Limit: 15</option>
                    <option value="lim20">Limit: 20</option>
                </select>
            </div>
            <div className="overflow-y-scroll">
                <div className="grid grid-cols-3 gap-5 w-[640px]">
                    {chunkedImages.map((chunk) =>
                        chunk.map((image, index) => (
                            <div
                                data-index={index}
                                key={index}
                                className={`bg-slate-400 rounded-[20px] overflow-hidden ${
                                    index % 10 === 0
                                        ? "col-span-1 row-span-2"
                                        : index % 9 === 0
                                        ? "col-span-1 row-span-1"
                                        : index % 8 === 0
                                        ? "col-span-2 row-span-2"
                                        : index % 7 === 0
                                        ? "col-span-1 row-span-2"
                                        : index % 6 === 0
                                        ? "col-span-1 row-span-1"
                                        : index % 5 === 0
                                        ? "col-span-1 row-span-1"
                                        : index % 4 === 0
                                        ? "col-span-1 row-span-1"
                                        : index % 3 === 0
                                        ? "col-span-2 row-span-2"
                                        : index % 2 === 0
                                        ? "col-span-1 row-span-1"
                                        : index !== 0 && index % 1 === 0
                                        ? "col-span-1 row-span-1"
                                        : "col-span-1 row-span-2"
                                }`}
                            >
                                {" "}
                                {image.alt}
                                <Image
                                    width={image.width}
                                    height={image.height}
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
export default Voting;
