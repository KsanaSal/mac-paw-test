"use client";
import { usePathname } from "next/navigation";
import BtnBack from "../../../components/buttons/BtnBack";
import BtnRout from "../../../components/buttons/BtnRout";
import Image from "next/image";
import { IImage, useGetBreedsById } from "../../../api/useBreeds";
import { useEffect, useState } from "react";

const Breed = ({ params }: { params: { slug: string } }) => {
    console.log(params);
    const router = usePathname();
    const link = "/breeds";
    const isActive = router === link;
    const [breedData, setBreedData] = useState<IImage>();
    console.log(router);
    const { breed } = useGetBreedsById(params.slug);

    useEffect(() => {
        if (breed) {
            setBreedData(breed);
        }
    }, [breed]);

    return (
        <>
            {breedData && (
                <div className="flex flex-col w-[680px] h-[770px] bg-white p-[20px] rounded-[20px] gap-[20px]">
                    <div className="flex gap-[10px]">
                        <BtnBack />
                        <BtnRout
                            extraStyles={`${
                                isActive
                                    ? "bg-primaryDark text-white"
                                    : "bg-primaryLight text-primaryDark"
                            } group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white`}
                            link={link}
                            text={"Breeds"}
                        />
                        <BtnRout
                            extraStyles={` bg-primaryDark text-white group-hover:bg-primaryLight group-active:bg-primaryDark group-active:text-white`}
                            link={params.slug}
                            text={breedData.breeds[0].id}
                        />
                    </div>
                    <div className="h-[360px] rounded-[20px] overflow-hidden">
                        <Image
                            width={breedData.width}
                            height={breedData.height}
                            src={breedData.url}
                            objectFit="contain"
                            alt={breedData.id}
                            className="h-full object-contain rounded-[20px] overflow-hidden"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-[20px] border-2 border-primaryLight rounded-[20px] relative min-h-[204px] mt-[30px] px-[20px] pb-[20px] w-[640px]">
                        <h1 className="text-[36px] font-medium text-grayDark absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white py-[5px] px-[40px] rounded-[20px]">
                            {breedData.breeds[0].name}
                        </h1>
                        <p className="text-[20px] font-medium text-grayMedium mt-[30px] line-clamp-3">
                            {breedData.breeds[0].description}
                        </p>
                        <div className="flex gap-[20px]">
                            <div className="w-[270px] flex flex-col gap-[4px]">
                                <span className="font-medium text-[16px] text-grayDark">
                                    Temperament:
                                </span>
                                <p className="text-[16px] text-grayMedium">
                                    {breedData.breeds[0].temperament}
                                </p>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <p className="text-[16px] text-grayMedium">
                                    <span className="font-medium text-[16px] text-grayDark">
                                        Origin:
                                    </span>{" "}
                                    {breedData.breeds[0].origin}
                                </p>
                                <p className="text-[16px] text-grayMedium">
                                    <span className="font-medium text-[16px] text-grayDark">
                                        Weight:
                                    </span>{" "}
                                    {breedData.breeds[0].weight.metric} kgs
                                </p>
                                <p className="text-[16px] text-grayMedium">
                                    <span className="font-medium text-[16px] text-grayDark">
                                        Life span:
                                    </span>{" "}
                                    {breedData.breeds[0].life_span} years
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Breed;
