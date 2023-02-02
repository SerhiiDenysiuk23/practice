import {createSlice} from "@reduxjs/toolkit";

interface HeaderStateType{
    isNavExtended: boolean
}

const initialState: HeaderStateType = {
    isNavExtended: false
}

export const headerSlice = createSlice({
    name: "headerSlice",
    initialState,
    reducers:{
        navExtend: (state) => {
            return {...state, isNavExtended: !state.isNavExtended}
        }
    }
})

export const {navExtend} = headerSlice.actions