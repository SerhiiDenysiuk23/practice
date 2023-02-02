import React from 'react';

const DeliveryForm = () => {
    return (
        <div className="ordering-form_delivery-data">
            <div className="row_full ordering-form_title">Персональные данные:</div>
            <input type="text" placeholder="Ваше имя*"/>
            <input type="text" placeholder="Ваша фамилия*"/>
            <input type="text" placeholder="Ваш e-mail*"/>
            <input type="text" placeholder="Ваш телефон*"/>
            <div className="row_full ordering-form_title">Способ доставки:</div>
            <div className="ordering-form_title">По Украине:</div>
            <div id="title_delivery-international"
                 className="ordering-form_title">Международная доставка:
            </div>
            <label>
                <input name="delivery-method" type="radio"/> Самовывоз - вул. Большая
                Васильковская 14(м. Льва
                Толстого)
            </label>
            <label>
                <input name="delivery-method" type="radio"/> Украпочта / 1-3 недели / 30$
            </label>
            <label>
                <input name="delivery-method" type="radio"/> Новая Почта
            </label>
            <label>
                <input name="delivery-method" type="radio"/> DHL / 3-7 дней / 60$
            </label>

            <div className="row_full ordering-form_title">Адрес доставки:</div>
            <input type="text" placeholder="Город*"/>
            <input type="text" placeholder="Отделение почты*"/>

            <div className="row_full ordering-form_title">Вы можете оплатить покупку
                одним из ниже перечисленных
                способов:
            </div>
            <label>
                <input name="delivery-method" type="radio"/> Полная предоплата через
                Приват 24
                <img id="private24-icon" className="ordering-form_icon"
                     src={process.env.PUBLIC_URL + "/media/icons/private24.png"} alt=""/>
            </label>
            <label>
                <input name="delivery-method" type="radio"/> Денежным переводом
                Visa/MasterCard
                <img id="private24-icon" className="ordering-form_icon"
                     src={process.env.PUBLIC_URL + "/media/icons/visa.png"} alt=""/>
                <img id="private24-icon" className="ordering-form_icon"
                     src={process.env.PUBLIC_URL + "/media/icons/mastercard.png"} alt=""/>
            </label>
            <label>
                <input name="delivery-method" type="radio"/> Наложенным платежом в
                отделении Новой Почты
            </label>

            <div className="row_full ordering-form_title">Использование бонусного
                счёта:
            </div>
            <input className="row_full" type="text"
                   placeholder="Сумма списания бонусов*"/>
        </div>
    );
};

export default DeliveryForm;