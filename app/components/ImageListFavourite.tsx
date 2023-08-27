"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import BtnFavourite from "./buttons/BtnFavourite";
import { isBreedsFoundSelector } from "../redux/searchImages/selectorSearchImages";
import NotFound from "./NotFound";
import {
    setIsBreedsFound,
    setSearchValue,
} from "../redux/searchImages/sliceSearchImages";
import {
    IImageFavorite,
    useAddFavorites,
    useGetFavorites,
} from "../api/useFavourites";

const ImageListFavourite = () => {
    const [images, setImages] = useState<IImageFavorite[]>([]);
    const [chunkedImages, setChunkedImages] = useState<IImageFavorite[][]>([]);
    const { data } = useGetFavorites();
    const routerPage = usePathname();
    const link = "/favorites";
    const isBreedsFound = useSelector(isBreedsFoundSelector);
    const dispatch = useDispatch();
    useAddFavorites();

    useEffect(() => {
        dispatch(setIsBreedsFound(true));
        dispatch(setSearchValue(""));
    }, [dispatch, routerPage]);

    useEffect(() => {
        if (data) {
            setImages(data);
        }
    }, [data]);

    useEffect(() => {
        if (images && images.length > 0) {
            const newChunkedImages = [];
            for (let i = 0; i < images.length; i += chunkSize) {
                const chunk = images.slice(i, i + chunkSize);
                newChunkedImages.push(chunk);
            }
            setChunkedImages(newChunkedImages);
        }
    }, [images]);

    const chunkSize = 10;
    console.log(data);

    return (
        <>
            {isBreedsFound ? (
                <div className="overflow-y-scroll">
                    <div className="grid grid-cols-[repeat(3,_200px)] auto-rows-[140px] gap-5 w-[640px]">
                        {chunkedImages.map((chunk) =>
                            chunk.map((image, index) => (
                                <div
                                    data-index={index}
                                    key={index}
                                    className={`bg-slate-400 rounded-[20px] overflow-hidden relative ${
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
                                    <Image
                                        fill
                                        src={image.image.url}
                                        alt={image.image.id}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute transition ease-in-out duration-300 top-0 left-0 w-full h-full bg-transparent-primaryLight60 opacity-0 hover:opacity-100">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <BtnFavourite
                                                imageId={image.image.id}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default ImageListFavourite;
