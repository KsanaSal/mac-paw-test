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
export const fetchTriggerSelector = (state: { images: IBreedInitialState }) =>
    state.images.fetchTrigger;
export const favoriteImageIdSelector = (state: {
    images: IBreedInitialState;
}) => state.images.favoriteImageId;
export const favoriteImageIdRemoveSelector = (state: {
    images: IBreedInitialState;
}) => state.images.favoriteImageIdRemove;
export const votesSelector = (state: { images: IBreedInitialState }) =>
    state.images.votes;
export const votedImageIdSelector = (state: { images: IBreedInitialState }) =>
    state.images.votedImageId;
