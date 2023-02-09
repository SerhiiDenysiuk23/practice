import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {Category} from "../../types/Category";
import {useDispatch} from "react-redux";
import {
    createCategoryAction,
    deleteCategoryAction,
    setCategoryListAction
} from "../../store/category/categorySlice";
import CategoryTable from "./CategoryTable";
import ColorTable from "./ColorTable";

const AdminLayout = () => {

    return (
        <main>
            <CategoryTable/>
            <ColorTable/>
        </main>
    );
};

export default AdminLayout;