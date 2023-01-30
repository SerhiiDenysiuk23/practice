import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import CatalogPage from "../catalog/CatalogPage";
import ProductPage from "../product/ProductPage";
import BasketPage from "../basket/BasketPage";

const Content = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/catalog"} element={<CatalogPage/>}/>
            <Route path={"/product"} element={<ProductPage/>}/>
            <Route path={"/basket"} element={<BasketPage/>}/>
        </Routes>
    );
};

export default Content;