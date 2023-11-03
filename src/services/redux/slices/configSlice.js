import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        preferredLanguage: "en",
    },
    reducers: {
        setPreferredLanguage: (state, action) => {
            state.preferredLanguage = action.payload;
        }
    }
})

export const { setPreferredLanguage } = configSlice.actions;
export default configSlice.reducer;