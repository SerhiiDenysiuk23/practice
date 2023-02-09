import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category} from "../../types/Category";
import {Color} from "../../types/Color";

interface ColorStateType{
    color: Color | null
    colorList: Color[]
}

const initialState: ColorStateType = {
    color: null,
    colorList: []
}

export const colorSlice = createSlice({
    name: "colorSlice",
    initialState,
    reducers:{
        setColorList: (state, action: PayloadAction<Color[]>) => {
            return {...state, colorList: action.payload}
        },
        setColor:(state, action: PayloadAction<Color>) => {
            return {...state, color: action.payload}
        },
        createColor:(state, action: PayloadAction<Color>) => {
            return {...state, colorList: [action.payload, ...state.colorList]}
        },
        deleteColor:(state, action: PayloadAction<Color>) => {
            return {...state, colorList: state.colorList.filter(item => item.id != action.payload.id)}
        }
    }
})

export const setColorListAction = createAction("setColorList")
export const createColorAction = createAction<Color>("createColor")
export const deleteColorAction = createAction<Color>("deleteColor")
export const {setColorList, setColor, createColor, deleteColor} = colorSlice.actions
