import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Size} from "../../types/Size";

interface SizeStateType{
    size: Size | null
    sizeList: Size[]
}

const initialState: SizeStateType = {
    size: null,
    sizeList: []
}

export const sizeSlice = createSlice({
    name: "sizeSlice",
    initialState,
    reducers:{
        setSizeList: (state, action: PayloadAction<Size[]>) => {
            return {...state, sizeList: action.payload}
        },
        setSize:(state, action: PayloadAction<Size>) => {
            return {...state, size: action.payload}
        },
        createSize:(state, action: PayloadAction<Size>) => {
            return {...state, sizeList: [action.payload, ...state.sizeList]}
        },
        deleteSize:(state, action: PayloadAction<Size>) => {
            return {...state, sizeList: state.sizeList.filter(item => item.id != action.payload.id)}
        }
    }
})

export const setSizeListAction = createAction("setSizeList")
export const createSizeAction = createAction<Size>("createSize")
export const deleteSizeAction = createAction<Size>("deleteSize")
export const {setSizeList, setSize, createSize, deleteSize} = sizeSlice.actions
