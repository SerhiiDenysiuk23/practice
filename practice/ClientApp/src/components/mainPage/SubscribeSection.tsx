import React from 'react';

const SubscribeSection = () => {
    return (
        <>
            <h2 className="section-title center-text-align">Узнайте первым о новинках</h2>
            <form className="news-subscribe">
                <input type="text" placeholder="Ваш e-mail*"/>
                <input type="button" value="ПОДПИСАТЬСЯ"/>
                <p>
                    Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и
                    ознакомлен(а) с
                    условиями конфиденциальности.
                </p>
            </form>
        </>
    );
};

export default SubscribeSection;