import {configureStore} from "@reduxjs/toolkit";
import {headerSlice} from "./headerSlice"
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {categoryEpics} from "./category/categoryEpic";
import {categorySlice} from "./category/categorySlice";
import {colorSlice} from "./color/colorSlice";
import {colorEpics} from "./color/colorEpic";

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(categoryEpics, colorEpics);

export const store = configureStore({
    reducer: {
        headerReducer: headerSlice.reducer,
        categoryReducer: categorySlice.reducer,
        colorReducer: colorSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(epicMiddleware)
})

export const state = store.getState();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

epicMiddleware.run(rootEpic)