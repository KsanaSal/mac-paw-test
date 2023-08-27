import { createSlice } from "@reduxjs/toolkit";

export interface IBreedInitialState {
    currentBreedId: string;
    limitImages: string;
    sortOrder: string;
    mimeType: string;
    searchValue: string;
    isBreedsFound: boolean;
    searchName: string;
    fetchTrigger: number;
    favoriteImageId: string;
    favoriteImageIdRemove: string;
}

const initialState: IBreedInitialState = {
    currentBreedId: "",
    limitImages: "10",
    sortOrder: "RANDOM",
    mimeType: "jpg,png",
    searchValue: "",
    isBreedsFound: true,
    searchName: "",
    fetchTrigger: 1,
    favoriteImageId: "",
    favoriteImageIdRemove: "",
};

const sliceBreeds = createSlice({
    name: "breeds",
    initialState,
    reducers: {
        setCurrentBreedId: (state, action) => {
            state.currentBreedId = action.payload;
        },

        setLimitImages: (state, action) => {
            state.limitImages = action.payload;
        },

        setSortOrder: (state, action) => {
            state.sortOrder = action.payload;
        },

        setMimeTypes: (state, action) => {
            state.mimeType = action.payload;
        },

        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },

        setIsBreedsFound: (state, action) => {
            state.isBreedsFound = action.payload;
        },

        setSearchName: (state, action) => {
            state.searchName = action.payload;
        },
        setFetchTrigger: (state, action) => {
            state.fetchTrigger = action.payload;
        },

        setFavoriteImageId: (state, action) => {
            state.favoriteImageId = action.payload;
        },
        setFavoriteImageIdRemove: (state, action) => {
            state.favoriteImageIdRemove = action.payload;
        },
    },
});

export const {
    setLimitImages,
    setCurrentBreedId,
    setSortOrder,
    setMimeTypes,
    setSearchValue,
    setIsBreedsFound,
    setSearchName,
    setFetchTrigger,
    setFavoriteImageId,
    setFavoriteImageIdRemove,
} = sliceBreeds.actions;
export default sliceBreeds.reducer;
