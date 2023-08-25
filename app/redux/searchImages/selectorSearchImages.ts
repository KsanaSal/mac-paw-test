import { IBreedInitialState } from "./sliceSearchImages";

export const currentBreedIdSelector = (state: { images: IBreedInitialState }) =>
    state.images.currentBreedId;
export const limitImagesSelector = (state: { images: IBreedInitialState }) =>
    state.images.limitImages;
export const sortOrderSelector = (state: { images: IBreedInitialState }) =>
    state.images.sortOrder;
