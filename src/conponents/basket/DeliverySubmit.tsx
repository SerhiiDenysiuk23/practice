import React from 'react';

const DeliverySubmit = () => {
    return (
        <div className="ordering-form_delivery-submit">
            <div className="ordering-form_link sign-in"><a href="">Войти в личный кабинет</a>
            </div>
            <div className="ordering-form_link"><a href="">УСЛОВИЯ ДОСТАВКИ</a></div>
            <div className="ordering-form_link"><a href="">УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</a></div>
            <div className="ordering-form_link"><a href="">ИНФОРМАЦИЯ ОБ ОПЛАТЕ</a></div>
            <div className="ordering-form_total">ДОСТАВКА: <div>По тарифам перевозчика</div>
            </div>
            <div className="ordering-form_total">БОНУСЫ: <div>-69 грн</div></div>
            <div className="ordering-form_total">ИТОГО: <div>15250 грн</div></div>
            <input type="button" value="ОФОРМИТЬ ЗАКАЗ"/>
            <p>Нажимая на кнопку «оплатить заказ», я принимаю условия
                <a href="">публичной оферты</a> и <a href="">политики конфиденциальности</a></p>
        </div>
    );
};

export default DeliverySubmit;