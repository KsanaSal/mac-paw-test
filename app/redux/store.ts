import { combineReducers, configureStore } from "@reduxjs/toolkit";

import imagesReducer from "./searchImages/sliceSearchImages";

const rootReducer = combineReducers({
    images: imagesReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
