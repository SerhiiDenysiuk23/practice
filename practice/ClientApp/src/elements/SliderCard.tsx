import React from 'react';

const SliderCard = () => {
    return (
        <div className="slider_card">
            <img src={process.env.PUBLIC_URL + "/media/category/jacket.png"} alt="jacket"/>
            <div className="slider_name">Куртки</div>
        </div>
    );
};

export default SliderCard;