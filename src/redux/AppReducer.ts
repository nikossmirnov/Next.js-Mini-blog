import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyPost } from "../../interfaces/post";

const initialState = {
    current_post: {},
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        currentPost: (state, action: PayloadAction<MyPost>) => {
            state.current_post = action.payload;
        },
    },
});

export const { currentPost } = appSlice.actions;

export default appSlice.reducer;
