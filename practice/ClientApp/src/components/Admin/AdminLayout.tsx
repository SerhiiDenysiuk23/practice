import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import CategoryTable from "./CategoryTable";
import ColorTable from "./ColorTable";
import SizeTable from "./SizeTable";
import ProductAddForm from "./ProductAddForm";

const AdminLayout = () => {
    const {sizeList} = useAppSelector(state => state.sizeReducer)
    const {colorList} = useAppSelector(state => state.colorReducer)
    const {categoryList} = useAppSelector(state => state.categoryReducer)


    return (
        <main>
            <CategoryTable/>
            <ColorTable/>
            <SizeTable/>
            {
                sizeList.length
                && colorList.length
                && categoryList.length
                    ? <ProductAddForm/>
                    : null
            }
        </main>
    );
};

export default AdminLayout;