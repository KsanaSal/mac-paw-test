import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useEffect } from "react";
import { API_PATH } from "./apiPath";
import { useSelector } from "react-redux";

import {
    favoriteImageIdRemoveSelector,
    fetchTriggerSelector,
    votedImageIdSelector,
    votesSelector,
} from "../redux/searchImages/selectorSearchImages";
import { IImage } from "./useBreeds";

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

interface IGetImagesResponse {
    data: IImage[];
    isImagesError: any;
    isLoading: boolean;
}

export interface IImageVotes {
    id: number;
    created_at: string;
    image_id: string;
    url: string;
    image: { id: string; url: string };
    value: number;
}
interface IGetVotesImagesResponse {
    data: IImageVotes[];
    isImagesError: any;
    isLoading: boolean;
}

export const useAddVotes = (): IGetImagesResponse => {
    const votes = useSelector(votesSelector);
    const votedImageId = useSelector(votedImageIdSelector);
    const fetchTrigger = useSelector(fetchTriggerSelector);
    async function sendUpdateRequest(url: string) {
        return fetch(url, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({ image_id: votedImageId, value: votes }),
        }).then((res) => {
            return res.json();
        });
    }

    const { trigger, data, isMutating, error } = useSWRMutation(
        `${apiUrl}${API_PATH.VOTES}`,
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
        if (votedImageId) {
            handleUpdate();
        }
    }, [votedImageId, votes]);

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

export const useGetVoting = (): IGetVotesImagesResponse => {
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
        `${apiUrl}${API_PATH.VOTES}`,
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

    useEffect(() => {
        if (true) {
            handleUpdate();
        }
    }, [fetchTrigger]);

    return {
        data,
        isLoading: isMutating,
        isImagesError: error,
    };
};
