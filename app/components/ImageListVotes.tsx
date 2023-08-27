"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { isBreedsFoundSelector } from "../redux/searchImages/selectorSearchImages";
import NotFound from "./NotFound";
import {
    setIsBreedsFound,
    setSearchValue,
} from "../redux/searchImages/sliceSearchImages";
import { IImageFavorite } from "../api/useFavourites";
import { useAddVotes, useGetVoting } from "../api/useVoting";

const ImageListVotes = () => {
    const [images, setImages] = useState<IImageFavorite[]>([]);
    const [chunkedImages, setChunkedImages] = useState<IImageFavorite[][]>([]);
    const { data } = useGetVoting();
    const routerPage = usePathname();
    const link = "/likes";
    const isActive = routerPage === link;
    const isBreedsFound = useSelector(isBreedsFoundSelector);
    const dispatch = useDispatch();
    useAddVotes();

    useEffect(() => {
        dispatch(setIsBreedsFound(true));
        dispatch(setSearchValue(""));
    }, [dispatch, routerPage]);

    useEffect(() => {
        if (data) {
            setImages(
                isActive
                    ? data.filter((data) => data.value === 1)
                    : data.filter((data) => data.value === 0)
            );
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

export default ImageListVotes;
