import {configureStore} from "@reduxjs/toolkit";
import {apiAccount} from "../services/apiAccount.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer: {
        [apiAccount.reducerPath]: apiAccount.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiAccount.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;