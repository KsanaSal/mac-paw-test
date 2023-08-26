import { createSlice } from "@reduxjs/toolkit";

export interface IBreedInitialState {
    currentBreedId: string;
    limitImages: string;
    sortOrder: string;
    mimeType: string;
}

const initialState: IBreedInitialState = {
    currentBreedId: "",
    limitImages: "10",
    sortOrder: "RANDOM",
    mimeType: "jpg,png",
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
    },
});

export const { setLimitImages, setCurrentBreedId, setSortOrder, setMimeTypes } =
    sliceBreeds.actions;
export default sliceBreeds.reducer;
