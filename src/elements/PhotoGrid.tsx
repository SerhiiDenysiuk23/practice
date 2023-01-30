import React from 'react';

const PhotoGrid = () => {
    return (
        <ul className="product_photo-grid">
            {
                [...Array(5)].map((value, index) => <li key={index} className="product_photo-side"><img
                    src={process.env.PUBLIC_URL + "/media/product/coat.png"}
                    alt="photo"/></li>)
            }
            <li className="product_photo-main"><img src={process.env.PUBLIC_URL + "/media/product/coat.png"}
                                                    alt="photo"/>
            </li>
        </ul>
    );
};

export default PhotoGrid;