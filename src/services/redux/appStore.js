import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import moviesReducer from './slices/moviesSlice'
import configReducer from "./slices/configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        config: configReducer
    }
})

export default appStore;