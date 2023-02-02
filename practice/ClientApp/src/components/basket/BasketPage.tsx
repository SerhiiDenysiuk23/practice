import React from 'react';
import Breadcrumb from "../../elements/Breadcrumb";
import OrderElem from "../../elements/OrderElem";
import DeliveryForm from "./DeliveryForm";
import DeliverySubmit from "./DeliverySubmit";

const BasketPage = () => {
    return (
        <main>
            <div className="container">
                <Breadcrumb/>
            </div>

            <section className="container order">
                <h3>Ваш заказ</h3>
                {[...Array(2)].map((value, index)=> <OrderElem key={index}/>)}
                <div className="order_sum">
                    К оплате: <b>15250 грн</b>
                </div>
            </section>

            <section className="container ordering-form">
                <h3>Оформление заказа</h3>
                <form className="ordering-form_container">
                    <DeliveryForm/>
                    <DeliverySubmit/>
                </form>
            </section>
        </main>
    );
};

export default BasketPage;