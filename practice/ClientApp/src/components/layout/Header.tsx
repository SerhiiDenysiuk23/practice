import React, {useState} from 'react';
import Navigation from "../../elements/Navigation";
import NavigationExtended from "../../elements/NavigationExtended";
import MainHeaderBackground from "../../elements/MainHeaderBackground";
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";

const Header = () => {
    const {isNavExtended} = useAppSelector(state => state.headerReducer)

    const navigation: string = useLocation().pathname
    const isMainPage = (navigation == '/')

    return (
        <header className={`header ${isMainPage ? "main-page" : "regular-page"}`}>
            <section className="container">
                {
                    isNavExtended
                        ? <NavigationExtended/>
                        : <Navigation/>
                }

            </section>

            {
                isMainPage
                    ? <>
                        <MainHeaderBackground/>
                        <section className="center-absolute">
                            <h1>Новая коллекция</h1>
                            <div className="line"/>
                            <div className="link-new"><a href="#">СМОТРЕТЬ НОВИНКИ</a></div>
                        </section>
                    </>
                    : null
            }
        </header>

    );
};

export default Header;