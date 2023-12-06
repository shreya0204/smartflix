import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    movie: null
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.movie = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.movie = null;
        }
    }
});
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
