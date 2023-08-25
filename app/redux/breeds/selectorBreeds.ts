import { IBreedInitialState } from "./sliceBreeds";

export const breedsSelector = (state: IBreedInitialState) => state.breeds;
export const currentBreedIdSelector = (state: { breeds: IBreedInitialState }) =>
    state.breeds.currentBreedId;
