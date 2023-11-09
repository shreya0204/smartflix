import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptResultMovies: [],
        searchResultsFound: true,
        isSearching: false
    },
    reducers: {
        addGptResultMovies: (state, action) => {
            state.gptResultMovies = action.payload;
        },
        updateSearchResultStatus: (state, action) => {
            state.searchResultsFound = action.payload;
        },
        updateIsSearching: (state, action) => {
            state.isSearching = action.payload;
        }
    }
})

export const { addGptResultMovies, updateSearchResultStatus, updateIsSearching } = gptSlice.actions;
export default gptSlice.reducer;