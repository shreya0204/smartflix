import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        error: null,
    },
    reducers: {
        setMovies: (state, action) => {
            const { popular, top_rated, upcoming } = action.payload;
            state.popularMovies = popular;
            state.topRatedMovies = top_rated;
            state.upcomingMovies = upcoming;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
})

export default moviesSlice.reducer;
export const { setMovies, setError } = moviesSlice.actions;