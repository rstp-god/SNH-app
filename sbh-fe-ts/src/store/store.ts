import {
	configureStore,
} from "@reduxjs/toolkit";
import { mainReducer } from "./reducer";

export const store = configureStore({
	reducer: {mainReducer},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch