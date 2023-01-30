import {configureStore} from "@reduxjs/toolkit";
import {headerSlice} from "./headerSlice"

export const store = configureStore({
    reducer: {
        headerReducer: headerSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const state = store.getState();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;