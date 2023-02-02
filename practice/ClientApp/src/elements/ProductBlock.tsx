import React from 'react';

const ProductBlock = () => {
    const colorList: string[] = ["#FFFFFF", "#6F83A4", "#F1DDAA"]
    const sizeList: string[] = ["XXS", "XS", "S", "M", "L"]
    const price: number = 29000
    const name: string = "Белая куртка"
    const image: string = process.env.PUBLIC_URL + "/media/category/jacket.png"

    return (
        <div className="product-block">
            <div className="product-block_photo">
                <img src={image} alt="jacket"/>
            </div>
            <div className="product-block_like">
                <svg>
                    <use href="./media/sprites.svg#like"/>
                </svg>
            </div>
            <div className="product-block_name"><span className="new-item">{name}</span></div>
            <div className="product-block_price"><b>{price} грн</b></div>
            <ul className="product-block_size-list">
                {
                    sizeList.map((item, id) => <li key={id}>{item}</li>)
                }
            </ul>
            <ul className="product-block_color-list">
                {
                    colorList.map((item, id) => <li key={id} style={{background: item}}/>)
                }
            </ul>
        </div>
    );
};

export default ProductBlock;