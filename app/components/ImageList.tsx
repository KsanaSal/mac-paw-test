import Image from "next/image";
import { useEffect, useState } from "react";
import { IImage, useGetImages } from "../api/useBreeds";
// import { currentBreedIdSelector } from "../redux/searchImages/selectorSearchImages";
// import { useSelector } from "react-redux";

const ImageList = () => {
    const [images, setImages] = useState<IImage[]>([]);
    const [chunkedImages, setChunkedImages] = useState<IImage[][]>([]);
    const { data } = useGetImages();
    // const currentBreedId = useSelector(currentBreedIdSelector);

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

    return (
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
                            width={image.width}
                            height={image.height}
                            src={image.url}
                            alt={image.id}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute transition ease-in-out duration-300 top-0 left-0 w-full h-full bg-transparent-primaryLight60 opacity-0 hover:opacity-100">
                            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2  bg-white py-[5px] px-[42px] rounded-[10px]">
                                {image.breeds && image.breeds.length > 0 ? (
                                    <p>{image.breeds[0].name}</p>
                                ) : (
                                    <p>No breed</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ImageList;
