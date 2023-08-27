import { IBreedInitialState } from "./sliceSearchImages";

export const currentBreedIdSelector = (state: { images: IBreedInitialState }) =>
    state.images.currentBreedId;
export const limitImagesSelector = (state: { images: IBreedInitialState }) =>
    state.images.limitImages;
export const sortOrderSelector = (state: { images: IBreedInitialState }) =>
    state.images.sortOrder;
export const mimeTypeSelector = (state: { images: IBreedInitialState }) =>
    state.images.mimeType;
export const searchValueSelector = (state: { images: IBreedInitialState }) =>
    state.images.searchValue;
export const isBreedsFoundSelector = (state: { images: IBreedInitialState }) =>
    state.images.isBreedsFound;
export const searchNameSelector = (state: { images: IBreedInitialState }) =>
    state.images.searchName;
