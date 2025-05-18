import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {storeState} from "./index.ts";

export const MarkdownSlice = createSlice({
    name: 'markdown',
    initialState: {
        value: '',
    },
    reducers: {
        setMarkdown: (state: storeState, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { setMarkdown } = MarkdownSlice.actions
export const MarkdownReducer = MarkdownSlice.reducer
