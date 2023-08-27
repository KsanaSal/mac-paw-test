import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useEffect, useState } from "react";
import { API_PATH } from "./apiPath";
import { useSelector } from "react-redux";

import {
    currentBreedIdSelector,
    fetchTriggerSelector,
    limitImagesSelector,
    mimeTypeSelector,
    sortOrderSelector,
} from "../redux/searchImages/selectorSearchImages";

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", apiKey);

var requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};

const fetcher = (url: string) =>
    fetch(url, requestOptions)
        .then((res) => res.json())
        .then();

export interface IImage {
    id: string;
    url: string;
    height: number;
    width: number;
    breeds: IBreed[];
}

interface IGetImagesResponse {
    data: IImage[];
    isImagesError: any;
    isLoading: boolean;
}

export const useGetImages = (): IGetImagesResponse => {
    const currentBreedId = useSelector(currentBreedIdSelector);
    const limitImages = useSelector(limitImagesSelector);
    const sortOrder = useSelector(sortOrderSelector);
    const mimeType = useSelector(mimeTypeSelector);
    const fetchTrigger = useSelector(fetchTriggerSelector);

    const { trigger, data, isMutating, error } = useSWRMutation(
        `${apiUrl}${API_PATH.SEARCH}?format=json&limit=${limitImages}&breed_ids=${currentBreedId}&order=${sortOrder}&mime_types=${mimeType}`,
        fetcher
    );

    const handleUpdate = async () => {
        try {
            await trigger();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (fetchTrigger) {
            handleUpdate();
        }
    }, [currentBreedId, limitImages, sortOrder, mimeType, fetchTrigger]);

    return {
        data,
        isLoading: isMutating,
        isImagesError: error,
    };
};

export interface IBreed {
    id: string;
    name: string;
    description: string;
    origin: string;
    temperament: string;
    life_span: string;
    weight: { imperial: string; metric: string };
}

interface IGetBreedsResponse {
    breedList: IBreed[];
    isLoading: boolean;
    isBreedsError: any;
}

interface IFetchResponse<T> {
    data: T;
    error: any;
    isLoading: boolean;
}

export const useGetBreeds = (): IGetBreedsResponse => {
    const { data, error, isLoading }: IFetchResponse<IBreed[]> = useSWR(
        `${apiUrl}${API_PATH.BREEDS}`,
        fetcher
    );
    return {
        breedList: data,
        isLoading,
        isBreedsError: error,
    };
};

interface IGetBreedsByIdResponse {
    breed: IImage;
    isLoading: boolean;
    isBreedsError: any;
}

export const useGetBreedsById = (id: string): IGetBreedsByIdResponse => {
    const { data, error, isLoading }: IFetchResponse<IImage> = useSWR(
        `${apiUrl}${API_PATH.IMAGES}/${id}`,
        fetcher
    );
    return {
        breed: data,
        isLoading,
        isBreedsError: error,
    };
};
