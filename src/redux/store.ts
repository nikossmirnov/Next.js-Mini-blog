import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper, MakeStore, Context } from "next-redux-wrapper";
import appReducer from "./AppReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const middleware = getDefaultMiddleware({
    thunk: true,
});
const makeStore: MakeStore = (context: Context) =>
    configureStore({
        reducer: {
            app: appReducer,
        },
        middleware,
    });
export const wrapper = createWrapper(makeStore, { debug: true });
