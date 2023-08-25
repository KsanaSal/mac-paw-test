import { createSlice } from "@reduxjs/toolkit";

export interface IBreedInitialState {
    breeds: string[];
    currentBreedId: string;
}

const initialState: IBreedInitialState = {
    breeds: [],
    currentBreedId: "",
};

const sliceBreeds = createSlice({
    name: "breeds",
    initialState,
    reducers: {
        setBreeds: (state, action) => {
            state.breeds = action.payload;
        },

        setCurrentBreedId: (state, action) => {
            state.currentBreedId = action.payload;
        },
    },
});

export const { setBreeds, setCurrentBreedId } = sliceBreeds.actions;
export default sliceBreeds.reducer;
