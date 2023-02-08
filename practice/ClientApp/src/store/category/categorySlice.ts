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
        },
        createCategory:(state, action: PayloadAction<Category>) => {
            return {...state, categoryList: [action.payload, ...state.categoryList]}
        },
        deleteCategory:(state, action: PayloadAction<Category>) => {
            return {...state, categoryList: state.categoryList.filter(item => item.id != action.payload.id)}
        }
    }
})

export const setCategoryListAction = createAction("setCategoryList")
export const createCategoryAction = createAction<Category>("createCategory")
export const deleteCategoryAction = createAction<Category>("deleteCategory")
export const {setCategoryList, setCategory, createCategory, deleteCategory} = categorySlice.actions
