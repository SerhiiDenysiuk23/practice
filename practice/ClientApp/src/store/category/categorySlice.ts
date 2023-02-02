import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category} from "../../types/Category";

interface CategoryStateType{
    category: Category | null
    categoryList: Category[]
}

const initialState: CategoryStateType = {
    category: null,
    categoryList: []
}

export const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers:{
        setCategoryList: (state, action: PayloadAction<Category[]>) => {
            return {...state, categoryList: action.payload}
        },
        setCategory:(state, action: PayloadAction<Category>) => {
            return {...state, category: action.payload}
        }
    }
})

export const setCategoryListAction = createAction("setCategoryList")
export const {setCategoryList, setCategory} = categorySlice.actions
