import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptResultMovies: [],
        searchResultsFound: true,
        isSearching: false,
        userGPTKey: null
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
        },
        addUserGPTKey: (state, action) => {
            state.userGPTKey = action.payload;
        }
    }
})

export const { addGptResultMovies, updateSearchResultStatus, updateIsSearching, addUserGPTKey } = gptSlice.actions;
export default gptSlice.reducer;