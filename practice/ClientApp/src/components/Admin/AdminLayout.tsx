import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {Category} from "../../types/Category";
import {useDispatch} from "react-redux";
import {
    createCategoryAction,
    deleteCategoryAction,
    setCategoryListAction
} from "../../store/category/categorySlice";

const AdminLayout = () => {
    const dispatch = useDispatch()
    const {categoryList} = useAppSelector(state => state.categoryReducer)
    const [categoryPost, setCategoryPost] = useState<Category | null>(null)

    const categoryCreateHandler = () => {
        if (categoryPost && !categoryList.find(item => item.name == categoryPost.name)) {
            dispatch(createCategoryAction(categoryPost))
        }
    }

    useEffect(()=> {
        dispatch(setCategoryListAction())
    }, [])

    return (
        <main>
            <table>
                <thead>
                <tr>
                    <th>Категории</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <input
                            onChange={e => setCategoryPost({id: 0, name: e.target.value})}
                            type="text"
                            // value={categoryPost.name}
                            placeholder={"Name"}/>
                    </td>
                    <td>
                        <button onClick={categoryCreateHandler}>Create</button>
                    </td>
                </tr>
                {
                    categoryList.length > 0
                        ? categoryList.map(item =>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td><button onClick={()=>{
                                    dispatch(deleteCategoryAction(item))
                                }}>Delete</button></td>
                            </tr>)
                        : null
                }
                </tbody>
            </table>
        </main>
    );
};

export default AdminLayout;