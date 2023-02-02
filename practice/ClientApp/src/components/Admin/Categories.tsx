import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {Category} from "../../types/Category";
import {useDispatch} from "react-redux";
import {setCategoryListAction} from "../../store/category/categorySlice";

const Categories = () => {
    const {categoryList} = useAppSelector(state => state.categoryReducer)
    // const [list, setList] = useState<Category[]>([])
    // const [a, setA] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(setCategoryListAction())
    }, [])

    return (
        <main>
            <div>
                <input type="text" placeholder={"Category name"}/>
                <button onClick={() => dispatch(setCategoryListAction())
                }>Use Effect
                </button>
            </div>
        </main>
    );
};

export default Categories;