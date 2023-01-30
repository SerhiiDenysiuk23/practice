import React from 'react';

const Breadcrumb = () => {
    return (
        <ul className="breadcrumb">
            {
                [...Array(2)].map((value, index, array)=> <li key={index}><a href="">item</a></li>)
            }
        </ul>
    );
};

export default Breadcrumb;