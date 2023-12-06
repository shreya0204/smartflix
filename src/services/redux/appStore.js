import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import moviesReducer from './slices/moviesSlice'
import configReducer from "./slices/configSlice";
import gptReducer from "./slices/gptSlice";
import modalReducer from "./slices/modalSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        config: configReducer,
        gpt: gptReducer,
        modal: modalReducer

    }
})

export default appStore;