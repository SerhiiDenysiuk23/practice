import React from 'react';
import SliderCard from "../../elements/SliderCard";

const SliderSection = () => {
    return (
        <>
            <h2 className="section-title">Категории</h2>

            <div className="slider_button slider_next">
                <div className="arrow right">^</div>
            </div>
            <div className="slider_button slider_prev no-display">
                <div className="arrow left">^</div>
            </div>

            <div className="slider">
                {
                    [...Array(4)].map((value, index, array) =>
                        <SliderCard key={index}/>
                    )
                }
            </div>
        </>
    );
};

export default SliderSection;