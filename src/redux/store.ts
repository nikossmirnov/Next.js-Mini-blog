import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper, MakeStore, Context } from "next-redux-wrapper";
import appReducer from "./AppReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export interface State {
    tick: string;
}
const middleware = getDefaultMiddleware({
    thunk: true,
});
const makeStore: MakeStore<State> = (context: Context) =>
    configureStore({
        reducer: {
            app: appReducer,
        },
        middleware,
    });
export const wrapper = createWrapper<State>(makeStore, { debug: true });
