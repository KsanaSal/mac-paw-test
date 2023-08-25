import { combineReducers, configureStore } from "@reduxjs/toolkit";
import breedsReducer from "./breeds/sliceBreeds";

const rootReducer = combineReducers({
    breeds: breedsReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
