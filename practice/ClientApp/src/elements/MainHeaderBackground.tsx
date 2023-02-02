import React from 'react';

const MainHeaderBackground = () => {
    return (
        <div className="header_photo-block">
            <div className="photo-block_photo">
                <img src={process.env.PUBLIC_URL + "/media/header1.png"} alt="header_img"/>
            </div>
            <div className="photo-block_photo">
                <img src={process.env.PUBLIC_URL + "/media/header2.png"} alt="header_img"/>
            </div>
            <div className="photo-block_photo">
                <img src={process.env.PUBLIC_URL + "/media/header3.png"} alt="header_img"/>
            </div>
        </div>
    );
};

export default MainHeaderBackground;