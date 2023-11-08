import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptResultMovies: [],
    },
    reducers: {
        addGptResultMovies: (state, action) => {
            state.gptResultMovies = action.payload;
        }
    }
})

export const { addGptResultMovies } = gptSlice.actions;
export default gptSlice.reducer;