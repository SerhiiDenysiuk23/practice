import React from 'react';
import BurgerMenu from "./BurgerMenu";

const NavigationExtended = () => {
    return (
        <nav className="nav-bar extended">
            <BurgerMenu close={"_close"}/>
            <ul className="nav-bar_navigation">
                <li><a href="">ОПЛАТА И ДОСТАВКА</a></li>
                <li><a href="">УСЛОВИЯ ВОЗВРАТА</a></li>
                <li><a href="">КОНТАКТЫ</a></li>
            </ul>
        </nav>
    );
};

export default NavigationExtended;