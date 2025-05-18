import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { FileInfo } from "../types/history.ts";
import {storeState} from "./index.ts";

export const FileSlice = createSlice({
    name: "file",
    initialState: {
        value: new FileInfo('')
    },
    reducers: {
        setFilePath: (state: storeState, action: PayloadAction<string>) => {
            state.value.filePath = action.payload
        }
    }
})
