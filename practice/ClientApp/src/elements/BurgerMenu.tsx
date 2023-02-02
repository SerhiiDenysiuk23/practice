import React, {FC} from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {navExtend} from "../store/headerSlice";

const BurgerMenu: FC<{ close?: "_close" }> = ({close}) => {
    const dispatch = useDispatch()
    return (
        <div onClick={()=>dispatch(navExtend())} className={`burger-menu${close ?? ""}`}>
            <div/>
            <div/>
            {!close ? <div/> : null}
        </div>
    );
}
;

export default BurgerMenu;