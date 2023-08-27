import { createSlice } from "@reduxjs/toolkit";

export interface IBreedInitialState {
    currentBreedId: string;
    limitImages: string;
    sortOrder: string;
    mimeType: string;
    searchValue: string;
    isBreedsFound: boolean;
}

const initialState: IBreedInitialState = {
    currentBreedId: "",
    limitImages: "10",
    sortOrder: "RANDOM",
    mimeType: "jpg,png",
    searchValue: "",
    isBreedsFound: true,
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
    },
});

export const {
    setLimitImages,
    setCurrentBreedId,
    setSortOrder,
    setMimeTypes,
    setSearchValue,
    setIsBreedsFound,
} = sliceBreeds.actions;
export default sliceBreeds.reducer;
