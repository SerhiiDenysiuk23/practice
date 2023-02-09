import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import CatalogPage from "../catalog/CatalogPage";
import ProductPage from "../product/ProductPage";
import BasketPage from "../basket/BasketPage";
import AdminLayout from "../Admin/AdminLayout"
import CategoryTable from "../Admin/CategoryTable";

const Content = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/catalog"} element={<CatalogPage/>}/>
            <Route path={"/product"} element={<ProductPage/>}/>
            <Route path={"/basket"} element={<BasketPage/>}/>
            <Route path={"/admin"} element={<AdminLayout/>}/>
            <Route path={"/admin/category"} element={<CategoryTable/>}/>
        </Routes>
    );
};

export default Content;