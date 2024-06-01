import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.selectedProducts = [];
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state) => {
            state.currentUser = null;
            state.selectedProducts = [];
            state.productQuantity = 0,
            state.loading = false;
            state.error = null;
        },
    }
});

export const {
    signInStart,
    signInSuccess,
    signInFailure,
    signOut,
} = userSlice.actions;

export default userSlice.reducer;
