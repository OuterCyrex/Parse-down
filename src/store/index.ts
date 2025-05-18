import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {MarkdownReducer} from "./markdown.ts";

const store: EnhancedStore = configureStore({
    reducer: {
        markdown: MarkdownReducer,
    }
})

export default store

export type storeState = ReturnType<typeof store.getState>
export type storeDispatch = typeof store.dispatch
