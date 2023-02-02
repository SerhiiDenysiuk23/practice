import React from 'react';
import SliderCard from "../../elements/SliderCard";
import SubscribeSection from "./SubscribeSection";
import SliderSection from "./SliderSection";

const MainPage = () => {
    return (
        <main>
            <section className="container">
                <SliderSection/>
            </section>
            <section className={"container"}>
                <SubscribeSection/>
            </section>
        </main>
    );
};

export default MainPage;