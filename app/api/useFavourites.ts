import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useEffect, useState } from "react";
import { API_PATH } from "./apiPath";
import { useSelector } from "react-redux";

import {
    currentBreedIdSelector,
    favoriteImageIdRemoveSelector,
    favoriteImageIdSelector,
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

const requestOptions: RequestInit = {
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

export interface IImageFavorite {
    id: number;
    created_at: string;
    image_id: string;
    url: string;
    image: { id: string; url: string };
}
interface IGetFavoritesImagesResponse {
    data: IImageFavorite[];
    isImagesError: any;
    isLoading: boolean;
}

export interface IBreed {
    id: string;
    name: string;
    description: string;
    origin: string;
    temperament: string;
    life_span: string;
    weight: { imperial: string; metric: string };
}

export const useAddFavorites = (): IGetImagesResponse => {
    const favoriteImageId = useSelector(favoriteImageIdSelector);
    async function sendUpdateRequest(url: string) {
        return fetch(url, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({ image_id: favoriteImageId }),
        }).then((res) => {
            return res.json();
        });
    }

    const { trigger, data, isMutating, error } = useSWRMutation(
        `${apiUrl}${API_PATH.FAVOURITES}`,
        sendUpdateRequest
    );

    const handleUpdate = async () => {
        try {
            await trigger();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (favoriteImageId) {
            handleUpdate();
        }
    }, [favoriteImageId]);

    return {
        data,
        isLoading: isMutating,
        isImagesError: error,
    };
};
export const useDeleteFavorites = (): IGetImagesResponse => {
    const favoriteImageIdRemove = useSelector(favoriteImageIdRemoveSelector);

    async function sendUpdateRequest(url: string) {
        return fetch(url, {
            method: "DELETE",
            headers: myHeaders,
        }).then((res) => {
            return res.json();
        });
    }

    const { trigger, data, isMutating, error } = useSWRMutation(
        `${apiUrl}${API_PATH.FAVOURITES}/${favoriteImageIdRemove}`,
        sendUpdateRequest
    );

    const handleUpdate = async () => {
        try {
            await trigger();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (favoriteImageIdRemove) {
            handleUpdate();
        }
    }, [favoriteImageIdRemove]);

    return {
        data,
        isLoading: isMutating,
        isImagesError: error,
    };
};

export const useGetFavorites = (): IGetFavoritesImagesResponse => {
    const favoriteImageId = useSelector(favoriteImageIdSelector);
    const fetchTrigger = useSelector(fetchTriggerSelector);
    async function sendUpdateRequest(url: string) {
        return fetch(url, {
            method: "GET",
            headers: myHeaders,
        }).then((res) => {
            return res.json();
        });
    }

    const { trigger, data, isMutating, error } = useSWRMutation(
        `${apiUrl}${API_PATH.FAVOURITES}`,
        sendUpdateRequest,
        { revalidate: true }
    );

    const handleUpdate = async () => {
        try {
            await trigger();
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     handleUpdate();
    // }, []);

    useEffect(() => {
        if (favoriteImageId) {
            handleUpdate();
        }
        console.log(data);
    }, [fetchTrigger]);

    return {
        data,
        isLoading: isMutating,
        isImagesError: error,
    };
};
